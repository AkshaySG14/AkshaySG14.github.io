import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { Navbar, Nav } from "react-bootstrap"

import { changePage } from "../actions/index"

import MainNavBarElement from "../components/MainNavBarElement";

class MainNavBar extends React.Component {
    handleSelect(pageId) {
        this.props.changePage(pageId);
        window.scroll({ top: 0, behavior: "instant" });
    };

    render() {
        return (
            <Navbar inverse collapseOnSelect fixedTop fluid className="navbar-toggleable-md">
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>Apps</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="tabs" className="nav-fill">
                        {this.props.navItems.map((navItem, i) => {
                            return (
                                <MainNavBarElement key={i} {...{
                                    navItem: navItem,
                                    navActive: i === this.props.activeNavItem,
                                    onSelect: this.handleSelect.bind(this)
                                }}/>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

MainNavBar.propTypes = {
    navItems: PropTypes.array.isRequired,
    activeNavItem: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return {
        navItems: state.mainNavItems,
        activeNavItem: state.mainActiveNavItem
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (newPage) => dispatch(changePage(newPage))
    };
};

const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
export default MainNavBarContainer;