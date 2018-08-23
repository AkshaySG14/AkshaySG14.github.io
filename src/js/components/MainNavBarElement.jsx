class MainNavBar extends React.Component {
    static propTypes = {
        navItems: React.PropTypes.array.isRequired,
        activeNavItem: React.PropTypes.number.isRequired,
    };

    render() {
        return (
            <li className={"nav-item" + i === this.props.activateNavItem ? " active" : ""}>
                <a className="nav-link" href={navItem.link}>{navItem.name}</a>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceContractsContainer);
export { MainNavBar as MainNavBarNotConnected };
