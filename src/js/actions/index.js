import {CHANGE_PAGE, CHANGE_SOURCE_CODE_COMPONENT} from "../constants/ActionTypes"

export const changeSourceCodeComponent = (sourceCodeNumber) => ({ type: CHANGE_SOURCE_CODE_COMPONENT, payload: {sourceCodeNumber} });

export const changePage = (newPage) => ({ type: CHANGE_PAGE, payload: {newPage} });