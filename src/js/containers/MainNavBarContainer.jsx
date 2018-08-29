import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { Navbar, Nav } from "react-bootstrap"

import { changePage } from "../actions/index"
import { PAGE_POSITIONS } from "../constants/Store"
import { DOWNLOAD_LINKS, DOWNLOAD_FILES, DOWNLOAD_NAMES } from "../constants/LinkObjects"
import { SOURCE_CODE_NAMES, SOURCE_CODE_COMPONENTS } from "../constants/SourceCode"
import { SIDEBAR_NAV_ITEMS } from "../constants/NavObjects"

import MainNavBarElement from "../components/MainNavBarElement";

class MainNavBar extends React.Component {
    handleSelect(pageId) {
        let mainActiveNavItem = PAGE_POSITIONS[pageId];
        let sidebarNavItems = SIDEBAR_NAV_ITEMS[pageId];
        let sidebarActiveNavItem = 0;
        let sourceCodeOptions = SOURCE_CODE_NAMES[pageId];
        let activeSourceCodeComponent = SOURCE_CODE_COMPONENTS[pageId][0];
        let activeSourceCodeNumber = 0;
        let currentLink = DOWNLOAD_LINKS[pageId];
        let currentDownload = DOWNLOAD_FILES[pageId];
        let currentDownloadName = DOWNLOAD_NAMES[pageId];
        let currentPage = pageId;
        this.props.changePage(
            mainActiveNavItem, sidebarNavItems, sidebarActiveNavItem, sourceCodeOptions, activeSourceCodeComponent,
            activeSourceCodeNumber, currentLink, currentDownload, currentDownloadName, currentPage
        );
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
        changePage: (
            mainActiveNavItem, sideBarNavItems, sidebarActiveNavItem, sourceCodeOptions, activeSourceCodeComponent,
            activeSourceCodeNumber, currentLink, currentDownload, currentDownloadName, currentPage
        ) => dispatch(changePage(
            mainActiveNavItem, sideBarNavItems, sidebarActiveNavItem, sourceCodeOptions, activeSourceCodeComponent,
            activeSourceCodeNumber, currentLink, currentDownload, currentDownloadName, currentPage
        ))
    };
};

const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
export default MainNavBarContainer;