import { HOME, FR, MB, DA, MM, PK, CS, DE, FE, TD, SS } from "./Store"

export const MAIN_NAVBAR_ITEMS = [
    {
        "name": "Home",
        "id": HOME
    },
    {
        "name": "Fate's Reprise",
        "id": FR
    },
    {
        "name": "Map Blue",
        "id": MB
    },
    {
        "name": "Dark And Light",
        "id": DA
    },
    {
        "name": "Memori",
        "id": MM
    },
    {
        "name": "Pixel Knight",
        "id": PK
    },
    {
        "name": "Color Synthesizer",
        "id": CS
    },
    {
        "name": "Document Encryptor",
        "id": DE
    },
    {
        "name": "File Encryptor",
        "id": FE
    },
    {
        "name": "Traffic Director",
        "id": TD
    },
    {
        "name": "Space Shooter",
        "id": SS
    }
];

const BASIC_SIDEBAR = [
    {
        "name": "Summary",
        "id": "summary"
    },
    {
        "name": "Code",
        "id": "code"
    },
    {
        "name": "Links",
        "id": "links"
    }
];

const SCREENSHOT_SIDEBAR = [
    {
        "name": "Summary",
        "id": "summary"
    },
    {
        "name": "Screenshots",
        "id": "screenshots"
    },
    {
        "name": "Code",
        "id": "code"
    },
    {
        "name": "Links",
        "id": "links"
    }
];

const VIDEO_SIDEBAR = [
    {
        "name": "Summary",
        "id": "summary"
    },
    {
        "name": "Screenshots",
        "id": "screenshots"
    },
    {
        "name": "Video",
        "id": "video"
    },
    {
        "name": "Code",
        "id": "code"
    },
    {
        "name": "Links",
        "id": "links"
    }
];

export const SIDEBAR_NAV_ITEMS = {
    [HOME]: BASIC_SIDEBAR,
    [FR]: VIDEO_SIDEBAR,
    [MB]: VIDEO_SIDEBAR,
    [DA]: SCREENSHOT_SIDEBAR,
    [MM]: VIDEO_SIDEBAR,
    [PK]: VIDEO_SIDEBAR,
    [CS]: SCREENSHOT_SIDEBAR,
    [DE]: SCREENSHOT_SIDEBAR,
    [FE]: SCREENSHOT_SIDEBAR,
    [TD]: SCREENSHOT_SIDEBAR,
    [SS]: SCREENSHOT_SIDEBAR,
};