import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import SidebarContainer from "../containers/SidebarContainer";
import SummaryContainer from "../containers/SummaryContainer";
import ScreenshotContainer from "./ScreenshotContainer";
import VideoContainer from "../containers/VideoContainer";
import SourceCodeContainer from "../containers/SourceCodeContainer";
import LinkContainer from "./LinksContainer";
import Footer from "../components/Footer";

import "./css/BodyContainer.css"

import { changeSidebarActive } from "../actions/index";
import {SUMMARY, SCREENSHOTS, VIDEO, CODE, LINKS} from "../constants/NavObjects";

const OFFSET_TOP = 30;

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
        return Math.abs(element.getBoundingClientRect().top) <= OFFSET_TOP;
    }

    trackScrollingTop() {
        this.props.navItems.map(navItem => {
            switch (navItem.id) {
                case SUMMARY:
                    if (this.isTop(this.summaryRef.current)) {
                        this.props.changeSidebarActive(SUMMARY);
                    }
                    break;
                case SCREENSHOTS:
                    if (this.isTop(this.screenshotRef.current)) {
                        this.props.changeSidebarActive(SCREENSHOTS);
                    }
                    break;
                case VIDEO:
                    if (this.isTop(this.videoRef.current)) {
                        this.props.changeSidebarActive(VIDEO);
                    }
                    break;
                case CODE:
                    if (this.isTop(this.sourceCodeRef.current)) {
                        this.props.changeSidebarActive(CODE);
                    }
                    break;
            }
        });
    }

    trackScrollingBottom() {
        if (this.linkRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
            this.props.changeSidebarActive(LINKS);
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.trackScrollingTop.bind(this));
        document.addEventListener('scroll', this.trackScrollingBottom.bind(this));
    }

    componentDidUpdate() {
        document.addEventListener('scroll', this.trackScrollingTop.bind(this));
        document.addEventListener('scroll', this.trackScrollingBottom.bind(this));
    }

    componentWillUpdate() {
        document.removeEventListener('scroll', this.trackScrollingTop.bind(this));
        document.removeEventListener('scroll', this.trackScrollingBottom.bind(this));
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
            default:
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
                    <div ref={this.screenshotRef}>
                        <ScreenshotContainer ref={this.screenshotRef}/>
                    </div>
                    <div ref={this.videoRef}>
                        <VideoContainer ref={this.videoRef}/>
                    </div>
                    <div ref={this.sourceCodeRef}>
                        <SourceCodeContainer ref={this.sourceCodeRef} currentPage={this.props.currentPage}/>
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

BodyContainer.propTypes = {
    currentPage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        navItems: state.sidebarNavItems,
        currentPage: state.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSidebarActive: (activeComponent) => dispatch(changeSidebarActive(activeComponent))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);