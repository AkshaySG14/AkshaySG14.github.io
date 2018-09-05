import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import SidebarElement from "../components/SidebarElement";
import { Col, Nav } from "react-bootstrap"

import "./css/SidebarContainer.css"
import { changeSidebarActive } from "../actions/index";

class SidebarContainer extends React.Component {
    render() {
        return (
            <Col xsHidden md={1} className="sidebar">
                <Nav bsStyle="pills" stacked navbar>
                    {this.props.navItems.map((navItem, i) => {
                        return (
                            <SidebarElement key={i} {...{
                                navItem: navItem,
                                navActive: navItem.id === this.props.activeNavItem,
                                sidebarScroll: this.props.scrollToComponent
                            }}/>
                        );
                    })}
                </Nav>
            </Col>
        )
    }
}

SidebarContainer.propTypes = {
    navItems: PropTypes.array.isRequired,
    activeNavItem: PropTypes.string.isRequired,
    scrollToComponent: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        navItems: state.sidebarNavItems,
        activeNavItem: state.sidebarActiveNavItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSidebarActive: (activeComponent) => dispatch(changeSidebarActive(activeComponent))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);