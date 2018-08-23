import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';
import { addArticle } from "../actions/index";

class MainNavBar extends React.Component {
    render() {
        return (
            <div id="summary">
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary fixed-top" id="main-navbar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <p className="navbar-brand">Apps</p>
                        <ul className="nav navbar-nav nav-fill">
                            {this.props.navItems.map((navItem, i) => {
                                return (
                                    <li key={i} className={"nav-item" + i === this.props.activateNavItem ? " active" : "" }>
                                        <a className="nav-link" href={navItem.id}>{navItem.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
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
        addArticle: article => dispatch(addArticle(article))
    };
};

const MainNavBarContainer = connect(mapStateToProps, mapDispatchToProps)(MainNavBar);
export default MainNavBarContainer;