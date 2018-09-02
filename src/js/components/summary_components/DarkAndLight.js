import React from "react";

class DarkAndLightSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Dark and Light
                </h1>
                <p>
                    Dark and Light is a light-based game that is quite simple to operate. The player controls one small green ball that
                    can move in any direction. Because the game takes place in complete darkness, the player can also switch on and off
                    a green flash light. However, the player does not only have to contend with darkness alone, he is also antagonized
                    by numerous enemies who use different shades of light to injure the player. Navigating through the darkness, the
                    player must reach the end of the level safely, solving puzzles and dodging enemies along the way.
                    <br/><br/>
                    The game can only be played through the use of a computer (either Mac or PC), and is run through a Java jar.
                    Both a keyboard and a mouse are necessary to play this game. Language-wise, the game is written solely in Java, and
                    utilizes the Libgdx framework, as well as the box2d and box2dlight extensions. The programming behind the game consists
                    mainly of math, in the areas of both physics and geometry. Despite this, the game only requries an elementary
                    understanding of math to comprehend, and the code itself is not terribly difficult to comprehend.
                    <br/><br/>
                    The basic controls of the game are as follows: WASD keys for movement and a mouse for rotating the flashlight and
                    turning it on/off.
                </p>

                <h3>
                    How and Why Dark and Light Was Made
                </h3>

                <p>
                    Dark and Light was a project made to play with the Box2D phyiscs and lights library. As I had never used lighting
                    or serious physics in my previous applications, I wished to experiment with these concepts in code. The game itself
                    makes extensive use of the Box2D library, and uses real force concepts to create the lighting and physics effects.
                    <br/><br/>
                    Language-wise, Dark and Light is completely written in Java, and is built upon the Libgdx and Box2D Java libraries.
                    However, Libgdx is mostly used for the rendering of the sprites and the background, and thus is largely unnecessary to
                    understand the code of this game. Similarly Box2D is only used for rendering and some movement. The game can be
                    understood with a decent understanding of Java, and can be read and used as a learning tool.
                    <br/>
                </p>
            </div>
        );
    };
}

export default DarkAndLightSummaryComponent;