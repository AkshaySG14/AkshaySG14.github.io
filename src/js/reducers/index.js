import React from "react";

import {HOME, PAGE_POSITIONS} from "../constants/Store";
import {MAIN_NAVBAR_ITEMS, SIDEBAR_NAV_ITEMS, SUMMARY} from "../constants/NavObjects"
import {CHANGE_PAGE, CHANGE_SIDEBAR_ACTIVE, CHANGE_SOURCE_CODE_COMPONENT} from "../constants/ActionTypes"
import { SOURCE_CODE_NAMES, SOURCE_CODE_COMPONENTS } from "../constants/SourceCode";
import { DOWNLOAD_NAMES, DOWNLOAD_FILES, DOWNLOAD_LINKS, FILE_NAMES } from "../constants/LinkObjects";
import { SUMMARY_OBJECTS } from "../constants/SummaryObjects";
import { SCREENSHOT_OBJECTS } from "../constants/ScreenshotObjects";
import { VIDEO_OBJECTS } from "../constants/VideoObjects";

const initialState = {
    mainNavItems: MAIN_NAVBAR_ITEMS,
    mainActiveNavItem: 0,
    sidebarNavItems: SIDEBAR_NAV_ITEMS[HOME],
    sidebarActiveNavItem: SUMMARY,
    currentPage: HOME,
    sourceCodeOptions: SOURCE_CODE_NAMES[HOME],
    activeSourceCodeComponent: SOURCE_CODE_COMPONENTS[HOME][0],
    activeSourceCodeNumber: 0,
    currentLink: DOWNLOAD_LINKS[HOME],
    currentDownload: DOWNLOAD_FILES[HOME],
    currentDownloadName: DOWNLOAD_NAMES[HOME],
    currentFileName: FILE_NAMES[HOME],
    currentSummaryComponent: SUMMARY_OBJECTS[HOME],
    currentScreenshotComponent: SCREENSHOT_OBJECTS[HOME],
    currentVideoComponent: VIDEO_OBJECTS[HOME]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                mainActiveNavItem: PAGE_POSITIONS[action.payload.newPage],
                sidebarNavItems: SIDEBAR_NAV_ITEMS[action.payload.newPage],
                sidebarActiveNavItem: SUMMARY,
                sourceCodeOptions: SOURCE_CODE_NAMES[action.payload.newPage],
                activeSourceCodeComponent: SOURCE_CODE_COMPONENTS[action.payload.newPage][0],
                activeSourceCodeNumber: 0,
                currentLink: DOWNLOAD_LINKS[action.payload.newPage],
                currentDownload: DOWNLOAD_FILES[action.payload.newPage],
                currentDownloadName: DOWNLOAD_NAMES[action.payload.newPage],
                currentFileName: FILE_NAMES[action.payload.newPage],
                currentSummaryComponent: SUMMARY_OBJECTS[action.payload.newPage],
                currentScreenshotComponent: SCREENSHOT_OBJECTS[action.payload.newPage],
                currentVideoComponent: VIDEO_OBJECTS[action.payload.newPage],
                currentPage: action.payload.newPage
            };
        case CHANGE_SIDEBAR_ACTIVE:
            return {
                ...state,
                sidebarActiveNavItem: action.payload.newComponent
            };
        case CHANGE_SOURCE_CODE_COMPONENT:
            return {
                ...state,
                activeSourceCodeComponent: SOURCE_CODE_COMPONENTS[state.currentPage][action.payload.sourceCodeNumber],
                activeSourceCodeNumber: action.payload.sourceCodeNumber
            };
        default:
            return state;
    }
};

export default rootReducer;