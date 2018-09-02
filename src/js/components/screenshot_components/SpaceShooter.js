import React from "react";

import screenshot1 from "./images/space_shooter/spaceshooterscreen1.png"
import screenshot2 from "./images/space_shooter/spaceshooterscreen2.png"
import screenshot3 from "./images/space_shooter/spaceshooterscreen3.png"
import screenshot4 from "./images/space_shooter/spaceshooterscreen4.png"
import screenshot5 from "./images/space_shooter/spaceshooterscreen5.png"
import screenshot6 from "./images/space_shooter/spaceshooterscreen6.png"
import screenshot7 from "./images/space_shooter/spaceshooterscreen7.png"
import screenshot8 from "./images/space_shooter/spaceshooterscreen8.png"
import screenshot9 from "./images/space_shooter/spaceshooterscreen9.png"

class SpaceShooterScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Space Shooter screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Space Shooter screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Space Shooter screenshot Three"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Space Shooter screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Space Shooter screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Space Shooter screenshot Six"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot7} className="img-thumbnail" alt="Space Shooter screenshot Seven"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot8} className="img-thumbnail" alt="Space Shooter screenshot Eight"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot9} className="img-thumbnail" alt="Space Shooter screenshot Nine"/>
                    </div>
                </div>

            </div>
        );
    };
}

export default SpaceShooterScreenshotComponent;