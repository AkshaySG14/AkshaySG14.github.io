import React from "react";
import connect from 'react-redux/lib/connect/connect';

import SidebarContainer from "../containers/SidebarContainer";
import SummaryContainer from "../containers/SummaryContainer";
import ScreenshotContainer from "./ScreenshotContainer";
import VideoContainer from "../containers/VideoContainer";
import SourceCodeContainer from "../containers/SourceCodeContainer";
import LinkContainer from "./LinksContainer";
import Footer from "../components/Footer";
import "./css/BodyContainer.css"

class BodyContainer extends React.Component {
    render() {
        return (
            <div className={"container-fluid row"}>
                <SidebarContainer/>
                <div className="body-container">
                    <SummaryContainer/>
                    <ScreenshotContainer/>
                    <VideoContainer/>
                    <SourceCodeContainer/>
                    <LinkContainer/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(BodyContainer);