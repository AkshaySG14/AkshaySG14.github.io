import React from "react";

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import BodyContainerSourceCode from "../components/source_code_components/home/BodyContainerSourceCode";
import MainNavBarContainerSourceCodeComponent from "../components/source_code_components/home/MainNavBarContainerSourceCode";
import SidebarContainerSourceCode from "../components/source_code_components/home/SidebarContainerSourceCode";
import SourceCodeContainerSourceCode from "../components/source_code_components/home/SourceCodeContainerSourceCode";
import LinksContainerSourceCode from "../components/source_code_components/home/LinksContainerSourceCode";
import SummaryContainerSourceCode from "../components/source_code_components/home/SummaryContainerSourceCode";

import DaurSourceCode from "../components/source_code_components/fates_reprise/DaurSourceCode";
import WorldSourceCode from "../components/source_code_components/fates_reprise/WorldSourceCode";
import StorageSourceCode from "../components/source_code_components/fates_reprise/StorageSourceCode";
import GameScreenSourceCode from "../components/source_code_components/fates_reprise/GameScreenSourceCode";
import BeetleSourceCode from "../components/source_code_components/fates_reprise/BeetleSourceCode";
import WizardSourceCode from "../components/source_code_components/fates_reprise/WizardSourceCode";

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