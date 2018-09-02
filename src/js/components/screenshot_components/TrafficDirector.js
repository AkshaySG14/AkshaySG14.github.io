import React from "react";

import screenshot1 from "./images/traffic_director/trafficdirectorscreen1.png"
import screenshot2 from "./images/traffic_director/trafficdirectorscreen2.png"
import screenshot3 from "./images/traffic_director/trafficdirectorscreen3.png"
import screenshot4 from "./images/traffic_director/trafficdirectorscreen4.png"
import screenshot5 from "./images/traffic_director/trafficdirectorscreen5.png"
import screenshot6 from "./images/traffic_director/trafficdirectorscreen6.png"
import screenshot7 from "./images/traffic_director/trafficdirectorscreen7.png"
import screenshot8 from "./images/traffic_director/trafficdirectorscreen8.png"

class TrafficDirectorScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-3">
                        <img src={screenshot1} className="img-thumbnail" alt="File Encryptor Screenshot One"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot2} className="img-thumbnail" alt="File Encryptor Screenshot Two"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot3} className="img-thumbnail" alt="File Encryptor Screenshot Three"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot4} className="img-thumbnail" alt="File Encryptor Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={screenshot5} className="img-thumbnail" alt="File Encryptor Screenshot Four"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot6} className="img-thumbnail" alt="File Encryptor Screenshot Five"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot7} className="img-thumbnail" alt="File Encryptor Screenshot Six"/>
                    </div>
                    <div className="col-sm-3">
                        <img src={screenshot8} className="img-thumbnail" alt="File Encryptor Screenshot Six"/>
                    </div>
                </div>

            </div>
        );
    };
}

export default TrafficDirectorScreenshotComponent;