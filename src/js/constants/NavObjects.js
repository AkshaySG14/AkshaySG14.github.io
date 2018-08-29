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

export const SIDEBAR_NAV_ITEMS = {
    [HOME]: [
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
    ],
    [FR]: [
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
    ],
};