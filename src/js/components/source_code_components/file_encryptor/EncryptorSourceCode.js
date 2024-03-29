import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class FEEncryptorSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  Encryptor.cpp
//  File Encryptor
//
//  Created by Akshay Subramaniam on 9/6/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "Encryptor.h"

Encryptor::Encryptor(vector&lt;uint8_t&gt; byteVector, int type) : byteVector(byteVector), type(type) {
    initializeKey();
    switch (type) {
        case 0:
            // Executes ECB cipher encryption.
            ECBEncrypt();
            break;
        case 1:
            // Executes CBC cipher encryption.
            CBCEncrypt();
            break;
        case 2:
            // Executes CTR cipher encryption.
            CTREncrypt();
            break;
    }
    // Gives the identifier for the encryptor.
    tailEncrypt();
}

void Encryptor::initializeKey() {
    // Creates the randomly-developed array.
    uint8_t keyArray[] = {134, 44, 27, 173, 229};
    // Sets the vector via a fast way using the array.
    for (int i = 0; i &lt; 5; ++ i)
        key.push_back(keyArray[i]);
}

// Standard Electronic Codebook mode with a rotating key.
void Encryptor::ECBEncrypt() {
    // Encrypts every byte in the file and then adds to the encrypted file vector.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.begin(); byte != byteVector.end(); ++ byte)
        // XORs the byte with the rotating key, thereby encrypting it.
        encryptedByteVector.push_back(getXOR(*byte, getKey()));
}

// Cipher Block Chaining mode with a rotating key.
void Encryptor::CBCEncrypt() {
    // Gets the randomly generated initialization vector.
    srand(time(NULL));
    uint8_t initializationVector = rand() % 256;
    // XORs the first plaintext byte with the initialization vector.
    uint8_t oldByte = getXOR(byteVector.front(), initializationVector);
    // Encrypts the first byte by XORing the newly created byte (old byte) with the key byte to get the encrypted byte.
    oldByte = getXOR(oldByte, getKey());
    // Adds the XORd encrypted byte to the encryption byte vector.
    encryptedByteVector.push_back(oldByte);
    // Adds the rest of the bytes.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.begin() + 1; byte != byteVector.end(); ++ byte) {
        // Creates new byte by XORing current plaintext byte with the previous encrypted byte.
        uint8_t newByte = getXOR(*byte, oldByte);
        // XORs this new byte with the key byte to get the encrypted byte.
        newByte = getXOR(newByte, getKey());
        // Adds the XORd encrypted byte to the encryption byte vector.
        encryptedByteVector.push_back(newByte);
        // Sets this byte as the previous vector for the next iteration of the loop.
        oldByte = newByte;
    }
    // Gives the initialization vector as part of the cipher text. This is for decryption purposes.
    encryptedByteVector.push_back(initializationVector);
}

// Counter mode with a rotating key.
void Encryptor::CTREncrypt() {
    // Gets the randomly generated initialization vector.
    srand(time(NULL));
    uint8_t initializationVector = rand() % 256;
    // Acquires the counter byte, which gives the name of this cipher, and the integer that represents it.
    int counterInt = 0;
    uint8_t counterByte = counterInt;
    // The XORd initialization vector and the counter.
    uint8_t combined;
    // The encrypted byte.
    uint8_t encryptedByte;
    // Adds all the bytes.
    for (vector&lt;uint8_t&gt;::iterator byte = byteVector.begin(); byte != byteVector.end(); ++ byte) {
        // Gets the combined initialization vector and the counter by XORing them together.
        combined = getXOR(counterByte, initializationVector);
        // XORs the first plaintext byte with the combined byte.
        encryptedByte = getXOR(*byte, combined);
        // Encrypts the first byte by XORing the newly created byte with the key byte to get the encrypted byte.
        encryptedByte = getXOR(encryptedByte, getKey());
        // Adds the XORd encrypted byte to the encryption byte vector.
        encryptedByteVector.push_back(encryptedByte);
        // Increases counter and sets byte accordingly.
        counterByte = ++ counterInt;

        // If counter is greater than 255, resets the counter.
        if (counterInt &gt; 255)
            counterByte = (counterInt = 0);
    }
    // Gives the initialization vector as part of the cipher text. This is for decryption purposes.
    encryptedByteVector.push_back(initializationVector);
}

void Encryptor::tailEncrypt() {
    uint8_t identifier;
    switch (type) {
        case 0:
            // If the simplest encryption, adds the extra decimal 25.
            identifier = 25;
            break;
        case 1:
            // If the normal encryption, adds the extra decimal 142.
            identifier = 142;
            break;
        case 2:
            // If the normal encryption, adds the extra decimal 213.
            identifier = 213;
            break;
    }
    encryptedByteVector.push_back(identifier);
}

uint8_t Encryptor::getKey() {
    // Gets the byte that will be returned by selecting a byte from the key's rotation.
    uint8_t keyByte = key.at(count - 1);
    // Increases count to rotate the key.
    ++ count;
    // Ensures that count is always above zero and below six. That way when count is passed as a position there is no out of bounds exception.
    if (count != 5)
        count %= 5;
    // Returns the byte.
    return keyByte;
}

// XORs one byte with another.
uint8_t Encryptor::getXOR(uint8_t firstByte, uint8_t secondByte) {
    return firstByte ^= secondByte;
}

// Returns encrypted file expressed as a vector.
vector&lt;uint8_t&gt; Encryptor::getEncryptedFile() {
    return encryptedByteVector;
}`}
            </PrismCode>
        )
    }
}

export default FEEncryptorSourceCode;