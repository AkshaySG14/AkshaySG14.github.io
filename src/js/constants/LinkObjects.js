import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import WebsiteSourceCode from "./files/SourceCode.zip"
import FatesRepriseJar from "./files/FatesReprise.jar"
import MapBlueZip from "./files/MapBlue.zip"
import DarkAndLightJar from "./files/DarkAndLight.jar"
import PixelKnightJar from "./files/PixelKnight.jar"
import ColorSynthesizerZip from "./files/ColorSynthesizer.zip"
import DocumentEncryptorZip from "./files/DocumentEncryptor.zip"
import FileEncryptorZip from "./files/FileEncryptor.zip"
import TrafficDirectorZip from "./files/TrafficDirector.zip"
import SpaceShooterZip from "./files/SpaceShooter.zip"

export const DOWNLOAD_LINKS = {
    [HOME]: "https://github.com/AkshaySG14/AkshaySG14.github.io",
    [FR]: "https://github.com/AkshaySG14/Fates-Reprise",
    [MB]: "https://github.com/AkshaySG14/map_blue",
    [DA]: "https://github.com/AkshaySG14/Dark-and-Light",
    [MM]: "https://github.com/AkshaySG14/Circle-Game",
    [PK]: "https://github.com/AkshaySG14/Pixel-Knight",
    [CS]: "https://github.com/AkshaySG14/Color-Synthesizer",
    [DE]: "https://github.com/AkshaySG14/Document-Encryptor",
    [FE]: "https://github.com/AkshaySG14/File-Encryptor",
    [TD]: "https://github.com/AkshaySG14/Traffic-Director",
    [SS]: "https://github.com/AkshaySG14/Space-Shooter"
};

export const DOWNLOAD_FILES = {
    [HOME]: WebsiteSourceCode,
    [FR]: FatesRepriseJar,
    [MB]: MapBlueZip,
    [DA]: DarkAndLightJar,
    [MM]: null,
    [PK]: PixelKnightJar,
    [CS]: ColorSynthesizerZip,
    [DE]: DocumentEncryptorZip,
    [FE]: FileEncryptorZip,
    [TD]: TrafficDirectorZip,
    [SS]: SpaceShooterZip
};

const GOOGLE = "Google Playstore Link";
const MAC = "Mac Application Download";
const JAR = "Jar Download";
const SOURCE = "Source Code Download";

export const DOWNLOAD_NAMES = {
    [HOME]: SOURCE,
    [FR]: JAR,
    [MB]: MAC,
    [DA]: JAR,
    [MM]: GOOGLE,
    [PK]: JAR,
    [CS]: MAC,
    [DE]: MAC,
    [FE]: MAC,
    [TD]: SOURCE,
    [SS]: MAC
};

export const FILE_NAMES = {
    [HOME]: "WebsiteSourceCode.zip",
    [FR]: "FatesReprise.jar",
    [MB]: "MapBlue.jar",
    [DA]: "DarkAndLight.jar",
    [MM]: null,
    [PK]: "PixelKnight.jar",
    [CS]: "ColorSynthesizer.zip",
    [DE]: "DocumentEncryptor.zip",
    [FE]: "FileEncryptor.zip",
    [TD]: "TrafficDirector.zip",
    [SS]: "SpaceShooter.zip"
};
