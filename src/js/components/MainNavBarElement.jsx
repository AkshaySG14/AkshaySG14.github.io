import React from "react";
import PropTypes from "prop-types"
import {NavItem} from "react-bootstrap"

class MainNavBarElement extends React.Component {
    handleSelect() {
        alert("selected " + this.props.navItem.id);
    };

    render() {
        return (
            <NavItem className={"navbar-item" + (this.props.navActive ? " active" : "")} activeKey={this.props.navItem.id} onSelect={() => this.handleSelect()}>
                {this.props.navItem.name}
            </NavItem>
        )
    }
}

MainNavBarElement.propTypes = {
    navItem: PropTypes.object.isRequired,
    navActive: PropTypes.bool.isRequired
};

export default MainNavBarElement;