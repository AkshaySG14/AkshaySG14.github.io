import React from "react"

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"
import HomeSummaryComponent from "../components/SummaryComponents/Home";
import FatesRepriseSummaryComponent from "../components/SummaryComponents/FatesReprise";

export const SUMMARY_OBJECTS = {
    [HOME]: <HomeSummaryComponent/>,
    [FR]: <FatesRepriseSummaryComponent/>
};