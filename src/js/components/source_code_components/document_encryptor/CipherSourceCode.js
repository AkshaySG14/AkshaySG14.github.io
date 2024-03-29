import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class CipherSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  Cipher.cpp
//  Text Encryptor
//
//  Created by Akshay Subramaniam on 11/5/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "Cipher.h"

// This is the super class for all ciphers. Its primary purpose is to provide the character matrix that is used for encrypting the playfair and hill ciphers.
Cipher::Cipher(std::string message) : message(message) {
    initializeMatrix();
}

// Creates the matrix that the subclasses use.
void Cipher::initializeMatrix() {
    //Execute without repeating letters
    matrix[0][0] = "E";
    matrix[0][1] = "x";
    matrix[0][2] = "c";
    matrix[0][3] = "u";
    matrix[0][4] = "t";
    matrix[0][5] = "e";
    matrix[0][6] = "C";
    matrix[0][7] = "i";
    matrix[0][8] = "p";
    matrix[1][0] = "h";
    matrix[1][1] = "r";
    //Filling rest of cipher with remaining symbols
    matrix[1][2] = "a";
    matrix[1][3] = "b";
    matrix[1][4] = "d";
    matrix[1][5] = "f";
    matrix[1][6] = "g";
    matrix[1][7] = "j";
    matrix[1][8] = "k";
    matrix[2][0] = "l";
    matrix[2][1] = "m";
    matrix[2][2] = "n";
    matrix[2][3] = "o";
    matrix[2][4] = "q";
    matrix[2][5] = "s";
    matrix[2][6] = "v";
    matrix[2][7] = "w";
    matrix[2][8] = "y";
    matrix[3][0] = "z";
    matrix[3][1] = "A";
    matrix[3][2] = "B";
    matrix[3][3] = "D";
    matrix[3][4] = "F";
    matrix[3][5] = "G";
    matrix[3][6] = "H";
    matrix[3][7] = "I";
    matrix[3][8] = "J";
    matrix[4][0] = "K";
    matrix[4][1] = "L";
    matrix[4][2] = "M";
    matrix[4][3] = "N";
    matrix[4][4] = "O";
    matrix[4][5] = "P";
    matrix[4][6] = "Q";
    matrix[4][7] = "R";
    matrix[4][8] = "S";
    matrix[5][0] = "T";
    matrix[5][1] = "U";
    matrix[5][2] = "V";
    matrix[5][3] = "W";
    matrix[5][4] = "X";
    matrix[5][5] = "Y";
    matrix[5][6] = "Z";
    matrix[5][7] = "0";
    matrix[5][8] = "1";
    matrix[6][0] = "2";
    matrix[6][1] = "3";
    matrix[6][2] = "4";
    matrix[6][3] = "5";
    matrix[6][4] = "6";
    matrix[6][5] = "7";
    matrix[6][6] = "8";
    matrix[6][7] = "9";
    matrix[6][8] = "!";
    matrix[7][0] = "@";
    matrix[7][1] = "#";
    matrix[7][2] = "$";
    matrix[7][3] = "%";
    matrix[7][4] = "^";
    matrix[7][5] = "&";
    matrix[7][6] = "*";
    matrix[7][7] = "(";
    matrix[7][8] = ")";
    matrix[8][0] = "-";
    matrix[8][1] = "=";
    matrix[8][2] = "+";
    matrix[8][3] = ";";
    matrix[8][4] = ":";
    matrix[8][5] = "'";
    matrix[8][6] = "\\"";
    matrix[8][7] = ",";
    matrix[8][8] = "<";
    matrix[9][0] = ".";
    matrix[9][1] = ">";
    matrix[9][2] = "[";
    matrix[9][3] = "{";
    matrix[9][4] = "]";
    matrix[9][5] = "}";
    matrix[9][6] = "/";
    matrix[9][7] = "?";
    matrix[9][8] = " ";
}

// Method responsible for giving the main textencryptor class the cipher text.
std::string Cipher::giveCipherText() {
    return cipherText;
}

// Method responsible for giving the main textencryptor class the plain text.
std::string Cipher::givePlainText() {
    return plainText;
}`}
            </PrismCode>
        )
    }
}

export default CipherSourceCode;