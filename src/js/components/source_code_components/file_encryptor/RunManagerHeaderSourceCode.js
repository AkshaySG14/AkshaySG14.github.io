import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class RunManagerHeaderSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  RunManager.h
//  File Encryptor
//
//  Created by Akshay Subramaniam on 9/6/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#ifndef __File_Encryptor__RunManager__
#define __File_Encryptor__RunManager__

#include &lt;stdio.h&gt;
#include &lt;SFML/Audio.hpp&gt;
#include &lt;SFML/Graphics.hpp&gt;
#include "Encryptor.h"
#include "Decryptor.h"
#include "EncryptionHandler.h"
#include "DecryptionHandler.h"
#include "ResourcePath.hpp"
#include &lt;map&gt;

using namespace std;

#endif /* defined(__File_Encryptor__RunManager__) */

class RunManager {
public:
    // Class constructor.
    RunManager(sf::RenderWindow *window);

    // The texts that make up the UI.
    sf::Text encryptTitleText, decryptTitleText;
    sf::Text encryptText, decryptText;
    sf::Text encryptFileLocationText, decryptFileLocationText;
    sf::Text ECBText, CBCText, CTRText;
    // The buttons.
    sf::Text chooseELocation, chooseDLocation;
    sf::Sprite encryptButton, decryptButton;
    sf::Sprite ECBButton, CBCButton, CTRButton;
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
    std::map&lt;std::string, bool&gt; buttonMap;

    void createUI();
    void createText();
    void createHashMap();

    void highlightButton(int, int, sf::Sprite*, std::string, sf::Text*);
    void pressButton(int, int, sf::Sprite*, std::string, sf::Text*);
    void handleClick(std::string);
    void unhighlightButton(sf::Sprite*, bool*, sf::Text*);
    void unhighlightButtons(int);

    void encryptFile();
    void decryptFile();
    void successMessage(bool, bool);
};`}
            </PrismCode>
        )
    }
}

export default RunManagerHeaderSourceCode;