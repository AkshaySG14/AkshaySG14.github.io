import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import SidebarElement from "../components/SidebarElement";
import { Nav } from "react-bootstrap"

import "./css/SidebarContainer.css"
import { changeSidebarActive } from "../actions/index";

class SidebarContainer extends React.Component {

    clickScrollButton(id) {
        this.props.changeSidebarActive(id);
        this.props.scrollToComponent(id);
    }

    render() {
        return (
            <div className="hidden-sm-down sidebar col-md-1">
                <Nav bsStyle="pills" stacked navbar>
                    {this.props.navItems.map((navItem, i) => {
                        return (
                            <SidebarElement key={i} {...{
                                navItem: navItem,
                                navActive: navItem.id === this.props.activeNavItem,
                                sidebarScroll: this.clickScrollButton.bind(this)
                            }}/>
                        );
                    })}
                </Nav>
            </div>
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