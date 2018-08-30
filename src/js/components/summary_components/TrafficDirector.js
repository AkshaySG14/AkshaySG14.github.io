import React from "react";

class TrafficDirectorSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Fate's Reprise
                </h1>
                <p>
                    Fate's Reprise is a desktop game, and is heavily inspired by the handheld game Link's Awakening.
                    Fate's Reprise is a top-down game where the player controls a single character named Daur.
                    The goal of the game is to rescue eight gods who are trapped in formidable dungeons.
                    Fate's Reprise makes use of fluid combat, puzzle-solving, and interesting dialogue to create an intriguing and
                    deep game that users will find both challenging and interesting. By battling with both sword and spells,
                    the game offers a variety of ways to tackle enemies and bosses as well as numerous, difficult puzzles.
                    <br/><br/>
                    As a computer game, Fate's Reprise is operated through the keyboard exclusively. The basic movement controls are
                    the WASD scheme. Press F to talk to someone or activate a button/event.
                    Press J, K, or L to use the items in the game.
                    Press Esc to go to the pause menu, where the user may equip items using the WASD and JKL keys.
                    Pressing the Esc key when a shop windows is open will close it. Additionally, by pressing the secondary button
                    (X) on the pause screen, the user may go to a secondary screen, where the user can view his/her quest items and
                    save/quit the game. Pressing the X button on the normal screen will bring up the map of the overworld/dungeons.
                    <br/><br/>
                    For anyone wishing to play the game itself, a jar is available for download, which allows any OS to easily launch
                    and run the game. It is located in the Jar Folder in the main folder. Simply double click and play. If for whatever
                    reason this doesn't work, the jar file can be launched via terminal/command line. However, the jar file name must
                    be changed to something without a space and apostrophe before being launched via terminal/command line.
                    <br/><br/>
                    Some of the sounds of the game are taken directly from Link to the Past, Link's Awakening, and Link Oracle of Seasons/Ages. Some were created by myself using the various chiptunes soundmakers online. The music of the game is all directly ripped from Link's Awakening, as it was a great source of inspiration for Fate's Reprise.
                    <br/><br/>
                    NOTE: The game is as of yet unfinished. However, the game up until the first dungeon may be completed.
                </p>

                <h3>
                    How and Why Fate's Reprise Was Made
                </h3>

                <p>
                    Initially, Fate's Reprise was made as an attempt to expand upon my knowledge of Java after completing my first desktop game,
                    Pixel Knight. As I felt Pixel Knight to be too simple and unpolished for my liking, I sought to use my acquired
                    knowledge to create a polished and aesthetically pleasing game. To date, Fate's Reprise is the most complicated
                    coding project I have attempted, and it shows in the numerous, varied aspects of the game.
                    <br/><br/>
                    Language-wise, Fate's Reprise is completely written in Java, and is built upon the Libgdx Java framework. However,
                    Libgdx is mostly used for the rendering of the sprites and the background, and thus is largely unnecessary to
                    understand the code of this game. The game can be understood with a decent understanding of Java, and can be read
                    and used as a learning tool.
                    <br/>
                </p>
            </div>
        );
    };
}

export default TrafficDirectorSummaryComponent;