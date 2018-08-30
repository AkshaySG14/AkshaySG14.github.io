import React from "react";

class MapBlueSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Map Blue
                </h1>
                <p>
                    Map Blue is an iOS app that was made during the first-year University of Michigan course ENGR 100. A
                    collaborative effort, Map Blue was developed by my ENGR 100 team - consisting of University of Michigan engineers Nadya Barghouty, James Jiang,
                    Sharon Sun, and Akshay Subramaniam.
                    <br/><br/>
                    Designed to be a simple app, Map Blue itself features only four screens: a building screen, a room screen, and a
                    primary/secondary map screen. The building screen is where users can select the building for which they wish to be given a
                    map and proper directions, although only one building, the EECS building, has been fully fleshed out.
                    The room screen is where the user selects which room they are coming from, and
                    which room they wish to go to. The main reason for the design decision behind the user manually entering their location, rather
                    than tracking their location and only asking for their destination, was
                    that it was immensely difficult to accurately keep track of a user's location inside of a building via geolocation. The second reason behind it
                    was that if the user were to have spotty connection while their location was being determined via geolocation,
                    it would greatly hamper efforts to guide them. Thus, requiring the user to enter their current location and destination
                    eliminated the difficulty of tracking their location via GPS, and prevented a spotty connection from frustrating users.
                    <br/><br/>
                    The final two screens, the primary and secondary map
                    screens, show electronic displays of the building floorplans for the building the user has selected. The primary map
                    screen shows the layout of the floor the user is on and the directions the user needs to get from their
                    current location to their destination (or the stairs leading to their destination should it lie on another floor).
                    On the other hand, the secondary, and potentially unneeded, map screen shows the second floor the user must traverse with corresponding
                    directions.
                    <br/><br/>
                    To try out this mobile app, one can download the simulation files and run it via Xcode,
                    either through the iPhone simulator or directly on a device that uses iOS.
                </p>

                <br/>

                <h3>
                    How and Why Map Blue Was Made
                </h3>

                <p>
                    Map Blue was our final group project for ENGR 100 - Urban Mobility. It was about a month-long endeavor
                    whose purpose was to construct a mobility-focused app that could assist University of Michigan students.
                    After noticing that the EECS, Dow, and GG Brown buildings were challenging for students to navigate through,
                    especially for new students, we designed and developed Map Blue, an app that specifically
                    targeted improving mobility indoors. Although we did not manage to fully flesh out the app, we did succeed in
                    creating a function app that was tested with actual users, and creating a full presentation and display for it.

                    <br/><br/>
                    On the more technical side, Map Blue was an iOS app entirely designed in Swift. It was made as an
                    iOS app because the team felt that Swift and iOS app
                    development as a whole was a fast, efficient, and easy way to develop an app that would reach a large
                    amount of users. Though a little rough around the edges due to time constrains, Map Blue has a robust
                    and extensible software architecture that could easily form the base of a fully functional and useful app. Developing
                    Map Blue also certainly taught me how to properly design an iOS app, and create a flexible and efficient
                    architecture in Swift that serves the user's needs in milliseconds.
                    <br/>
                </p>
            </div>
        );
    };
}

export default MapBlueSummaryComponent;