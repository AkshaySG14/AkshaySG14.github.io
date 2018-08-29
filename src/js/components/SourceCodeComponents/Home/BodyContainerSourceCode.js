import React from "react";

import PrismCode from "react-prism";
import "prismjs/themes/prism.css"

class MainNavBarContainerSourceCodeComponent extends React.Component {
    render() {
        return (
            <PrismCode component="pre" className="language-javascript">{
            `    import React from "react";
    import connect from 'react-redux/lib/connect/connect';

    import SidebarContainer from "../containers/SidebarContainer";
    import SummaryContainer from "../containers/SummaryContainer";
    import SourceCodeContainer from "../containers/SourceCodeContainer";
    import "./css/BodyContainer.css"

    class BodyContainer extends React.Component {
        render() {
            return (
                <div className={"container-fluid row"}>
                    <SidebarContainer/>
                    <div className="body-container">
                        <SummaryContainer/>
                        <SourceCodeContainer/>
                    </div>
                </div>
            )
        }
    }

    export default connect(null, null)(BodyContainer);`}
            </PrismCode>
        )
    }
}

export default MainNavBarContainerSourceCodeComponent;