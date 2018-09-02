import React from "react";

import screenshot1 from "./images/pixel_knight/pixelknightscreen1.png"
import screenshot2 from "./images/pixel_knight/pixelknightscreen2.png"
import screenshot3 from "./images/pixel_knight/pixelknightscreen3.png"
import screenshot4 from "./images/pixel_knight/pixelknightscreen4.png"
import screenshot5 from "./images/pixel_knight/pixelknightscreen5.png"
import screenshot6 from "./images/pixel_knight/pixelknightscreen6.png"

class PixelKnightScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Pixel Knight Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Pixel Knight Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Pixel Knight Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Pixel Knight Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Pixel Knight Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Pixel Knight Screenshot Six"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default PixelKnightScreenshotComponent;