import React from "react";

import screenshot1 from "./images/memori/memoriscreen1.png"
import screenshot2 from "./images/memori/memoriscreen2.png"
import screenshot3 from "./images/memori/memoriscreen3.png"
import screenshot4 from "./images/memori/memoriscreen4.png"
import screenshot5 from "./images/memori/memoriscreen5.png"
import screenshot6 from "./images/memori/memoriscreen6.png"

class MemoriScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Memori Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Memori Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Memori Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Memori Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Memori Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Memori Screenshot Six"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default MemoriScreenshotComponent;