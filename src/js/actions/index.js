import {CHANGE_PAGE, CHANGE_SOURCE_CODE_COMPONENT} from "../constants/ActionTypes"

export const changeSourceCodeComponent = (sourceCodeComponent, sourceCodeNumber) =>
    ({ type: CHANGE_SOURCE_CODE_COMPONENT, payload: {sourceCodeComponent, sourceCodeNumber} });

export const changePage = (mainActiveNavItem, sidebarNavItems, sidebarActiveNavItem, sourceCodeOptions,
                           activeSourceCodeComponent, activeSourceCodeNumber, currentLink, currentDownload,
                           currentDownloadName, currentPage) => ({
    type: CHANGE_PAGE,
    payload: {
        mainActiveNavItem, sidebarNavItems, sidebarActiveNavItem, sourceCodeOptions,
        activeSourceCodeComponent, activeSourceCodeNumber, currentLink, currentDownload, currentDownloadName,
        currentPage
    } });