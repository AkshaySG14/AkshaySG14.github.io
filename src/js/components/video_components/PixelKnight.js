import React from "react";

import video from "./videos/FatesReprise.mp4"

class PixelKnightVideoComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="video"/>

                <h2>Video Preview</h2>
                <video width="640" height="380" preload="none" controls>
                    <source src={video}/>
                    Your browser is unable to play this video.
                </video>
            </div>
        );
    };
}

export default PixelKnightVideoComponent;