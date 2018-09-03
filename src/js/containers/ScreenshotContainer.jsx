import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

class ScreenshotContainer extends React.Component {
    render() {
        return (
            this.props.currentScreenshotComponent
        );
    }
}

ScreenshotContainer.propTypes = {
    currentScreenshotComponent: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        currentScreenshotComponent: state.currentScreenshotComponent
    };
};

export default connect(mapStateToProps, null)(ScreenshotContainer);