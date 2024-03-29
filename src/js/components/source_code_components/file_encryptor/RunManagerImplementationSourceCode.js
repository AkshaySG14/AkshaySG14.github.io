import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class RunManagerImplementationSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  RunManager.cpp
//  File Encryptor
//
//  Created by Akshay Subramaniam on 9/6/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#include "RunManager.h"

// This fairly large class handles all clicking and mouse movement.
RunManager::RunManager(sf::RenderWindow *window) : window(*window) {
    // Creates all the UIs and creates the hashmap for individual UI handling.
    createUI();
    createText();
    createHashMap();
}

// This method is responsible for checking whether the user has moused over any of the buttons. If he or she has, it highlights that respective button.
void RunManager::checkButtons(float x, float y) {
    // Gives the x-coordinate of the mouse position, the y-coordinate of the mouse position, the pointer to the button itself (manifest as a sprite), the hashmap that tells the state of the button, and the pointer to the text of the button.
    highlightButton(x, y, &encryptButton, "encrypt", &encryptText);
    highlightButton(x, y, &decryptButton, "decrypt", &decryptText);
    highlightButton(x, y, &ECBButton, "ECB", &ECBText);
    highlightButton(x, y, &CBCButton, "CBC", &CBCText);
    highlightButton(x, y, &CTRButton, "CTR", &CTRText);
    highlightButton(x, y, &encryptFileSelector, "eFile", &encryptFileLocationText);
    highlightButton(x, y, &decryptFileSelector, "dFile", &decryptFileLocationText);
}

// If the user has selected either of the location boxes, allows the user to type text into the location boxes. This is used to create the encryption and decryption file location.
void RunManager::handleTyping(char key) {
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
void RunManager::checkLocationLength(bool encrypt) {
    if (encrypt) {
        // If the location is less than 24 characters, it will use the non-truncated string to display.
        if (encryptFileLocation.length() &lt; 24)
            encryptFileLocationText.setString(encryptFileLocation);

        // Otherwise will set the shortened string to the closest / that is at least 23 letters away from the end all the way to the end. Also adds an ellipse before the string to represent its truncation.
        else if (concEncryptFileLocation.length() &gt; 23 || concEncryptFileLocation.length() &lt; 4)
            for (int i = 0; i &lt; encryptFileLocation.length(); i ++)
                if (encryptFileLocation[i] == '/' && encryptFileLocation.length() - i &lt; 23) {
                    concEncryptFileLocation = "..." + encryptFileLocation.substr(i + 1, encryptFileLocation.length() - i);
                    encryptFileLocationText.setString(concEncryptFileLocation);
                }
    }
    else {
        // Same but for decryption.
        if (decryptFileLocation.length() &lt; 24)
            decryptFileLocationText.setString(decryptFileLocation);

        else if (concDecryptFileLocation.length() &gt; 23 || concDecryptFileLocation.length() &lt; 4)
            for (int i = 0; i &lt; decryptFileLocation.length(); i ++)
                if (decryptFileLocation[i] == '/' && decryptFileLocation.length() - i &lt; 23) {
                    concDecryptFileLocation = "..." + decryptFileLocation.substr(i + 1,decryptFileLocation.length() - i);
                    decryptFileLocationText.setString(concDecryptFileLocation);
                }
    }
}

// Deletes the character at the end of each file location if the user has pressed backspace.
void RunManager::backspace() {
    // If the user has selected the encrypt file location box and its lenghth is greater than 0.
    if (typing == 1 && encryptFileLocation.length() &gt; 0) {
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
void RunManager::handleEvents(float x, float y) {
    pressButton(x, y, &encryptButton, "encrypt", &encryptText);
    pressButton(x, y, &decryptButton, "decrypt", &decryptText);
    pressButton(x, y, &ECBButton, "ECB", &ECBText);
    pressButton(x, y, &CBCButton, "CBC", &CBCText);
    pressButton(x, y, &CTRButton, "CTR", &CTRText);
    pressButton(x, y, &encryptFileSelector, "eFile", &encryptFileLocationText);
    pressButton(x, y, &decryptFileSelector, "dFile", &decryptFileLocationText);
}

// Does the actual highlighting of the button.
void RunManager::highlightButton(int x, int y, sf::Sprite *button, string key, sf::Text *text) {
    // Gets the state of the button sprite.
    bool *keyPointer = &buttonMap.at(key);

    // If the button contains the mouse.
    if (button-&gt;getGlobalBounds().contains(x, y)) {
        // If the button state is idle (not highlighted or clicked).
        if (*keyPointer == 0) {
            // If highlighted, sets the button color to a lower transparency.
            button-&gt;setColor(sf::Color(255, 255, 255, 100));
            // Also sets text to lower transparency, if both exist.
            text-&gt;setColor(sf::Color(0, 0, 0, 100));
            *keyPointer = 1;
        }
    }
    // Else if the button does not contain the mouse and its highlighted, the button will be unhighlighted.
    else if (*keyPointer)
        unhighlightButton(button, keyPointer, text);
}

void RunManager::pressButton(int x, int y, sf::Sprite *button, string key, sf::Text *text) {
    bool *keyPointer = &buttonMap.at(key);
    // If the button contains the mouse position, handles the click accordingly.
    if (button-&gt;getGlobalBounds().contains(x, y)) {
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
void RunManager::unhighlightButton(sf::Sprite *button, bool *keyPointer, sf::Text *text) {
    // If the cipher type is playfair but playfair is not moused over, sets its color to green.
    if (button == &ECBButton && cipherType == 0) {
        ECBButton.setColor(sf::Color(0, 255, 0));
        ECBText.setColor(sf::Color(0, 255, 0));
    }

    // Same for all others.
    else if (button == &CBCButton && cipherType == 1) {
        CBCButton.setColor(sf::Color(0, 255, 0));
        CBCText.setColor(sf::Color(0, 255, 0));
    }

    else if (button == &CTRButton && cipherType == 2) {
        CTRButton.setColor(sf::Color(0, 255, 0));
        CTRText.setColor(sf::Color(0, 255, 0));
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
        button-&gt;setColor(sf::Color(255, 255, 255));
        text-&gt;setColor(sf::Color(0, 0, 0));
    }

    // Sets its state back to resting state.
    *keyPointer = 0;
}

// Unhighlights every other button if a cipher button is clicked.
void RunManager::unhighlightButtons(int b) {
    switch (b) {
        case 0:
            // If the ECB button is clicked, unhighlights all other buttons.
            CBCButton.setColor(sf::Color(255, 255, 255));
            CBCText.setColor(sf::Color(0, 0, 0));
            CTRButton.setColor(sf::Color(255, 255, 255));
            CTRText.setColor(sf::Color(0, 0, 0));
            break;
        case 1:
            // If the CBC button is clicked, unhighlights all other buttons.
            ECBButton.setColor(sf::Color(255, 255, 255));
            ECBText.setColor(sf::Color(0, 0, 0));
            CTRButton.setColor(sf::Color(255, 255, 255));
            CTRText.setColor(sf::Color(0, 0, 0));
            break;
        case 2:
            // If the CTR button transposition is clicked, unhighlights all other buttons.
            ECBButton.setColor(sf::Color(255, 255, 255));
            ECBText.setColor(sf::Color(0, 0, 0));
            CBCButton.setColor(sf::Color(255, 255, 255));
            CBCText.setColor(sf::Color(0, 0, 0));
            break;
    }
}

// Sets the color of the button to green if it was clicked and acts accordingly.
void RunManager::handleClick(string key) {
    // If ECB makes button green and sets the cipher type accordingly.
    if (key == "ECB") {
        cipherType = 0;
        ECBButton.setColor(sf::Color(0, 255, 0));
        ECBText.setColor(sf::Color(0, 255, 0));
    }
    // Same but for CBC.
    if (key == "CBC") {
        cipherType = 1;
        CBCButton.setColor(sf::Color(0, 255, 0));
        CBCText.setColor(sf::Color(0, 255, 0));
    }
    // Etc.
    if (key == "CTR") {
        cipherType = 2;
        CTRButton.setColor(sf::Color(0, 255, 0));
        CTRText.setColor(sf::Color(0, 255, 0));
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

void RunManager::drawObjects() {
    // Draws all UI elements.
    window.draw(encryptButton);
    window.draw(decryptButton);
    window.draw(ECBButton);
    window.draw(CBCButton);
    window.draw(CTRButton);
    window.draw(encryptFileSelector);
    window.draw(decryptFileSelector);

    window.draw(encryptTitleText);
    window.draw(decryptTitleText);
    window.draw(encryptText);
    window.draw(decryptText);
    window.draw(CTRButton);
    window.draw(CTRButton);
    window.draw(ECBText);
    window.draw(CBCText);
    window.draw(CTRText);
    window.draw(chooseELocation);
    window.draw(chooseDLocation);
    window.draw(encryptFileLocationText);
    window.draw(decryptFileLocationText);
}

// Creates all the buttons.
void RunManager::createUI() {
    // Creates the button textures from the file path.
    buttonT.loadFromFile(resourcePath() + "Button.png");
    button2T.loadFromFile(resourcePath() + "Button2.png");
    selectorT.loadFromFile(resourcePath() + "FolderSelector.png");

    // Sets the sprites to the texture by using an intermediate sprite.
    sf::Sprite encryptButton(button2T);
    this-&gt;encryptButton = encryptButton;
    sf::Sprite decryptButton(button2T);
    this-&gt;decryptButton = decryptButton;
    sf::Sprite ECBButton(buttonT);
    this-&gt;ECBButton = ECBButton;
    sf::Sprite CBCButton(buttonT);
    this-&gt;CBCButton = CBCButton;
    sf::Sprite CTRButton(buttonT);
    this-&gt;CTRButton = CTRButton;

    sf::Sprite encryptFileSelector(selectorT);
    this-&gt;encryptFileSelector = encryptFileSelector;
    sf::Sprite decryptFileSelector(selectorT);
    this-&gt;decryptFileSelector = decryptFileSelector;

    // Sets the respective positions.
    this-&gt;encryptButton.setPosition(275, 165);
    this-&gt;decryptButton.setPosition(275, 400);

    this-&gt;ECBButton.setPosition(37.5, 500);
    this-&gt;CBCButton.setPosition(337.5, 500);
    this-&gt;CTRButton.setPosition(637.5, 500);

    this-&gt;encryptFileSelector.setPosition(150, 65);
    this-&gt;decryptFileSelector.setPosition(150, 300);
}

// Largely same as for buttons.
void RunManager::createText() {
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
    ECBText = blankText;
    ECBText.setString("ECB");
    ECBText.setPosition(80, 515);

    CBCText = blankText;
    CBCText.setString("CBC");
    CBCText.setPosition(380, 515);

    CTRText = blankText;
    CTRText.setString("CTR");
    CTRText.setPosition(680, 515);

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

void RunManager::createHashMap() {
    buttonMap.insert(pair&lt;string, int&gt; ("encrypt", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("decrypt", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("ECB", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("CBC", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("CTR", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("eFile", 0));
    buttonMap.insert(pair&lt;string, int&gt; ("dFile", 0));
}

void RunManager::encryptFile() {
    // User has no selected a cipher type yet.
    if (cipherType == -1) {
        successMessage(false, true);
        return;
    }
    EncryptionHandler handler(encryptFileLocation, cipherType);
    successMessage(handler.loadFile(), true);
}

void RunManager::decryptFile() {
    DecryptionHandler handler(decryptFileLocation, cipherType);
    successMessage(handler.loadFile(), false);
}

void RunManager::successMessage(bool success, bool encrypt) {
    if (success) {
        if (encrypt) {
            encryptButton.setColor(sf::Color(0, 255, 0));
            encryptText.setColor(sf::Color(0, 255, 0));
        }
        else {
            decryptButton.setColor(sf::Color(0, 255, 0));
            decryptText.setColor(sf::Color(0, 255, 0));
        }
    }
    else {
        if (encrypt) {
            encryptButton.setColor(sf::Color(255, 0, 0));
            encryptText.setColor(sf::Color(255, 0, 0));
        }
        else {
            decryptButton.setColor(sf::Color(255, 0, 0));
            decryptText.setColor(sf::Color(255, 0, 0));
        }
    }
}`}
            </PrismCode>
        )
    }
}

export default RunManagerImplementationSourceCode;