import React from "react";

class TrafficDirectorSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Traffic Director
                </h1>
                <p>
                    Traffic director is a very simplistic game made in python. The goal of traffic director is to direct traffic on
                    three intersections, and ensure that cars get to their destination while not colliding and while not staying on the
                    road too long. The game is operated via mouse clicks exclusively. The only thing the user has to do is to change
                    the traffic lights on the roads from red to green and vice-versa. A red light stops all cars at the intersection,
                    while a green light lets them pass.
                    <br/><br/>
                    Traffic director was made in Python, and uses the pygame module to draw the sprites on the screen. The code is
                    extremely easy to digest, and is prime learning material for those new to the script.
                    <br/><br/>
                    NOTE: Unfortunately, I was unable to package the game properly, and the game must be run via python from one's computer with pygame downloaded.
                </p>

                <h3>
                    How and Why Traffic Director Was Made
                </h3>

                <p>
                    Before Traffic Director I had never thought of making an application in Python. Eventually, I became curious and decided to learn Python and make a Python-based game. That game was of course Traffic Director, and
                    utilizing the PyGame, a Python multimedia library, I successfully wrote the game both quickly and
                    thoroughly.
                    <br/><br/>
                    Traffic Director is written in easily-digestible Python. It uses the PyGame multimedia library for rendering
                    purposes, and as such a basic understanding of PyGame is needed to understand the entirety of the source code, but
                    largely irrelevant for assessing the fundamentals of the code.
                    <br/>
                </p>
            </div>
        );
    };
}

export default TrafficDirectorSummaryComponent;