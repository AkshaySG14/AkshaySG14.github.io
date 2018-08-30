import React from "react"

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import HomeSummaryComponent from "../components/summary_components/Home";
import FatesRepriseSummaryComponent from "../components/summary_components/FatesReprise";
import MapBlueSummaryComponent from "../components/summary_components/MapBlue";
import DarkAndLightSummaryComponent from "../components/summary_components/DarkAndLight";
import MemoriSummaryComponent from "../components/summary_components/Memori";
import PixelKnightSummaryComponent from "../components/summary_components/PixelKnight";
import ColorSynthesizerSummaryComponent from "../components/summary_components/ColorSynthesizer";
import DocumentEncryptorSummaryComponent from "../components/summary_components/DocumentEncryptor";
import FileEncryptorSummaryComponent from "../components/summary_components/FileEncryptor";
import TrafficDirectorSummaryComponent from "../components/summary_components/TrafficDirector";
import SpaceShooterSummaryComponent from "../components/summary_components/SpaceShooter";

export const SUMMARY_OBJECTS = {
    [HOME]: <HomeSummaryComponent/>,
    [FR]: <FatesRepriseSummaryComponent/>,
    [MB]: <MapBlueSummaryComponent/>,
    [DA]: <DarkAndLightSummaryComponent/>,
    [MM]: <MemoriSummaryComponent/>,
    [PK]: <PixelKnightSummaryComponent/>,
    [CS]: <ColorSynthesizerSummaryComponent/>,
    [DE]: <DocumentEncryptorSummaryComponent/>,
    [FE]: <FileEncryptorSummaryComponent/>,
    [TD]: <TrafficDirectorSummaryComponent/>,
    [SS]: <SpaceShooterSummaryComponent/>
};