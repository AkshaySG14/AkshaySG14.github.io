import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { screenshot_OBJECTS } from "../constants/ScreenshotObjects";

class ScreenshotContainer extends React.Component {
    render() {
        return (
            screenshot_OBJECTS[this.props.currentPage]
        );
    }
}

ScreenshotContainer.propTypes = {
    currentPage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    };
};

export default connect(mapStateToProps, null)(ScreenshotContainer);