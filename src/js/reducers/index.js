import React from "react";

import {MAIN_NAVBAR_ITEMS, BASE_SIDEBAR_NAV_ITEMS} from "../constants/navObjects"
import { CHANGE_SOURCE_CODE_COMPONENT } from "../constants/actionTypes"
import {HOME} from "../constants/store";
import { WEBSITE_SOURCE_CODE, WEBSITE_SOURCE_CODE_COMPONENTS } from "../constants/sourceCode";

const initialState = {
    mainNavItems: MAIN_NAVBAR_ITEMS,
    mainActiveNavItem: 0,
    sidebarNavItems: BASE_SIDEBAR_NAV_ITEMS,
    sidebarActiveNavItem: 0,
    currentPage: HOME,
    sourceCodeOptions: WEBSITE_SOURCE_CODE,
    activeSourceCodeComponent: WEBSITE_SOURCE_CODE_COMPONENTS[0],
    activeSourceCodeNumber: 0,
    currentLink: "https://github.com/AkshaySG14/AkshaySG14.github.io",
    currentDownload: "Static/Assets/Website/SourceCode.zip",
    currentDownloadName: "Source Code"
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOURCE_CODE_COMPONENT:
            return {
                ... state,
                activeSourceCodeComponent: action.payload.sourceCodeComponent,
                activeSourceCodeNumber: action.payload.sourceCodeNumber
            };
        default:
            return state;
    }
};

export default rootReducer;