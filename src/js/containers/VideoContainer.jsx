import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

class VideoContainer extends React.Component {
    render() {
        return (
            this.props.currentVideoComponent
        );
    }
}

VideoContainer.propTypes = {
    currentVideoComponent: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentVideoComponent: state.currentVideoComponent
    };
};

export default connect(mapStateToProps, null)(VideoContainer);