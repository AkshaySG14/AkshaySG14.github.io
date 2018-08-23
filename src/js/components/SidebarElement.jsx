import React from "react";
import PropTypes from "prop-types"
import {NavItem} from "react-bootstrap"

class SidebarElement extends React.Component {
    handleSelect() {
        alert("selected " + this.props.navItem.id);
    };

    render() {
        return (
            <NavItem className={this.props.navActive ? "active" : "normal"} activeKey={this.props.navItem.id} onSelect={() => this.handleSelect()}>
                {this.props.navItem.name}
            </NavItem>
        )
    }
}

SidebarElement.propTypes = {
    navItem: PropTypes.object.isRequired,
    navActive: PropTypes.bool.isRequired
};

export default SidebarElement;