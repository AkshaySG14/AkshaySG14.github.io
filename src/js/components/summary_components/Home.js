import React from "react";

class HomeSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Welcome to Akshay's Applications
                </h1>

                <p>
                    My love for programming began in a very humble environment. Back around the early 2000's when I was very young,
                    I used to program Warcraft III: The Frozen Throne games. Though my youthful inexperience prevented me from
                    finishing the majority of my custom games, these early attempts sparked my passion for programming, and I learned a great deal of coding principles from working with the psuedo-language JASS.
                    <br/><br/>
                    As I grew, I began to learn actual
                    programming languages, and utilized my newly-gained knowledge to create the various programs on this site.
                    These applications do not only serve as outlets for my love of programming, but also show how far I've come as a
                    software developer since I began. They also greatly boosted my knowledge of each individual
                    programming language and software development as a whole.
                </p>
                <p>
                    This site is a compilation of all the different projects I've worked on thus far. These have been written in a
                    variety of languages and are based on different rendering engines.
                    <br/><br/>
                    Note that these projects are coded without the use of any software to develop them such as GameSalad or other GameMakers. This
                    means that they are for the most part written completely from scratch (some entirely so), and can be read solely
                    based on knowledge accrued from study of the various programming languages.
                </p>

                <h3>
                    How This Website Was Made
                </h3>
                <p>
                    This site was made in HTML, CSS, and jQuery. It utilizes Bootstrap and FontAwesome for its design and images, and PrismJS and UnderscoreJS for some functions. Its code can be easily read and modified, and can serve
                    as a beginner's learning tool. Its purpose was to help me learn and apply the basic techniques of web development, and to serve as a web
                    portfolio for a look into my independent applications and how I code.
                </p>
            </div>
        );
    };
}

export default HomeSummaryComponent;