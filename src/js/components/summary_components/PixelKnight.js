import React from "react";

class PixelKnightSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Pixel Knight
                </h1>
                <p>
                    Pixel Knight is a desktop platformer game much like Shovel Knight or Super Mario World.
                    Pixel Knight follows the tale of a lone knight in search of adventure in the Iben Peninsula, and features numerous
                    enemies, levels, and puzzles.
                    <br/><br/>
                    As a computer game, Pixel Knight is operated through the use of arrow keys, the keyboard, and the mouse/trackpad,
                    although some of the settings can be changed in game. Arrow keys are used in the title and over world screen, while
                    the mouse/trackpad is used in option screens and the controls screen. In-game controls are entirely modifiable,
                    although the default controls use the WASD setup in addition to the left, right, and middle mouse buttons.
                    <br/><br/>
                    The game was made through use of the Java framework Libgdx, but still mostly operates upon the principles of Java. The
                    code should be quite easy to read and understand, as long as the reader has a strong grasp of the Java language and
                    Libgdx. For anyone wishing to play the game itself, a jar is available for download, that allows any OS to easily
                    launch and run the game.
                </p>

                <h3>
                    How and Why Pixel Knight Was Made
                </h3>

                <p>
                    Pixel Knight was made as a follow-up to Memori. Where Memori is an android game that is rather simple in
                    design, Pixel Knight is a fully-fledged desktop platformer game that took me months to finish. It was also a game
                    that was much harder to write, as I had to create a platformer with little knowledge beforehand. Essentially, Pixel
                    Knight was an attempt to really challenge and flex my coding abilities, and allowed me to see the extent to which
                    I could create an application using pure Java (with a little help from Libgdx). Though it was nowhere near as
                    complex as I would have liked, Pixel Knight was the first fully-developed desktop game I had made, and stands as a
                    symbol of my commitment to self-improvement.
                    <br/><br/>
                    Language-wise, Pixel Knight is completely written in Java, and is built upon the Libgdx Java framework. However,
                    Libgdx is mostly used for the rendering of the sprites and the background, and thus is largely unnecessary to
                    understand the code of this game. The game can be understood with a decent understanding of Java, and can be read
                    and used as a learning tool.
                    <br/>
                </p>
            </div>
        );
    };
}

export default PixelKnightSummaryComponent;