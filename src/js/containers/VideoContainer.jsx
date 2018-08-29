import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { VIDEO_OBJECTS } from "../constants/VideoObjects";

class VideoContainer extends React.Component {
    render() {
        return (
            VIDEO_OBJECTS[this.props.currentPage]
        );
    }
}

VideoContainer.propTypes = {
    currentPage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    };
};

export default connect(mapStateToProps, null)(VideoContainer);