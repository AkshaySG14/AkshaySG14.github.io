import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class SourceCodeContainerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-javascript">{
            `import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import { DropdownButton, MenuItem } from "react-bootstrap"

import Prism from "prismjs";

import { changeSourceCodeComponent } from "../actions/index"

class SourceCodeContainer extends React.Component {
    handleSelect(activeSourceCodeNumber) {
        this.props.changeSourceCodeComponent(activeSourceCodeNumber);
    };

    render() {
        return (
            <div>
                <hr id="code"/>
                <h2>{this.props.currentPage} Source Code</h2>
                <DropdownButton
                    bsStyle="default"
                    title={this.props.sourceCodeOptions[this.props.activeSourceCodeNumber]}
                    key={0}
                    id={\`dropdown-basic-${0}\`}
                >
                    {this.props.sourceCodeOptions.map((option, i) => {
                        if (i === this.props.activeSourceCodeNumber) {
                            return (
                                <MenuItem
                                    eventKey={i}
                                    data-val={option}
                                    key={i}
                                    active
                                    onSelect={() => this.handleSelect(i)}
                                >
                                    {option}
                                </MenuItem>
                            );
                        }
                        else {
                            return (
                                <MenuItem
                                    eventKey={i}
                                    data-val={option}
                                    key={i}
                                    onSelect={() => this.handleSelect(i)}
                                >
                                    {option}
                                </MenuItem>
                            );
                        }
                    })}
                </DropdownButton>
                <br/>
                <div id="active-source">
                    {this.props.activeSourceCodeComponent}
                </div>
            </div>
        );
    }
}

SourceCodeContainer.propTypes = {
    currentPage: PropTypes.string.isRequired,
    sourceCodeOptions: PropTypes.array.isRequired,
    activeSourceCodeNumber: PropTypes.number.isRequired,
    activeSourceCodeComponent: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        sourceCodeOptions: state.sourceCodeOptions,
        activeSourceCodeComponent: state.activeSourceCodeComponent,
        activeSourceCodeNumber: state.activeSourceCodeNumber,
        currentPage: state.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSourceCodeComponent: (activeSourceCodeNumber) => dispatch(changeSourceCodeComponent(activeSourceCodeNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodeContainer);`}
            </PrismCode>
        )
    }
}

export default SourceCodeContainerSourceCode;