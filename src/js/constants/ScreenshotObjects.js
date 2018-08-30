import React from "react"

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import FatesReprisescreenshotComponent from "../components/screenshot_components/FatesReprise";
import MapBlueScreenshotComponent from "../components/screenshot_components/MapBlue";
import DarkAndLightScreenshotComponent from "../components/screenshot_components/DarkAndLight";
import MemoriScreenshotComponent from "../components/screenshot_components/Memori";
import PixelKnightScreenshotComponent from "../components/screenshot_components/PixelKnight";
import ColorSynthesizerScreenshotComponent from "../components/screenshot_components/ColorSynthesizer";
import DocumentEncryptorScreenshotCompoonent from "../components/screenshot_components/DocumentEncryptor";
import FileEncryptorScreenshotComponent from "../components/screenshot_components/FileEncryptor";
import TrafficDirectorScreenshotComponent from "../components/screenshot_components/TrafficDirector";
import SpaceShooterScreenshotComponent from "../components/screenshot_components/SpaceShooter";

export const SCREENSHOT_OBJECTS = {
    [HOME]: null,
    [FR]: <FatesReprisescreenshotComponent/>,
    [MB]: <MapBlueScreenshotComponent/>,
    [DA]: <DarkAndLightScreenshotComponent/>,
    [MM]: <MemoriScreenshotComponent/>,
    [PK]: <PixelKnightScreenshotComponent/>,
    [CS]: <ColorSynthesizerScreenshotComponent/>,
    [DE]: <DocumentEncryptorScreenshotCompoonent/>,
    [FE]: <FileEncryptorScreenshotComponent/>,
    [TD]: <TrafficDirectorScreenshotComponent/>,
    [SS]: <SpaceShooterScreenshotComponent/>,
};