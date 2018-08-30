import React from "react"

import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

import FatesRepriseVideoComponent from "../components/video_components/FatesReprise";
import MapBlueVideoComponent from "../components/video_components/MapBlue";
import MemoriVideoComponent from "../components/video_components/Memori";
import PixelKnightVideoComponent from "../components/video_components/PixelKnight";

export const VIDEO_OBJECTS = {
    [HOME]: null,
    [FR]: <FatesRepriseVideoComponent/>,
    [MB]: <MapBlueVideoComponent/>,
    [DA]: null,
    [MM]: <MemoriVideoComponent/>,
    [PK]: <PixelKnightVideoComponent/>,
    [CS]: null,
    [DE]: null,
    [FE]: null,
    [TD]: null,
    [SS]: null
};