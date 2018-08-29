import React from "react";

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import BodyContainerSourceCode from "../components/SourceCodeComponents/Home/BodyContainerSourceCode";
import MainNavBarContainerSourceCodeComponent from "../components/SourceCodeComponents/Home/MainNavBarContainerSourceCode";
import SidebarContainerSourceCode from "../components/SourceCodeComponents/Home/SidebarContainerSourceCode";
import SourceCodeContainerSourceCode from "../components/SourceCodeComponents/Home/SourceCodeContainerSourceCode";
import LinksContainerSourceCode from "../components/SourceCodeComponents/Home/LinksContainerSourceCode";
import SummaryContainerSourceCode from "../components/SourceCodeComponents/Home/SummaryContainerSourceCode";

import DaurSourceCode from "../components/SourceCodeComponents/FatesReprise/DaurSourceCode";
import WorldSourceCode from "../components/SourceCodeComponents/FatesReprise/WorldSourceCode";
import StorageSourceCode from "../components/SourceCodeComponents/FatesReprise/StorageSourceCode";
import GameScreenSourceCode from "../components/SourceCodeComponents/FatesReprise/GameScreenSourceCode";
import BeetleSourceCode from "../components/SourceCodeComponents/FatesReprise/BeetleSourceCode";
import WizardSourceCode from "../components/SourceCodeComponents/FatesReprise/WizardSourceCode";

export const SOURCE_CODE_NAMES = {
    [HOME]: [
        "BodyContainer.jsx",
        "MainNavBarContainer.jsx",
        "SidebarContainer.jsx",
        "SourceCodeContainer.jsx",
        "LinksContainer.jsx",
        "SummaryContainer.jsx"
    ],
    [FR]: [
        "Daur.java",
        "GameScreen.java",
        "Storage.java",
        "World.java",
        "Beetle.java",
        "Wizard.java"
    ]
};

export const SOURCE_CODE_COMPONENTS = {
    [HOME]: [
        <BodyContainerSourceCode/>,
        <MainNavBarContainerSourceCodeComponent/>,
        <SidebarContainerSourceCode/>,
        <SourceCodeContainerSourceCode/>,
        <LinksContainerSourceCode/>,
        <SummaryContainerSourceCode/>,
    ],
    [FR]: [
        <DaurSourceCode/>,
        <GameScreenSourceCode/>,
        <StorageSourceCode/>,
        <WorldSourceCode/>,
        <BeetleSourceCode/>,
        <WizardSourceCode/>,
    ]
};