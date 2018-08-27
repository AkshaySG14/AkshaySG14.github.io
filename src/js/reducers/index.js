import React from "react";
import {MAIN_NAVBAR_ITEMS, BASE_SIDEBAR_NAV_ITEMS} from "../constants/navObjects"
import { } from "../constants/actionTypes"
import {HOME} from "../constants/store";
import {WEBSITE_SOURCE_CODE} from "../constants/sourceCode";
import BodyContainerSourceCode from "../components/SourceCodeComponents/BodyContainerSourceCode";

const initialState = {
    mainNavItems: MAIN_NAVBAR_ITEMS,
    mainActiveNavItem: 0,
    sidebarNavItems: BASE_SIDEBAR_NAV_ITEMS,
    sidebarActiveNavItem: 0,
    currentPage: HOME,
    sourceCodeOptions: WEBSITE_SOURCE_CODE,
    activeSourceCode: <BodyContainerSourceCode/>,
    activeSourceCodeNumber: 0,
    currentLink: "https://github.com/AkshaySG14/AkshaySG14.github.io",
    currentDownload: "Static/Assets/Website/SourceCode.zip",
    currentDownloadName: "Source Code"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default rootReducer;