import { CHANGE_SOURCE_CODE_COMPONENT } from "../constants/actionTypes"

export const changeSourceCodeComponent = (sourceCodeComponent, sourceCodeNumber) => ({ type: CHANGE_SOURCE_CODE_COMPONENT, payload: {sourceCodeComponent, sourceCodeNumber} });