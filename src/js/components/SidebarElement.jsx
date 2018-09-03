import React from "react";
import PropTypes from "prop-types"
import {NavItem} from "react-bootstrap"

class SidebarElement extends React.Component {
    handleSelect(id) {
        this.props.sidebarScroll(id);
    };

    render() {
        return (
            <NavItem
                className={this.props.navActive ? "active" : "normal"}
                activeKey={this.props.navItem.id}
                onSelect={() => this.handleSelect(this.props.navItem.id)}
            >
                {this.props.navItem.name}
            </NavItem>
        )
    }
}

SidebarElement.propTypes = {
    navItem: PropTypes.object.isRequired,
    navActive: PropTypes.bool.isRequired,
    sidebarScroll: PropTypes.func.isRequired
};

export default SidebarElement;