import React from "react";

import screenshot1 from "./images/file_encryptor/fileencryptorscreen1.png"
import screenshot2 from "./images/file_encryptor/fileencryptorscreen2.png"
import screenshot3 from "./images/file_encryptor/fileencryptorscreen3.png"
import screenshot4 from "./images/file_encryptor/fileencryptorscreen4.png"
import screenshot5 from "./images/file_encryptor/fileencryptorscreen5.png"
import screenshot6 from "./images/file_encryptor/fileencryptorscreen6.png"

class FileEncryptorScreenshotComponent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="File Encryptor Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="File Encryptor Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="File Encryptor Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="File Encryptor Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="File Encryptor Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="File Encryptor Screenshot Six"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default FileEncryptorScreenshotComponent;