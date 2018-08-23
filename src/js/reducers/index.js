import { NAVBAR_ITEMS } from "../constants/componentObjects"
import { ADD_ARTICLE } from "../constants/actionTypes"

const initialState = {
    mainNavItems: NAVBAR_ITEMS,
    mainActiveNavItem: 1
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