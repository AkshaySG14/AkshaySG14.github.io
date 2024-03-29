import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class TextEncryptorHeaderSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
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

export default TextEncryptorHeaderSourceCode;