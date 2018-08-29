import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import SidebarElement from "../components/SidebarElement";
import { Nav } from "react-bootstrap"

import "./css/SidebarContainer.css"

class SidebarContainer extends React.Component {
    render() {
        return (
            <div className="hidden-sm-down sidebar col-md-1">
                <Nav bsStyle="pills" stacked navbar>
                    {this.props.navItems.map((navItem, i) => {
                        return (
                            <SidebarElement key={i} {...{navItem: navItem, navActive: i === this.props.activeNavItem}}/>
                        );
                    })}
                </Nav>
            </div>
        )
    }
}

SidebarContainer.propTypes = {
    navItems: PropTypes.array.isRequired,
    activeNavItem: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return {
        navItems: state.sidebarNavItems,
        activeNavItem: state.sidebarActiveNavItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);