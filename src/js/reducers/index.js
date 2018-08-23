import {MAIN_NAVBAR_ITEMS, SIDEBAR_NAV_ITEMS} from "../constants/navObjects"
import { ADD_ARTICLE } from "../constants/actionTypes"
import {MAIN_HEADERS, SECONDARY_HEADERS, SECONDARY_PARAGRAPHS, SUMMARY_PARAGRAPHS} from "../constants/summaryObjects";

const initialState = {
    mainNavItems: MAIN_NAVBAR_ITEMS,
    mainActiveNavItem: 0,
    sidebarNavItems: SIDEBAR_NAV_ITEMS,
    sidebarActiveNavItem: 0,
    summaryHeader: MAIN_HEADERS.HO,
    summaryParagraph: SUMMARY_PARAGRAPHS.HO,
    secondaryHeader: SECONDARY_HEADERS.HO,
    secondaryParagraph: SECONDARY_PARAGRAPHS.HO
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;