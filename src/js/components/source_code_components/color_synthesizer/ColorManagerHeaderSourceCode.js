import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class ColorManagerHeaderSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-c++">{`//
//  ColorManager.h
//  ColorSynthesizer
//
//  Created by Akshay Subramaniam on 14/1/15.
//  Copyright (c) 2015 Incultus. All rights reserved.
//

#ifndef __ColorSynthesizer__ColorManager__
#define __ColorSynthesizer__ColorManager__

#include &lt;SFML/Audio.hpp&gt;
#include &lt;SFMl/Graphics.hpp&gt;
#include "ResourcePath.hpp"

class ColorManager {
private:
    sf::RenderWindow &window;
    sf::Texture colorSliderT, colorKnobT;
    sf::Texture currentColorT, currentColorB;
    sf::Texture pixelSlitT;
    sf::Font colorFont;
    //Color components of the current color.
    int red = 255, blue = 255, green = 255;

public:
    sf::Text redAmount, blueAmount, greenAmount;
    sf::Color pixelColor = sf::Color::White;

    //The borders of the sliders.
    sf::Sprite colorSliderR, colorSliderB, colorSliderG;
    //The indicator that shows the current color, along with its border.
    sf::Sprite currentColor, currentColorBorder;
    //The knobs of the sliders.
    sf::Sprite colorKnobR, colorKnobB, colorKnobG;
    //The slits (from one to 255) that comprise the actual slider that the user sees.
    std::vector&lt;sf::Sprite&gt; slitsR, slitsB, slitsG;

    ColorManager(sf::RenderWindow *window);
    void createUI();
    void createText();
    void adjustColor(int color, float position);
};
#endif /* defined(__ColorSynthesizer__ColorManager__) */`}
            </PrismCode>
        )
    }
}

export default ColorManagerHeaderSourceCode;