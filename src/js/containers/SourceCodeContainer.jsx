import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import { DropdownButton, MenuItem } from "react-bootstrap"

class SummaryContainer extends React.Component {
    render() {
        return (
            <div>
                <hr id="code"/>
                <h2>{this.props.currentPage} Source Code</h2>
                <DropdownButton
                    bsStyle="default"
                    title={this.props.sourceCodeOptions[this.props.activeSourceCodeNumber]}
                    key={0}
                    id={`dropdown-basic-${0}`}
                >
                    {this.props.sourceCodeOptions.map((option, i) => {
                        if (i === this.props.activeSourceCodeNumber) {
                            return (
                                <MenuItem
                                    eventKey={i}
                                    data-val={i}
                                    key={i}
                                    active
                                >
                                    {option}
                                </MenuItem>
                            );
                        }
                        else {
                            return (
                                <MenuItem
                                    eventKey={i}
                                    data-val={i}
                                    key={i}
                                >
                                    {option}
                                </MenuItem>
                            );
                        }
                    })}
                </DropdownButton>
                <br/>
                <br/>
                <div id="active-source">
                    {this.props.activeSourceCode}
                </div>
            </div>
        );
    }
}

SummaryContainer.propTypes = {
    currentPage: PropTypes.string.isRequired,
    sourceCodeOptions: PropTypes.array.isRequired,
    activeSourceCodeNumber: PropTypes.number.isRequired,
    activeSourceCode: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        sourceCodeOptions: state.sourceCodeOptions,
        activeSourceCode: state.activeSourceCode,
        activeSourceCodeNumber: state.activeSourceCodeNumber,
        currentPage: state.currentPage
    };
};

export default connect(mapStateToProps, null)(SummaryContainer);