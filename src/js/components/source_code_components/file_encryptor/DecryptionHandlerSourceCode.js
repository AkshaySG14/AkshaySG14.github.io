import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class DecryptionHandlerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  DecryptionHandler.cpp
//  File Encryptor
//
//  Created by Akshay Subramaniam on 11/6/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "DecryptionHandler.h"

DecryptionHandler::DecryptionHandler(string filePath, int cipherType) : filePath(filePath), cipherType(cipherType) {
    // Gets the file path and the cipher type. Casts the file path expressed as a string to a constant char pointer, in order to pass this to some methods.
    filePathChar = this-&gt;filePath.c_str();
}

bool DecryptionHandler::loadFile() {
    // Buffer that stores file content.
    uint8_t *buffer;
    // The file itself.
    FILE *file;
    // Size of the file.
    long fileSize;
    // Added file size. This is caused by the addition of the identifier byte, and possibly the initialization vector.
    long extraSize;
    // If CBC or CTR give the space necessary for the insertion of the initialization vector.
    if (cipherType &gt; 0)
        extraSize = 2;
    else
        extraSize = 1;

    try {
        // Gets the file pointer. This is why the earlier conversion as necessary.
        file = fopen(filePathChar, "rb");

        // If there exists no such file, exits the code without throwing an exception and thus crashing.
        if (file == NULL) {
            free(buffer);
            fclose(file);
            return false;
        }

        // Gets the file size.
        fileSize = getFileSize(file);
        // Creates a buffer to store the file content. This gives the full memory necessary.
        buffer = (uint8_t*) malloc(fileSize);

        // Copies contents to this buffer (note the use of the original size to properly copy the file contents).
        fread(buffer, fileSize, 1, file);
        // This is the byte vector that is used in the actual encryptor.
        vector&lt;uint8_t&gt; fileVector;
        // Adds every byte in the buffer to the aforementioned vector.
        for (int i = 0; i &lt; fileSize; ++ i)
            fileVector.push_back(buffer[i]);

        // Encrypts the file.
        Decryptor decryptor(fileVector);
        // Gets the encrypted file, expressed as a vector.
        vector&lt;uint8_t&gt; newFileVector = decryptor.getDecryptedFile();

        //Re-allocates the memory to buffer, as it does not include the identifier byte any longer and possibly the initialization vector.
        buffer = (uint8_t*) malloc(fileSize - extraSize);

        // Writes each encrypted byte to the buffer.
        for (int i = 0; i &lt; fileSize - extraSize; ++ i)
            buffer[i] = newFileVector.at(i);

        // Goes back to the beginning.
        rewind(file);

        // Converts the file to wrtiing mode.
        file = fopen((const char*) filePathChar, "wb");
        // Writes the encrypted buffer to the file. This creates the encrypted file.
        fwrite(buffer, 1, fileSize - extraSize, file);

        // Cleans up the buffer.
        free(buffer);
        // Closes the file.
        fclose(file);

        // Tells the runmanager execution was successful.
        return true;
    }
    // If any exception is thrown, ensures that the program will not crash.
    catch (...) {
        // Cleans up and closes.
        free(buffer);
        fclose(file);
        return false;
    }
}

// Gets the file size by seeking the end of file and counting the amount of memory processed.
long DecryptionHandler::getFileSize(FILE *pFile) {
    // Gets to the end of the file.
    fseek(pFile, 0, SEEK_END);
    // Checks the displacement of position in terms of memory from beginning to the end.
    long lSize = ftell(pFile);
    // Sets the file back to the beginning to ensure that next time the file is used to read, it will start from the beginning.
    rewind(pFile);
    // Returns the file size.
    return lSize;
}`}
            </PrismCode>
        )
    }
}

export default DecryptionHandlerSourceCode;