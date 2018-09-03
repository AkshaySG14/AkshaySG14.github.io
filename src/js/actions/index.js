import {CHANGE_PAGE, CHANGE_SIDEBAR_ACTIVE, CHANGE_SOURCE_CODE_COMPONENT} from "../constants/ActionTypes"

export const changePage = (newPage) => ({ type: CHANGE_PAGE, payload: {newPage} });

export const changeSidebarActive = (newComponent) => ({ type: CHANGE_SIDEBAR_ACTIVE, payload: {newComponent} });

export const changeSourceCodeComponent = (sourceCodeNumber) => ({ type: CHANGE_SOURCE_CODE_COMPONENT, payload: {sourceCodeNumber} });