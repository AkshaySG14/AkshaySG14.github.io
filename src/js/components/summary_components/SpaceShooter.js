import React from "react";

class SpaceShooterSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Space Shooter
                </h1>
                <p>
                    Space Shooter is a desktop game that resembles a basic shooter platformer. It is a 2-D platformer where the player
                    controls a small box that is able to shoot bullets. The game's objectives are simple: the player must reach the end
                    door of each of the three levels and must take care to avoid enemies along the way to win. The game's premise and
                    its controls are simple and easy to understand.
                    <br/><br/>
                    Space Shooter is operated through the keyboard exclusively. The player uses the WASD keys to maneuver through the
                    game, and J to shoot.
                    <br/><br/>
                    The game was written in Ruby, and utilizes the Gosu framework for rendering the game. Unlike the other games I have
                    made, excluding the drawing and rendering of the sprites in the game, the game engine was entirely designed by
                    myself, from the creation of the manner through which the game is generated, to the way the game objects are
                    rendered. What is seen on the screen was created through the combination of a pixel map and the use of a
                    custom-made camera.
                    <br/><br/>
                    NOTE: A MAC ONLY application is available for examination or for perusal. This application is essentially a Ruby
                    launcher for the game.
                </p>

                <h3>
                    How and Why Space Shooter Was Made
                </h3>

                <p>
                    As my last game, Space Shooter was meant to serve as a way to familiarize myself with a more modern programming
                    language - Ruby. Though decently similar to Python in my opinion, I found Ruby to be a very flexible and high-level
                    language that allowed me to easily program a game (much unlike the wrestling matches with Java and C++). Using the
                    Gosu development library PURELY for rendering, I created Space Shooter. The game itself has a CUSTOM-BUILT engine
                    that was specifically made by me to make the creation of the game much simpler. This differs from my previous in
                    that I built an engine from the ground-up to make the game much simpler.
                    <br/><br/>
                    Language-wise, Space Shooter is written in Ruby and utilizes the Gosu development library. Due to its nearly
                    complete originality, the code is a bit raw but entirely readable.
                    <br/>
                </p>
            </div>
        );
    };
}

export default SpaceShooterSummaryComponent;