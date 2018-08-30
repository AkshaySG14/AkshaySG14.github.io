import React from "react";

import { Col, Image } from "react-bootstrap"

import screenshot1 from "./images/fates_reprise/fatesreprisescreen1.png"
import screenshot2 from "./images/fates_reprise/fatesreprisescreen2.png"
import screenshot3 from "./images/fates_reprise/fatesreprisescreen3.png"
import screenshot4 from "./images/fates_reprise/fatesreprisescreen4.png"
import screenshot5 from "./images/fates_reprise/fatesreprisescreen5.png"
import screenshot6 from "./images/fates_reprise/fatesreprisescreen6.png"
import screenshot7 from "./images/fates_reprise/fatesreprisescreen7.png"
import screenshot8 from "./images/fates_reprise/fatesreprisescreen8.png"
import screenshot9 from "./images/fates_reprise/fatesreprisescreen9.png"

class FatesReprisescreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <Col sm={4}>
                        <Image src={screenshot1} alt="Fate's Reprise screenshot One" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot2} alt="Fate's Reprise screenshot Two" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot3} alt="Fate's Reprise screenshot Three" thumbnail={true}/>
                    </Col>
                </div>

                <div className="row">
                    <Col sm={4}>
                        <Image src={screenshot4} alt="Fate's Reprise screenshot Four" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot5} alt="Fate's Reprise screenshot Five" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot6} alt="Fate's Reprise screenshot Six" thumbnail={true}/>
                    </Col>
                </div>

                <div className="row">
                    <Col sm={4}>
                        <Image src={screenshot7} alt="Fate's Reprise screenshot Seven" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot8} alt="Fate's Reprise screenshot Eight" thumbnail={true}/>
                    </Col>
                    <Col sm={4}>
                        <Image src={screenshot9} alt="Fate's Reprise screenshot Nine" thumbnail={true}/>
                    </Col>
                </div>

            </div>
        );
    };
}

export default FatesReprisescreenshotComponent;