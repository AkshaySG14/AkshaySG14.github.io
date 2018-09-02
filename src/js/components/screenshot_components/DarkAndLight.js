import React from "react";

import screenshot1 from "./images/dark_and_light/darkandlightscreen1.png"
import screenshot2 from "./images/dark_and_light/darkandlightscreen2.png"
import screenshot3 from "./images/dark_and_light/darkandlightscreen3.png"
import screenshot4 from "./images/dark_and_light/darkandlightscreen4.png"
import screenshot5 from "./images/dark_and_light/darkandlightscreen5.png"
import screenshot6 from "./images/dark_and_light/darkandlightscreen6.png"

class DarkAndLightScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Dark and Light Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Dark and Light Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Dark and Light Screenshot Three"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Dark and Light Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Dark and Light Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Dark and Light Screenshot Six"/>
                    </div>
                </div>


            </div>
        );
    };
}

export default DarkAndLightScreenshotComponent;