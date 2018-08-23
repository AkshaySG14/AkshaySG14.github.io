import React from "react";
import BodyContainer from "../containers/BodyContainer";
import MainNavBarContainer from "../containers/MainNavBarContainer";

const App = () => (
    <div id={"App"} className="container-fluid">
        <MainNavBarContainer/>
        <BodyContainer/>
    </div>
);
export default App;