import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class TextEncryptorImplementationSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  TextEncryptor.cpp
//  Text Encryptor
//
//  Created by Akshay Subramaniam on 5/5/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "TextEncryptor.h"

// This fairly large class handles all clicking and mouse movement.
TextEncryptor::TextEncryptor(sf::RenderWindow *window) : window(*window) {
    // Creates all the UIs and creates the hashmap for individual UI handling.
    createUI();
    createText();
    createHashMap();
}

// This method is responsible for checking whether the user has moused over any of the buttons. If he or she has, it highlights that respective button.
void TextEncryptor::checkButtons(float x, float y) {
    // Gives the x-coordinate of the mouse position, the y-coordinate of the mouse position, the pointer to the button itself (manifest as a sprite), the hashmap that tells the state of the button, and the pointer to the text of the button.
    highlightButton(x, y, &encryptButton, "encrypt", &encryptText);
    highlightButton(x, y, &decryptButton, "decrypt", &decryptText);
    highlightButton(x, y, &playfairButton, "playfair", &playfairText);
    highlightButton(x, y, &hillButton, "hill", &hillText);
    highlightButton(x, y, &colTranspoButton, "col", &colTranspoText);
    highlightButton(x, y, &colPlayfairButton, "colPlayfair", &colPlayfairText1, &colPlayfairText2);
    highlightButton(x, y, &colHillButton, "colHill", &colHillText1, &colHillText2);
    highlightButton(x, y, &encryptFileSelector, "eFile", &encryptFileLocationText);
    highlightButton(x, y, &decryptFileSelector, "dFile", &decryptFileLocationText);
}

// If the user has selected either of the location boxes, allows the user to type text into the location boxes. This is used to create the encryption and decryption file location.
void TextEncryptor::handleTyping(char key) {
    // If encryption box was selected.
    if (typing == 1) {
        // Adds the new character to the location string, as well as the shortened version of the string (which appears on the screen for the user to see).
        encryptFileLocation += key;
        concEncryptFileLocation += key;
        // Sets the on-screen text UI to the shortened string.
        encryptFileLocationText.setString(concEncryptFileLocation);
        // Checks if the shortened string needs to be further shortened so that it fits in the location box.
        checkLocationLength(true);
    }
    // If decryption box was selected. Same but for decryption.
    else if (typing == 2) {
        decryptFileLocation += key;
        concDecryptFileLocation += key;
        decryptFileLocationText.setString(concDecryptFileLocation);
        checkLocationLength(false);
    }
}

// Checks if the shortened string is too long.
void TextEncryptor::checkLocationLength(bool encrypt) {
    if (encrypt) {
        // If the location is less than 24 characters, it will use the non-truncated string to display.
        if (encryptFileLocation.length() < 24)
            encryptFileLocationText.setString(encryptFileLocation);

        // Otherwise will set the shortened string to the closest / that is at least 23 letters away from the end all the way to the end. Also adds an ellipse before the string to represent its truncation.
        else if (concEncryptFileLocation.length() > 23 || concEncryptFileLocation.length() < 4)
            for (int i = 0; i < encryptFileLocation.length(); i ++)
                if (encryptFileLocation[i] == '/' && encryptFileLocation.length() - i < 23) {
                    concEncryptFileLocation = "..." + encryptFileLocation.substr(i + 1, encryptFileLocation.length() - i);
                    encryptFileLocationText.setString(concEncryptFileLocation);
                }
    }
    else {
        // Same but for decryption.
        if (decryptFileLocation.length() < 24)
            decryptFileLocationText.setString(decryptFileLocation);

        else if (concDecryptFileLocation.length() > 23 || concDecryptFileLocation.length() < 4)
            for (int i = 0; i < decryptFileLocation.length(); i ++)
                if (decryptFileLocation[i] == '/' && decryptFileLocation.length() - i < 23) {
                    concDecryptFileLocation = "..." + decryptFileLocation.substr(i + 1,decryptFileLocation.length() - i);
                    decryptFileLocationText.setString(concDecryptFileLocation);
                }
    }
}

// Deletes the character at the end of each file location if the user has pressed backspace.
void TextEncryptor::backspace() {
    // If the user has selected the encrypt file location box and its lenghth is greater than 0.
    if (typing == 1 && encryptFileLocation.length() > 0) {
        // Effectively deletes the last character but setting it to the substring up till that point.
        encryptFileLocation = encryptFileLocation.substr(0, encryptFileLocation.length() - 1);
        // Also applying to the shortened string.
        concEncryptFileLocation = concEncryptFileLocation.substr(0, concEncryptFileLocation.length() - 1);
        // Resets the text string.
        encryptFileLocationText.setString(concEncryptFileLocation);
        // Checks for truncation.
        checkLocationLength(true);
    }
    else if (typing == 2) {
        decryptFileLocation = decryptFileLocation.substr(0, decryptFileLocation.length() - 1);
        concDecryptFileLocation = concDecryptFileLocation.substr(0, concDecryptFileLocation.length() - 1);
        decryptFileLocationText.setString(concDecryptFileLocation);
        checkLocationLength(false);
    }
}

// This method checks if any button is pressed, similar to the highlight method.
void TextEncryptor::handleEvents(float x, float y) {
    pressButton(x, y, &encryptButton, "encrypt", &encryptText);
    pressButton(x, y, &decryptButton, "decrypt", &decryptText);
    pressButton(x, y, &playfairButton, "playfair", &playfairText);
    pressButton(x, y, &hillButton, "hill", &hillText);
    pressButton(x, y, &colTranspoButton, "col", &colTranspoText);
    pressButton(x, y, &colPlayfairButton, "colPlayfair", &colPlayfairText1, &colPlayfairText2);
    pressButton(x, y, &colHillButton, "colHill", &colHillText1, &colHillText2);
    pressButton(x, y, &encryptFileSelector, "eFile", &encryptFileLocationText);
    pressButton(x, y, &decryptFileSelector, "dFile", &decryptFileLocationText);
}

// Does the actual highlighting of the button.
void TextEncryptor::highlightButton(int x, int y, sf::Sprite *button, std::string key, sf::Text *text, sf::Text *text2) {
    // Gets the state of the button sprite.
    int *keyPointer = &buttonMap.at(key);

    // If the button contains the mouse.
    if (button->getGlobalBounds().contains(x, y)) {
        // If the button state is idle (not highlighted or clicked).
        if (*keyPointer == 0) {
            // If highlighted, sets the button color to a lower transparency.
            button->setColor(sf::Color(255, 255, 255, 100));
            // Also sets text to lower transparency, if both exist.
            text->setColor(sf::Color(0, 0, 0, 100));
            if (text2 != NULL)
                text2->setColor(sf::Color(0, 0, 0, 100));
            *keyPointer = 1;
        }
    }
    // Else if the button does not contain the mouse and its highlighted, the button will be unhighlighted.
    else if (*keyPointer == 1)
        unhighlightButton(button, keyPointer, text, text2);
}

void TextEncryptor::pressButton(int x, int y, sf::Sprite *button, std::string key, sf::Text *text, sf::Text *text2) {
    int *keyPointer = &buttonMap.at(key);
    // If the button contains the mouse position, handles the click accordingly.
    if (button->getGlobalBounds().contains(x, y)) {
        handleClick(key);
        // If a cipher button is clicked, this will unhighlight all other cipher buttons.
        unhighlightButtons(cipherType);
    }
    else {
        // If no button was clicked, but a random space was, the encryptfileselector will be unselected, assuming it was selected in the first place.
        if (button == &encryptFileSelector && typing == 1) {
            typing = 0;
            encryptFileSelector.setColor(sf::Color(255, 255, 255));
            encryptFileLocationText.setColor(sf::Color(0, 0, 0));
        }
        // Same but for decryption.
        if (button == &decryptFileSelector && typing == 2) {
            typing = 0;
            decryptFileSelector.setColor(sf::Color(255, 255, 255));
            decryptFileLocationText.setColor(sf::Color(0, 0, 0));
        }
    }

}

// Unhighlights each cipher button, based on whether or not it is selected.
void TextEncryptor::unhighlightButton(sf::Sprite *button, int *keyPointer, sf::Text *text, sf::Text *text2) {
    // If the cipher type is playfair but playfair is not moused over, sets its color to green.
    if (button == &playfairButton && cipherType == 0) {
        playfairButton.setColor(sf::Color(0, 255, 0));
        playfairText.setColor(sf::Color(0, 255, 0));
    }

    // Same for all others.
    else if (button == &hillButton && cipherType == 1) {
        hillButton.setColor(sf::Color(0, 255, 0));
        hillText.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &colTranspoButton && cipherType == 2) {
        colTranspoButton.setColor(sf::Color(0, 255, 0));
        colTranspoText.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &colPlayfairButton && cipherType == 3) {
        colPlayfairButton.setColor(sf::Color(0, 255, 0));
        colPlayfairText1.setColor(sf::Color(0, 255, 0));
        colPlayfairText2.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &colHillButton && cipherType == 4) {
        colHillButton.setColor(sf::Color(0, 255, 0));
        colHillText1.setColor(sf::Color(0, 255, 0));
        colHillText2.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &encryptFileSelector && typing == 1) {
        encryptFileSelector.setColor(sf::Color(0, 255, 0));
        encryptFileLocationText.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &decryptFileSelector && typing == 2) {
        decryptFileSelector.setColor(sf::Color(0, 255, 0));
        decryptFileLocationText.setColor(sf::Color(0, 255, 0));
    }

    // Else the button is simply unhighlighted and its color will be its normal one.
    else {
        button->setColor(sf::Color(255, 255, 255));
        if (text != NULL)
            text->setColor(sf::Color(0, 0, 0));
        if (text2 != NULL)
            text2->setColor(sf::Color(0, 0, 0));
    }

    // Sets its state back to resting state.
    *keyPointer = 0;
}

// Unhighlights every other button if a cipher button is clicked.
void TextEncryptor::unhighlightButtons(int b) {
    switch (b) {
        case 0:
            // If playfair is clicked, unhighlights all other buttons.
            hillButton.setColor(sf::Color(255, 255, 255));
            hillText.setColor(sf::Color(0, 0, 0));
            colTranspoButton.setColor(sf::Color(255, 255, 255));
            colTranspoText.setColor(sf::Color(0, 0, 0));
            colPlayfairButton.setColor(sf::Color(255, 255, 255));
            colPlayfairText1.setColor(sf::Color(0, 0, 0));
            colPlayfairText2.setColor(sf::Color(0, 0, 0));
            colHillButton.setColor(sf::Color(255, 255, 255));
            colHillText1.setColor(sf::Color(0, 0, 0));
            colHillText2.setColor(sf::Color(0, 0, 0));
            break;
        case 1:
            // If hill is clicked, unhighlights all other buttons.
            playfairButton.setColor(sf::Color(255, 255, 255));
            playfairText.setColor(sf::Color(0, 0, 0));
            colTranspoButton.setColor(sf::Color(255, 255, 255));
            colTranspoText.setColor(sf::Color(0, 0, 0));
            colPlayfairButton.setColor(sf::Color(255, 255, 255));
            colPlayfairText1.setColor(sf::Color(0, 0, 0));
            colPlayfairText2.setColor(sf::Color(0, 0, 0));
            colHillButton.setColor(sf::Color(255, 255, 255));
            colHillText1.setColor(sf::Color(0, 0, 0));
            colHillText2.setColor(sf::Color(0, 0, 0));
            break;
        case 2:
            // If columnar transposition is clicked, unhighlights all other buttons.
            playfairButton.setColor(sf::Color(255, 255, 255));
            playfairText.setColor(sf::Color(0, 0, 0));
            hillButton.setColor(sf::Color(255, 255, 255));
            hillText.setColor(sf::Color(0, 0, 0));
            colPlayfairButton.setColor(sf::Color(255, 255, 255));
            colPlayfairText1.setColor(sf::Color(0, 0, 0));
            colPlayfairText2.setColor(sf::Color(0, 0, 0));
            colHillButton.setColor(sf::Color(255, 255, 255));
            colHillText1.setColor(sf::Color(0, 0, 0));
            colHillText2.setColor(sf::Color(0, 0, 0));
            break;
        case 3:
            // If columnar transposition playfair is clicked, unhighlights all other buttons.
            playfairButton.setColor(sf::Color(255, 255, 255));
            playfairText.setColor(sf::Color(0, 0, 0));
            hillButton.setColor(sf::Color(255, 255, 255));
            hillText.setColor(sf::Color(0, 0, 0));
            colTranspoButton.setColor(sf::Color(255, 255, 255));
            colTranspoText.setColor(sf::Color(0, 0, 0));
            colHillButton.setColor(sf::Color(255, 255, 255));
            colHillText1.setColor(sf::Color(0, 0, 0));
            colHillText2.setColor(sf::Color(0, 0, 0));
            break;
        case 4:
            // If columnar transposition hill is clicked, unhighlights all other buttons.
            playfairButton.setColor(sf::Color(255, 255, 255));
            playfairText.setColor(sf::Color(0, 0, 0));
            hillButton.setColor(sf::Color(255, 255, 255));
            hillText.setColor(sf::Color(0, 0, 0));
            colTranspoButton.setColor(sf::Color(255, 255, 255));
            colTranspoText.setColor(sf::Color(0, 0, 0));
            colPlayfairButton.setColor(sf::Color(255, 255, 255));
            colPlayfairText1.setColor(sf::Color(0, 0, 0));
            colPlayfairText2.setColor(sf::Color(0, 0, 0));
            break;
    }
}

// Sets the color of the button to green if it was clicked and acts accordingly.
void TextEncryptor::handleClick(std::string key) {
    // If playfair makes button green and sets the cipher type accordingly.
    if (key == "playfair") {
        cipherType = 0;
        playfairButton.setColor(sf::Color(0, 255, 0));
        playfairText.setColor(sf::Color(0, 255, 0));
    }
    // Same but for hill.
    if (key == "hill") {
        cipherType = 1;
        hillButton.setColor(sf::Color(0, 255, 0));
        hillText.setColor(sf::Color(0, 255, 0));
    }
    // Etc.
    if (key == "col") {
        cipherType = 2;
        colTranspoButton.setColor(sf::Color(0, 255, 0));
        colTranspoText.setColor(sf::Color(0, 255, 0));
    }
    if (key == "colPlayfair") {
        cipherType = 3;
        colPlayfairButton.setColor(sf::Color(0, 255, 0));
        colPlayfairText1.setColor(sf::Color(0, 255, 0));
        colPlayfairText2.setColor(sf::Color(0, 255, 0));
    }
    if (key == "colHill") {
        cipherType = 4;
        colHillButton.setColor(sf::Color(0, 255, 0));
        colHillText1.setColor(sf::Color(0, 255, 0));
        colHillText2.setColor(sf::Color(0, 255, 0));
    }
    // If the encrypt button was clicked the program will encrypt the file based on the location given.
    if (key == "encrypt")
        encryptFile();
    // If the decrypt button was clicked.
    else if (key == "decrypt")
        decryptFile();

    // If encrypt file location was clicked.
    if (key == "eFile") {
        // Informs program the user is typing in the encryption file location.
        typing = 1;
        // Sets encryption file location color.
        encryptFileSelector.setColor(sf::Color(0, 255, 0));
        encryptFileLocationText.setColor(sf::Color(0, 255, 0));

        decryptFileSelector.setColor(sf::Color(255, 255, 255));
        decryptFileLocationText.setColor(sf::Color(0, 0, 0));
    }
    // Same but for decryption file location.
    else if (key == "dFile") {
        typing = 2;
        decryptFileSelector.setColor(sf::Color(0, 255, 0));
        decryptFileLocationText.setColor(sf::Color(0, 255, 0));

        encryptFileSelector.setColor(sf::Color(255, 255, 255));
        encryptFileLocationText.setColor(sf::Color(0, 0, 0));
    }

    // If the user was typing but selects a button other than the two file locations, it unhighlights them both and infroms the program the user has stopped typing.
    if (typing && key != "eFile" && key != "dFile") {
        typing = 0;
        encryptFileSelector.setColor(sf::Color(255, 255, 255));
        encryptFileLocationText.setColor(sf::Color(0, 0, 0));
        decryptFileSelector.setColor(sf::Color(255, 255, 255));
        decryptFileLocationText.setColor(sf::Color(0, 0, 0));
    }
}

void TextEncryptor::drawObjects() {
    // Draws all UI elements.
    window.draw(encryptButton);
    window.draw(decryptButton);
    window.draw(playfairButton);
    window.draw(hillButton);
    window.draw(colTranspoButton);
    window.draw(colPlayfairButton);
    window.draw(colHillButton);
    window.draw(encryptFileSelector);
    window.draw(decryptFileSelector);

    window.draw(encryptTitleText);
    window.draw(decryptTitleText);
    window.draw(encryptText);
    window.draw(decryptText);
    window.draw(playfairText);
    window.draw(hillText);
    window.draw(colTranspoText);
    window.draw(colPlayfairText1);
    window.draw(colPlayfairText2);
    window.draw(colHillText1);
    window.draw(colHillText2);
    window.draw(chooseELocation);
    window.draw(chooseDLocation);
    window.draw(encryptFileLocationText);
    window.draw(decryptFileLocationText);
}

// Creates all the buttons.
void TextEncryptor::createUI() {
    // Creates the button textures from the file path.
    buttonT.loadFromFile(resourcePath() + "Button.png");
    button2T.loadFromFile(resourcePath() + "Button2.png");
    selectorT.loadFromFile(resourcePath() + "FolderSelector.png");

    // Sets the sprites to the texture by using an intermediate sprite.
    sf::Sprite encryptButton(button2T);
    this->encryptButton = encryptButton;
    sf::Sprite decryptButton(button2T);
    this->decryptButton = decryptButton;
    sf::Sprite playfairButton(buttonT);
    this->playfairButton = playfairButton;
    sf::Sprite hillButton(buttonT);
    this->hillButton = hillButton;
    sf::Sprite rowTranspoButton(buttonT);
    this->colTranspoButton = rowTranspoButton;
    sf::Sprite rowPlayfairButton(buttonT);
    this->colPlayfairButton = rowPlayfairButton;
    sf::Sprite rowHillButton(buttonT);
    this->colHillButton = rowHillButton;

    sf::Sprite encryptFileSelector(selectorT);
    this->encryptFileSelector = encryptFileSelector;
    sf::Sprite decryptFileSelector(selectorT);
    this->decryptFileSelector = decryptFileSelector;

    // Sets the respective positions.
    this->encryptButton.setPosition(275, 165);
    this->decryptButton.setPosition(275, 400);

    this->playfairButton.setPosition(37.5, 500);
    this->hillButton.setPosition(187.5, 500);
    this->colTranspoButton.setPosition(337.5, 500);
    this->colPlayfairButton.setPosition(487.5, 500);
    this->colHillButton.setPosition(637.5, 500);

    this->encryptFileSelector.setPosition(150, 65);
    this->decryptFileSelector.setPosition(150, 300);
}

// Largely same as for buttons.
void TextEncryptor::createText() {
    // Creates fonts from file path.
    buttonFont.loadFromFile(resourcePath() + "typewcond_regular.otf");
    titleFont.loadFromFile(resourcePath() + "sansation.ttf");
    fileSelectorFont.loadFromFile(resourcePath() + "NixieOne.ttf");

    // Sets base text that is used to create other texts by setting size, color and font.
    sf::Text blankText;
    blankText.setFont(buttonFont);
    blankText.setCharacterSize(32);
    blankText.setColor(sf::Color::Black);

    sf::Text titleText;
    titleText.setFont(titleFont);
    titleText.setColor(sf::Color::Black);
    titleText.setCharacterSize(34);

    sf::Text selectorText;
    selectorText.setFont(fileSelectorFont);
    selectorText.setColor(sf::Color::Black);
    selectorText.setCharacterSize(34);

    // Sets individual text to base text, sets string and position.
    playfairText = blankText;
    playfairText.setString("Playfair");
    playfairText.setPosition(45, 515);

    hillText = blankText;
    hillText.setString("Hill");
    hillText.setPosition(220, 515);

    colTranspoText = blankText;
    colTranspoText.setString("Transpo");
    colTranspoText.setPosition(350, 515);

    colPlayfairText1 = blankText;
    colPlayfairText2 = blankText;
    colPlayfairText1.setString("Transpo");
    colPlayfairText2.setString("Playfair");
    colPlayfairText1.setPosition(500, 500);
    colPlayfairText2.setPosition(495, 530);

    colHillText1 = blankText;
    colHillText2 = blankText;
    colHillText1.setString("Transpo");
    colHillText2.setString("Hill");
    colHillText1.setPosition(650, 500);
    colHillText2.setPosition(675, 530);

    encryptText = blankText;
    encryptText.setString("Encrypt");
    encryptText.setCharacterSize(52);
    encryptText.setPosition(315, 165);

    decryptText = blankText;
    decryptText.setString("Decrypt");
    decryptText.setCharacterSize(52);
    decryptText.setPosition(315, 400);

    encryptTitleText = titleText;
    encryptTitleText.setString("Please select the text file that you wish to encrypt.");
    encryptTitleText.setPosition(20, 15);

    decryptTitleText = titleText;
    decryptTitleText.setString("Please select the text file that you wish to decrypt.");
    decryptTitleText.setPosition(20, 250);

    encryptFileLocationText = selectorText;
    encryptFileLocationText.setPosition(155, 77.5);

    decryptFileLocationText = selectorText;
    decryptFileLocationText.setPosition(155, 312.5);
}

// Creates the hashmap that tells the program whether a button is highlighted or not. A hashmap was needed so that it could be easily seen which button had what state.
void TextEncryptor::createHashMap() {
    // Each button's key and value clearly created and inserted into the button map..
    buttonMap.insert(std::pair<std::string, int> ("encrypt", 0));
    buttonMap.insert(std::pair<std::string, int> ("decrypt", 0));
    buttonMap.insert(std::pair<std::string, int> ("playfair", 0));
    buttonMap.insert(std::pair<std::string, int> ("hill", 0));
    buttonMap.insert(std::pair<std::string, int> ("col", 0));
    buttonMap.insert(std::pair<std::string, int> ("colPlayfair", 0));
    buttonMap.insert(std::pair<std::string, int> ("colHill", 0));
    buttonMap.insert(std::pair<std::string, int> ("eFile", 0));
    buttonMap.insert(std::pair<std::string, int> ("dFile", 0));
}

// This is the method that feeds the relevant information into the encryptor class.
void TextEncryptor::encryptFile() {
    // The former string is the message itself that needs to be passed (the text in the text file). The latter string is the encrypted version of that text.
    std::string message, cipherText;
    // The object that reads the text file.
    std::ifstream cipherFileIn;
    // Adds an exception if the stream fails to read the file (if an error occurs this guarantees the program will not crash on the user).
    cipherFileIn.exceptions(ifstream::failbit);
    // Ensures that the file reader does NOT skip spaces.
    cipherFileIn >> std::noskipws;
    // The object that outputs the encrypted text to a new file.
    std::ofstream cipherFileOut;
    // Same as previous.
    cipherFileOut << std::noskipws;

    // If the user never selected a file type, the program will highlight red and nothing will occur. Otherwise, the program continues as per normal.
    if (cipherType == -1) {
        successMessage(false, true);
        return;
    }

    // Tries to open file. Otherwise, the same as above.
    try {
        cipherFileIn.open(encryptFileLocation, std::ifstream::in);
    }
    catch (ifstream::failure e) {
        successMessage(false, true);
        return;
    }

    // This is the primitive object used to store each character of the read file.
    char character;
    try {
        // While the reader is not at the end of the file, the reader will read each character.
        while (!cipherFileIn.eof()) {
            // Sets the storage object to the file character.
            cipherFileIn >> character;
            // Adds this character to the message.
            message += character;
        }
        // Closes the file.
        cipherFileIn.close();
    }
    // If for some reason, the program fails during reading, ensures that the application will not exit.
    catch (ifstream::failure e) {
        successMessage(false, true);
        return;
    }

    // The file reader will read the last letter twice. To avoid an extra letter, the program truncates the message to obliviate the last character.
    message = message.substr(0, message.length() - 1);
    // Gets the encryptor to encrypt the message.
    Encryptor::Encryptor encryptor(cipherType, message);
    // Gets the encrypted text of the file.
    cipherText = encryptor.giveCipherText();

    // Opens the same file.
    cipherFileOut.open(encryptFileLocation, std::ifstream::out);
    // Writes the encrypted text to the file. NOTE: This overwrites the original text.
    cipherFileOut << cipherText;
    // Closes text.
    cipherFileOut.close();

    // Highlights the encryption button to let the user know of his/her success.
    successMessage(true, true);
}

// Same as the above.
void TextEncryptor::decryptFile() {
    std::string message, plainText;
    std::ifstream cipherFileIn;
    cipherFileIn.exceptions(ifstream::failbit);
    cipherFileIn >> std::noskipws;
    std::ofstream cipherFileOut;
    cipherFileOut << std::noskipws;

    try {
        cipherFileIn.open(decryptFileLocation, std::ifstream::in);
    }
    catch (ifstream::failure e) {
        successMessage(false, false);
        return;
    }

    char character;
    try {
        while (!cipherFileIn.eof()) {
            cipherFileIn >> character;
            message += character;
        }
        cipherFileIn.close();
    }
    catch (ifstream::failure e) {
        successMessage(false, false);
        return;
    }

    message = message.substr(0, message.length() - 1);
    Decryptor::Decryptor decryptor(message);
    plainText = decryptor.givePlainText();

    cipherFileOut.open(decryptFileLocation, std::ifstream::out);
    cipherFileOut << plainText;
    cipherFileOut.close();

    successMessage(true, false);}

// This is what highlights the encryption button as red or green.
void TextEncryptor::successMessage(bool success, bool encrypt) {
    // If the program did not encounter an exception.
    if (success) {
        // If encrypting.
        if (encrypt) {
            // Highlights encryption button green.
        encryptButton.setColor(sf::Color(0, 255, 0));
        encryptText.setColor(sf::Color(0, 255, 0));
        }
        else {
            // Highlights decryption button red.
        decryptButton.setColor(sf::Color(0, 255, 0));
        decryptText.setColor(sf::Color(0, 255, 0));
        }
    }
    else {
        if (encrypt) {
            // Highlights encryption button green.
            encryptButton.setColor(sf::Color(255, 0, 0));
            encryptText.setColor(sf::Color(255, 0, 0));
        }
        else {
            // Highlights decryption button red.
            decryptButton.setColor(sf::Color(255, 0, 0));
            decryptText.setColor(sf::Color(255, 0, 0));
        }
    }
}//
//  TextEncryptor.h
//  Text Encryptor
//
//  Created by Akshay Subramaniam on 5/5/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#ifndef __Text_Encryptor__TextEncryptor__
#define __Text_Encryptor__TextEncryptor__

#include &lt;stdio.h&gt;
#include &lt;SFML/Audio.hpp&gt;
#include &lt;SFML/Graphics.hpp&gt;
#include "Encryptor.h"
#include "Decryptor.h"
#include "ResourcePath.hpp"
#include &lt;map&gt;
#include &lt;future&gt;
#include &lt;chrono&gt;
#include &lt;thread&gt;
#include &lt;iostream&gt;
#include &lt;cstdlib&gt;
#include &lt;fstream&gt;

#endif /* defined(__Text_Encryptor__TextEncryptor__) */

class TextEncryptor {
public:
    // Class constructor.
    TextEncryptor(sf::RenderWindow *window);

    // The texts that make up the UI.
    sf::Text encryptTitleText, decryptTitleText;
    sf::Text encryptText, decryptText;
    sf::Text encryptFileLocationText, decryptFileLocationText;
    sf::Text playfairText, hillText, colTranspoText, colPlayfairText1, colPlayfairText2,
    colHillText1, colHillText2;
    // The buttons.
    sf::Text chooseELocation, chooseDLocation;
    sf::Sprite encryptButton, decryptButton;
    sf::Sprite playfairButton, hillButton, colTranspoButton, colPlayfairButton, colHillButton;
    sf::Sprite encryptFileSelector, decryptFileSelector;

    void checkButtons(float x, float y);
    void handleEvents(float x, float y);
    void handleTyping(char);
    void checkLocationLength(bool encrypt);
    void backspace();
    void drawObjects();
private:
    // The type that determines which cipher is used in encryption.
    int cipherType = -1;
    // Whether or not the user is typing in a location of either encryption or decryption.
    int typing = 0;
    // The strings for each location.
    std::string encryptFileLocation = "", decryptFileLocation = "";
    // THe shortened strings.
    std::string concEncryptFileLocation, concDecryptFileLocation;
    // Render window.
    sf::RenderWindow &window;
    // Textures for buttons, and fonts for texts.
    sf::Texture buttonT, button2T, selectorT;
    sf::Font buttonFont, titleFont, fileSelectorFont;
    // Hashmap for button states.
    std::map&lt;std::string, int&gt; buttonMap;

    void createUI();
    void createText();
    void createHashMap();

    void highlightButton(int, int, sf::Sprite*, std::string, sf::Text*, sf::Text* = NULL);
    void pressButton(int, int, sf::Sprite*, std::string, sf::Text*, sf::Text* = NULL);
    void handleClick(std::string);
    void unhighlightButton(sf::Sprite*, int*, sf::Text*, sf::Text*);
    void unhighlightButtons(int);

    void encryptFile();
    void decryptFile();
    void successMessage(bool, bool);
};`}
            </PrismCode>
        )
    }
}

export default TextEncryptorImplementationSourceCode;