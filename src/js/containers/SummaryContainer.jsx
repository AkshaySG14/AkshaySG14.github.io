import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { SUMMARY_OBJECTS } from "../constants/SummaryObjects";

class SummaryContainer extends React.Component {
    render() {
        return (
            SUMMARY_OBJECTS[this.props.currentPage]
        );
    }
}

SummaryContainer.propTypes = {
    currentPage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    };
};

export default connect(mapStateToProps, null)(SummaryContainer);