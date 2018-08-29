import React from "react";
import PropTypes from "prop-types"
import {NavItem} from "react-bootstrap"

class MainNavBarElement extends React.Component {
    render() {
        return (
            <NavItem
                className={"navbar-item" + (this.props.navActive ? " active" : "")}
                activeKey={this.props.navItem.id}
                onSelect={() => this.props.onSelect(this.props.navItem.id)}
            >
                {this.props.navItem.name}
            </NavItem>
        )
    }
}

MainNavBarElement.propTypes = {
    navItem: PropTypes.object.isRequired,
    navActive: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default MainNavBarElement;