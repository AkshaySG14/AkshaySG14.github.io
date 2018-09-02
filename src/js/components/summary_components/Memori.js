import React from "react";

class MemoriSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Memori
                </h1>
                <p>
                    Memori is a simple memory game involving patterns. Memori was a game developed for android, and consists of players
                    memorizing and then repeating randomly selected patterns of circles. The game itself was developed on android studio,
                    and uses no game engine to support itself. Thus, the code may be a little verbose. Nevertheless, the code does
                    function and should provide for a learning experience for aspiring android developers. To access the game itself,
                    the application must be downloaded from the android store.
                    <br/>
                    NOTE: The game is only available on android and can only be downloaded through the Google Play Store
                </p>

                <br/>

                <h3>
                    How and Why Memori Was Made
                </h3>

                <p>
                    Inspired by the power of Java after taking AP Computer Science, I decided to attempt to hardcode an Android application. Thus I began developing Memori, and
                    created the game after a couple of months learning how to code in Android. After much hard work, I finally produced a finished product that could be published, and released
                    it on the Google Play Store.
                    <br/><br/>
                    Language-wise, Memori is coded with absolutely no engine or software assistance.
                    Thus, Memori can be read without any knowledge other than a basic understanding of Java and cursory knowledge of the Android APIs. However, the game does require basic
                    runtime knowledge such as locking and running threads, multithreading, and basic rendering concepts.
                    <br/><br/>
                    The code for Memori is noticeably untidy, as it was my first attempt at a legitimate, long-term application. That
                    being said, it should still be decently readable and didactic.
                    <br/>
                </p>
            </div>
        );
    };
}

export default MemoriSummaryComponent;