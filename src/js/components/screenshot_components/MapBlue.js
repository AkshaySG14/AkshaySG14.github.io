import React from "react";

import { Col, Image } from "react-bootstrap"

import screenshot1 from "./images/map_blue/mapbluescreen1.png"
import screenshot2 from "./images/map_blue/mapbluescreen2.png"
import screenshot3 from "./images/map_blue/mapbluescreen3.png"
import screenshot4 from "./images/map_blue/mapbluescreen4.png"

class MapBlueScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <Col sm={3}>
                        <Image src={screenshot1} alt="Map Blue Screenshot One" responsive/>
                    </Col>
                    <Col sm={3}>
                        <Image src={screenshot2} alt="Map Blue Screenshot Two" responsive/>
                    </Col>
                    <Col sm={3}>
                        <Image src={screenshot3} alt="Map Blue Screenshot Three" responsive/>
                    </Col>
                    <Col sm={3}>
                        <Image src={screenshot4} alt="Map Blue Screenshot Four" responsive/>
                    </Col>
                </div>
            </div>
        );
    };
}

export default MapBlueScreenshotComponent;