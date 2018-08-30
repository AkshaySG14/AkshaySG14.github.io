import React from "react";

import screenshot1 from "./images/fates_reprise/fatesreprisescreen1.png"
import screenshot2 from "./images/fates_reprise/fatesreprisescreen2.png"
import screenshot3 from "./images/fates_reprise/fatesreprisescreen3.png"
import screenshot4 from "./images/fates_reprise/fatesreprisescreen4.png"
import screenshot5 from "./images/fates_reprise/fatesreprisescreen5.png"
import screenshot6 from "./images/fates_reprise/fatesreprisescreen6.png"
import screenshot7 from "./images/fates_reprise/fatesreprisescreen7.png"
import screenshot8 from "./images/fates_reprise/fatesreprisescreen8.png"
import screenshot9 from "./images/fates_reprise/fatesreprisescreen9.png"

class ColorSynthesizerScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail"
                             alt="Fate's Reprise screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Three"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Six"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot7} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Seven"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot8} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Eight"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot9} className="img-thumbnail"
                             alt="Fate's Reprise screenshot Nine"/>
                    </div>
                </div>

            </div>
        );
    };
}

export default ColorSynthesizerScreenshotComponent;