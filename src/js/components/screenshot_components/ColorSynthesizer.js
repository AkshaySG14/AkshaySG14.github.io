import React from "react";

import screenshot1 from "./images/color_synthesizer/colorsynthesizerscreen1.png"
import screenshot2 from "./images/color_synthesizer/colorsynthesizerscreen2.png"
import screenshot3 from "./images/color_synthesizer/colorsynthesizerscreen3.png"
import screenshot4 from "./images/color_synthesizer/colorsynthesizerscreen4.png"
import screenshot5 from "./images/color_synthesizer/colorsynthesizerscreen5.png"
import screenshot6 from "./images/color_synthesizer/colorsynthesizerscreen6.png"

class ColorSynthesizerScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Color Synthesizer Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Color Synthesizer Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Color Synthesizer Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Color Synthesizer Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Color Synthesizer Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Color Synthesizer Screenshot Six"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default ColorSynthesizerScreenshotComponent;