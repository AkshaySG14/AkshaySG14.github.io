import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class SidebarContainerSourceCode extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-javascript">{
            `    import React from "react";
    import PropTypes from "prop-types"
    import connect from 'react-redux/lib/connect/connect';
    import {Navbar, Nav} from "react-bootstrap"

    import MainNavBarElement from "../components/MainNavBarElement";

    class MainNavBar extends React.Component {
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
                        <MainNavBarElement key={i} {...{navItem: navItem, navActive: i === this.props.activeNavItem}}/>
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
        };
    };

    const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
    export default MainNavBarContainer;`}
            </PrismCode>
        )
    }
}

export default SidebarContainerSourceCode;