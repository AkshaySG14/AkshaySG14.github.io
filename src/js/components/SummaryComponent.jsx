import React from "react";
import PropTypes from "prop-types"
import {NavItem} from "react-bootstrap"

class SummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.header1}</h1>
                {this.paragraph1}
                <br/>
                <h3>{this.props.header2}</h3>
                {this.paragraph2}
            </div>
        )
    }
}

SummaryComponent.propTypes = {
    header1: PropTypes.string.isRequired,
    header2: PropTypes.string.isRequired,
    paragraph1: PropTypes.object.isRequired,
    paragraph2: PropTypes.object.isRequired
};

export default SummaryComponent;