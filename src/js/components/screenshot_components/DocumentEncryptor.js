import React from "react";

import screenshot1 from "./images/document_encryptor/documentencryptorscreen1.png"
import screenshot2 from "./images/document_encryptor/documentencryptorscreen2.png"
import screenshot3 from "./images/document_encryptor/documentencryptorscreen3.png"
import screenshot4 from "./images/document_encryptor/documentencryptorscreen4.png"
import screenshot5 from "./images/document_encryptor/documentencryptorscreen5.png"
import screenshot6 from "./images/document_encryptor/documentencryptorscreen6.png"

class DocumentEncryptorScreenshotCompoonent extends React.Component {
    render() {
        return (
            <div>
                <hr id="screenshots"/>
                <h2>Screenshots</h2>

                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot1} className="img-thumbnail" alt="Document Encryptor Screenshot One"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot2} className="img-thumbnail" alt="Document Encryptor Screenshot Two"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot3} className="img-thumbnail" alt="Document Encryptor Screenshot Three"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={screenshot4} className="img-thumbnail" alt="Document Encryptor Screenshot Four"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot5} className="img-thumbnail" alt="Document Encryptor Screenshot Five"/>
                    </div>
                    <div className="col-sm-4">
                        <img src={screenshot6} className="img-thumbnail" alt="Document Encryptor Screenshot Six"/>
                    </div>
                </div>
            </div>
        );
    };
}

export default DocumentEncryptorScreenshotCompoonent;