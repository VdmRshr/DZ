import {
    FETCH_CHARACTERS_FAILURE,
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    SHOW_HERO,
    ADD_TO_FAVORITE
} from "../types";

const initialState = {
    characters: [],
    loading: true,
    error: null,
    item: {},
    favoriteItems: []
};
const findItem = (array, id) => {
    return array.find((hero) => hero.id === id);
};
const updateItem = (array, itemId) => {
    const item = findItem(array,itemId);
    item['isFavorite'] = true;
    const itemIndex = array.findIndex(({id}) => id === itemId);

    return [
        ...array.slice(0, itemIndex),
        item,
        ...array.slice(itemIndex + 1)
    ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload,
                loading: false,
                error: null
            };
        case FETCH_CHARACTERS_REQUEST:
            return {
                ...state,
                characters: [],
                loading: true,
                error: null
            };
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                characters: [],
                loading: false,
                error: action.payload
            };
        case SHOW_HERO:
            return {
                ...state,
                item: findItem(state.characters, action.payload)
            };
        case ADD_TO_FAVORITE:
            return {
                ...state,
                characters: updateItem(state.characters, action.payload),
                favoriteItems: [
                    ...state.favoriteItems,
                                        findItem(state.characters, action.payload)
                ]
            };

        default:
            return state;
    }


};
export default reducer;