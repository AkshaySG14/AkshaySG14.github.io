import React from "react";
import PropTypes from "prop-types"
import connect from 'react-redux/lib/connect/connect';

import { FILE_NAMES } from "../constants/LinkObjects"

class LinksContainer extends React.Component {
    render() {
        return (
            <div>
                <hr id="links"/>
                <h3>Links</h3>
                <div className="row">
                    &nbsp;&nbsp;&nbsp;
                    <a href={this.props.currentLink} target="_blank">
                        <i className="fa fa-github fa-4x" title="Github Link"/>
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a href={this.props.currentDownload} target="_blank" download={FILE_NAMES[this.props.currentPage]}>
                        <i className="fa fa-download fa-4x" title={this.props.currentDownloadName}/>
                    </a>
                </div>
                <br/>
            </div>
        );
    }
}

LinksContainer.propTypes = {
    currentPage: PropTypes.string.isRequired,
    currentLink: PropTypes.string.isRequired,
    currentDownload: PropTypes.string.isRequired,
    currentDownloadName: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        currentLink: state.currentLink,
        currentDownload: state.currentDownload,
        currentDownloadName: state.currentDownloadName
    };
};

export default connect(mapStateToProps, null)(LinksContainer);