import React from "react";
import connect from 'react-redux/lib/connect/connect';

import SidebarContainer from "../containers/SidebarContainer";
import SummaryContainer from "../containers/SummaryContainer";
import "./css/BodyContainer.css"

class BodyContainer extends React.Component {
    render() {
        return (
            <div className={"container-fluid row"}>
                <SidebarContainer/>
                <div className="body-container">
                    <SummaryContainer/>
                </div>
            </div>
        )
    }
}

export default connect(null, null)(BodyContainer);