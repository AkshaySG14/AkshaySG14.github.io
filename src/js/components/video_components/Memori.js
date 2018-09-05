import React from "react";

import video from "./videos/Memori.mp4"

class MemoriVideoComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="video"/>

                <h2>Video Preview</h2>
                <video width="600" height="400" preload="none" controls>
                    <source src={video}/>
                    Your browser is unable to play this video.
                </video>
            </div>
        );
    };
}

export default MemoriVideoComponent;