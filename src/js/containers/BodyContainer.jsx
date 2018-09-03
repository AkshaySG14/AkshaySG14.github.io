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
import {SUMMARY, SCREENSHOTS, VIDEO, CODE, LINKS} from "../constants/NavObjects";

class BodyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.summaryRef = React.createRef();
        this.screenshotRef = React.createRef();
        this.videoRef = React.createRef();
        this.sourceCodeRef = React.createRef();
        this.linkRef = React.createRef();
    }

    scrollToRef = (id) => {
        switch (id) {
            case SUMMARY:
                this.summaryRef.current.scrollIntoView({block: "end", behavior: "smooth"});
                break;
            case SCREENSHOTS:
                const screenshotAdjusted = this.screenshotRef.current.offsetTop - 50;
                window.scroll({ top: screenshotAdjusted, behavior: "smooth" });
                break;
            case VIDEO:
                this.videoRef.current.scrollIntoView({block: "end", behavior: "smooth"});
                break;
            case CODE:
                const codeAdjusted = this.sourceCodeRef.current.offsetTop - 50;
                window.scroll({ top: codeAdjusted, behavior: "smooth" });
                break;
            case LINKS:
                this.linkRef.current.scrollIntoView({block: "end", behavior: "smooth"});
                break;
        }

    };

    render() {
        return (
            <div className={"container-fluid row"}>
                <SidebarContainer scrollToComponent={this.scrollToRef.bind(this)}/>
                <div className="body-container">
                    <div ref={this.summaryRef}>
                        <SummaryContainer/>
                    </div>
                    <div ref={this.screenshotRef} id="test">
                        <ScreenshotContainer ref={this.screenshotRef}/>
                    </div>
                    <div ref={this.videoRef}>
                        <VideoContainer ref={this.videoRef}/>
                    </div>
                    <div ref={this.sourceCodeRef}>
                        <SourceCodeContainer ref={this.sourceCodeRef}/>
                    </div>
                    <div ref={this.linkRef}>
                        <LinkContainer ref={this.linkRef}/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(BodyContainer);