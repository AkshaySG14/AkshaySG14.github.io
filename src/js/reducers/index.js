import React from "react";

import { MAIN_NAVBAR_ITEMS, SIDEBAR_NAV_ITEMS } from "../constants/NavObjects"
import { CHANGE_PAGE, CHANGE_SOURCE_CODE_COMPONENT } from "../constants/ActionTypes"
import { HOME } from "../constants/Store";
import { SOURCE_CODE_NAMES, SOURCE_CODE_COMPONENTS } from "../constants/SourceCode";
import { DOWNLOAD_NAMES, DOWNLOAD_FILES, DOWNLOAD_LINKS } from "../constants/LinkObjects";

const initialState = {
    mainNavItems: MAIN_NAVBAR_ITEMS,
    mainActiveNavItem: 0,
    sidebarNavItems: SIDEBAR_NAV_ITEMS[HOME],
    sidebarActiveNavItem: 0,
    currentPage: HOME,
    sourceCodeOptions: SOURCE_CODE_NAMES[HOME],
    activeSourceCodeComponent: SOURCE_CODE_COMPONENTS[HOME][0],
    activeSourceCodeNumber: 0,
    currentLink: DOWNLOAD_LINKS[HOME],
    currentDownload: DOWNLOAD_FILES[HOME],
    currentDownloadName: DOWNLOAD_NAMES[HOME]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOURCE_CODE_COMPONENT:
            return {
                ... state,
                activeSourceCodeComponent: action.payload.sourceCodeComponent,
                activeSourceCodeNumber: action.payload.sourceCodeNumber
            };
        case CHANGE_PAGE:
            return {
                ... state,
                mainActiveNavItem: action.payload.mainActiveNavItem,
                sidebarNavItems: action.payload.sidebarNavItems,
                sidebarActiveNavItem: action.payload.sidebarActiveNavItem,
                sourceCodeOptions: action.payload.sourceCodeOptions,
                activeSourceCodeComponent: action.payload.activeSourceCodeComponent,
                activeSourceCodeNumber: action.payload.activeSourceCodeNumber,
                currentLink: action.payload.currentLink,
                currentDownload: action.payload.currentDownload,
                currentDownloadName: action.payload.currentDownloadName,
                currentPage: action.payload.currentPage
            };
        default:
            return state;
    }
};

export default rootReducer;