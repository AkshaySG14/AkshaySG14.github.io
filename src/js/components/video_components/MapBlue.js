import React from "react";

import video from "./videos/MapBlue.mp4"

class MapBlueVideoComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="video"/>

                <h2>Video Preview</h2>
                <video width="960" height="540" preload="none" controls>
                    <source src={video}/>
                    Your browser is unable to play this video.
                </video>
            </div>
        );
    };
}

export default MapBlueVideoComponent;