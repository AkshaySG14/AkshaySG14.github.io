import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

class SummaryContainer extends React.Component {
    render() {
        return (
            <div ref={this.refs.summaryRef}>
                {this.props.currentSummaryComponent}
            </div>
        );
    }
}

SummaryContainer.propTypes = {
    currentSummaryComponent: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentSummaryComponent: state.currentSummaryComponent
    };
};

export default connect(mapStateToProps, null)(SummaryContainer);