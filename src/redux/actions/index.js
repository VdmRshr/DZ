import {
    FETCH_CHARACTERS_FAILURE,
    FETCH_CHARACTERS_REQUEST,
    FETCH_CHARACTERS_SUCCESS,
    SHOW_HERO,
    ADD_TO_FAVORITE
} from "../types";


const charactersLoaded = (characters) => {
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        payload: characters
    }
};
const charactersRequested = () => {
    return {
        type: FETCH_CHARACTERS_REQUEST
    }
};
const charactersError = (error) => {
    return {
        type: FETCH_CHARACTERS_FAILURE,
        payload: error
    }
};
const showHero = (id) => {
    return {
        type: SHOW_HERO,
        payload: id
    }
};
const addToFavorite = (id) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: id
    }
};


export {
    charactersLoaded,
    charactersRequested,
    charactersError,
    showHero,
    addToFavorite
};