import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import { Col } from "react-bootstrap"

import SidebarContainer from "../containers/SidebarContainer";
import SummaryContainer from "../containers/SummaryContainer";
import ScreenshotContainer from "./ScreenshotContainer";
import VideoContainer from "../containers/VideoContainer";
import SourceCodeContainer from "../containers/SourceCodeContainer";
import LinkContainer from "./LinksContainer";
import Footer from "../components/Footer";

import "./css/BodyContainer.css"

import { changeSidebarActive } from "../actions/index";
import {SUMMARY, SCREENSHOTS, VIDEO, CODE, LINKS, V_SIDEBAR, S_SIDEBAR} from "../constants/NavObjects";

const OFFSET_TOP = 60;

class BodyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.summaryRef = React.createRef();
        this.screenshotRef = React.createRef();
        this.videoRef = React.createRef();
        this.sourceCodeRef = React.createRef();
        this.linkRef = React.createRef();
    }

    isTop(element) {
        const top = element.getBoundingClientRect().top;
        return top < OFFSET_TOP;
    }

    trackScrolling() {
        if (this.linkRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
            this.props.changeSidebarActive(LINKS);
            return;
        }

        if (this.isTop(this.sourceCodeRef.current)) {
            this.props.changeSidebarActive(CODE);
            return;
        }
        if (this.props.currentSidebarConfig === V_SIDEBAR && this.isTop(this.videoRef.current)) {
            this.props.changeSidebarActive(VIDEO);
            return;
        }
        if ((this.props.currentSidebarConfig === S_SIDEBAR || this.props.currentSidebarConfig === V_SIDEBAR)
            && this.isTop(this.screenshotRef.current)) {
            this.props.changeSidebarActive(SCREENSHOTS);
            return;
        }
        if (this.isTop(this.summaryRef.current)) {
            this.props.changeSidebarActive(SUMMARY);
        }
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
                const videoAdjusted = this.videoRef.current.offsetTop - 50;
                window.scroll({ top: videoAdjusted, behavior: "smooth" });
                break;
            case CODE:
                const codeAdjusted = this.sourceCodeRef.current.offsetTop - 50;
                window.scroll({ top: codeAdjusted, behavior: "smooth" });
                break;
            case LINKS:
                const linksAdjusted = this.linkRef.current.offsetTop + 50;
                window.scroll({ top: linksAdjusted, behavior: "smooth" });
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrolling.bind(this));
    }

    componentDidUpdate() {
        document.addEventListener('scroll', this.trackScrolling.bind(this));
    }

    componentWillUpdate() {
        document.removeEventListener('scroll', this.trackScrolling.bind(this));
    }

    render() {
        return (
            <div className={"row"}>
                <SidebarContainer scrollToComponent={this.scrollToRef.bind(this)}/>
                <Col md={11} mdPush={1} className="body-container">
                    <div ref={this.summaryRef}>
                        <SummaryContainer/>
                    </div>
                    <div ref={this.screenshotRef}>
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
                </Col>
            </div>
        )
    }
}

BodyContainer.propTypes = {
    currentSidebarConfig: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentSidebarConfig: state.currentSidebarConfig
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSidebarActive: (activeComponent) => dispatch(changeSidebarActive(activeComponent))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);