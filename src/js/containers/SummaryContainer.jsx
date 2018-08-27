import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import {HOME} from "../constants/store";
import HomeSummaryComponent from "../components/SummaryComponents/Home";

class SummaryContainer extends React.Component {
    render() {
        switch (this.props.currentPage) {
            case HOME: return (
                    <HomeSummaryComponent/>
                );
            default:
                return null;
        }
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