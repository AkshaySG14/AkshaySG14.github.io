import React from "react";
import connect from 'react-redux/lib/connect/connect';

import SidebarContainer from "../containers/SidebarContainer";
import "./css/BodyContainer.css"
import PropTypes from "prop-types";
import {MAIN_HEADERS, SECONDARY_HEADERS, SECONDARY_PARAGRAPHS, SUMMARY_PARAGRAPHS} from "../constants/summaryObjects";
import SummaryComponent from "../components/SummaryComponent";

class BodyContainer extends React.Component {
    render() {
        return (
            <div className={"container-fluid body-container row"}>
                <SidebarContainer/>
                <SummaryComponent header1={this.props.header1} header2={this.props.header2} paragraph1={this.props.paragraph1} paragraph2={this.props.paragraph2}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header1: state.summaryHeader,
        header2: state.secondaryHeader,
        paragraph1: state.summaryParagraph,
        paragraph2: state.secondaryParagraph
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
export default BodyContainer;