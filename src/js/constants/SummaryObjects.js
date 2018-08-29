import React from "react"

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"
import HomeSummaryComponent from "../components/summary_components/Home";
import FatesRepriseSummaryComponent from "../components/summary_components/FatesReprise";

export const SUMMARY_OBJECTS = {
    [HOME]: <HomeSummaryComponent/>,
    [FR]: <FatesRepriseSummaryComponent/>
};