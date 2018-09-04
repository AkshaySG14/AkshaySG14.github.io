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
                    This site was made in React-Redux, with some third party libraries for UI purposes (such as
                    React-Bootstrap, awesome-fonts, etc.). Originally, this website was made in HTML, CSS, and
                    Javascript (with some heavy jQuery). However, after realizing the wonders of React-Redux and the
                    immense efficiency it brings to the website and the maintainability and clarity it adds to the
                    code, I decided to redesign the website in React-Redux. I learned React-Redux primarily during my internships,
                    but the actual construction of the site was done with the help of React documentation and
                    several online websites (Stack Overflow being the primary one). The end result is an app that is
                    much cleaner and easier to maintain than my previous HTML website, and one that is far speedier,
                    maintainable, and scalable than the one I had before.
                </p>
            </div>
        );
    };
}

export default HomeSummaryComponent;