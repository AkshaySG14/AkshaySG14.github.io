import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class DEDecryptorSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  Decryptor.cpp
//  File Encryptor
//
//  Created by Akshay Subramaniam on 9/6/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "Decryptor.h"

Decryptor::Decryptor(vector&lt;uint8_t&gt; byteVector) : byteVector(byteVector) {
    // Initializes rotating key.
    initializeKey();
    // Removes the identifier of the encrypted file.
    type = tailDecrypt();
    switch (type) {
        case 0:
            // Executes ECB cipher decryption.
            ECBDecrypt();
            break;
        case 1:
            // Executes CBC cipher decryption.
            CBCDecrypt();
            break;
        case 2:
            // Executes CTR cipher decryption.
            CTRDecrypt();
            break;
    }
}

void Decryptor::initializeKey() {
    // Creates the randomly-developed array.
    uint8_t keyArray[] = {134, 44, 27, 173, 229};
    // Sets the vector via a fast way using the array.
    for (int i = 0; i &lt; 5; ++ i)
        key.push_back(keyArray[i]);
}

// Standard Electronic Codebook mode with a rotating key.
void Decryptor::ECBDecrypt() {
    // Decrypts every byte in the file and then adds to the decrypts file vector.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.begin(); byte != byteVector.end(); ++ byte)
        // XORs the encrypted byte with the rotating key, thereby decrypting it.
        decryptedByteVector.push_back(getXOR(*byte, getKey()));
}

// Cipher Block Chaining mode with a rotating key.
void Decryptor::CBCDecrypt() {
    // Gets the randomly generated initialization vector.
    uint8_t initializationVector = byteVector.back();
    // This is a temporary vector, as it contains the values for the decrypted vector backwards. This is because this program decrypts the CBC cipher in a backwards direction.
    vector&lt;uint8_t&gt; tempVector;
    // Removes the initialization vector.
    byteVector.pop_back();
    // Sets the count, which should be the LAST count when encrypted.
    count = byteVector.size() % 5;

    // This loop adds the decrypted bytes in a BACKWARDS fashion to the temporary vector.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.end(); byte != byteVector.begin(); -- byte) {
        // XORs the encrypted byte with the key to remove the first layer of encryption.
        uint8_t newByte = getXOR(*byte, getKeyBackwards());
        // XORs this byte with the previous encrypted byte to get the plaintext byte.
        newByte = getXOR(newByte, *(byte - 1));
        // Adds this decrypted byte to the temporary vector.
        tempVector.push_back(newByte);
    }

    // The final (positionally first) byte is XORd with the key to get the unveiled byte.
    uint8_t lastByte = getXOR(byteVector.front(), getKeyBackwards());
    // XORS the this byte to get the final decrypted byte.
    lastByte = getXOR(lastByte, initializationVector);
    // Adds this byte to the temporary vector.
    tempVector.push_back(lastByte);

    // Reorders the vector by adding elements to the decryption vector backwards.
    for (vector&lt;uint8_t&gt;::iterator byte = tempVector.end() - 1; byte != tempVector.begin() - 1; -- byte)
        decryptedByteVector.push_back(*byte);
}

// Counter mode with a rotating key.
void Decryptor::CTRDecrypt() {
    // Gets the randomly generated initialization vector, and removes it from the vector list.
    uint8_t initializationVector = byteVector.back();
    byteVector.pop_back();
    // Acquires the counter byte, which gives the name of this cipher, and the integer that represents it.
    int counterInt = 0;
    uint8_t counterByte = counterInt;
    // The XORd initialization vector and the counter.
    uint8_t combined;
    // The decrypted byte.
    uint8_t decryptedByte;
    // Adds all the bytes.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.begin(); byte != byteVector.end(); ++ byte) {
        // Removes one layer of encryption from the byte by XORing it with the key.
        decryptedByte = getXOR(*byte, getKey());
        // Gets the combined initialization vector and the counter by XORing them together.
        combined = getXOR(counterByte, initializationVector);
        // Gets the decrypted byte by XORing it with the combined byte.
        decryptedByte = getXOR(decryptedByte, combined);
        // Adds the XORd decrypted byte to the decryption byte vector.
        decryptedByteVector.push_back(decryptedByte);
        // Increases counter and sets byte accordingly.
        counterByte = ++ counterInt;

        // If counter is greater than 255, resets the counter.
        if (counterInt &gt; 255)
            counterByte = (counterInt = 0);
    }
}

int Decryptor::tailDecrypt() {
    // Variable for cipher type.
    int newType = -1;
    // If the identifier was created by an ECB cipher, and the identifier at the end is the decimal value 25.
    if (byteVector.back() == 25)
        newType = 0;

    // If created by a CBC cipher.
    if (byteVector.back() == 142)
        newType = 1;

    // If by a CTR cipher.
    if (byteVector.back() == 213)
        newType = 2;

    // Removes identifier.
    byteVector.pop_back();
    // Gives cipher type.
    return newType;
}

uint8_t Decryptor::getKey() {
    // Gets the byte that will be returned by selecting a byte from the key's rotation.
    uint8_t keyByte = key.at(count - 1);
    // Increases count to rotate the key.
    ++ count;
    // Ensures that count is always above zero and below one. That way when count is passed as a position there is no out of bounds exception.
    if (count != 5)
        count %= 5;
    // Returns the byte.
    return keyByte;
}

// Used for getting the key while going from the end of the byte vector to the beginning.
uint8_t Decryptor::getKeyBackwards() {
    // Gets the byte that will be returned by selecting a byte from the key's rotation.
    uint8_t keyByte = key.at(count);
    // Decreases count to rotate the key.
    -- count;
    // Ensures that count is always above or at zero and below five. That way when count is passed as a position there is no out of bounds exception.
    if (count &lt; 0)
        count = 4;
    // Returns the byte.
    return keyByte;
}

// XORs one byte with another.
uint8_t Decryptor::getXOR(uint8_t firstByte, uint8_t secondByte) {
    return firstByte ^= secondByte;
}

vector&lt;uint8_t&gt; Decryptor::getDecryptedFile() {
    return decryptedByteVector;
}`}
            </PrismCode>
        )
    }
}

export default DEDecryptorSourceCode;