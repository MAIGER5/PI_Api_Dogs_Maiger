import { CLEAN_DETAIL, GET_CHARACTERS_DETAIL, GET_CHARACTERS_BY_NAME, ORDER_CARDS, FILTER_CARDS_SOURCE, GET_CHARACTERS, ORDER_CARDS_WEIGHT} from "./actions";


const initialState = {
    allCharacters: [],
    charactersCopy: [],
    charactersDetail: [],
    post: []

};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters:action.payload,
                charactersCopy:action.payload
            };
        case GET_CHARACTERS_BY_NAME:
            return {
                ...state,
                allCharacters:action.payload,
                charactersCopy:action.payload

            };

        case GET_CHARACTERS_DETAIL:
            return {
                ...state,
                charactersDetail: action.payload
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                charactersDetail:[],
            };
        case ORDER_CARDS:

            const sortedArr = action.payload === 'Upward' ?
                [...state.charactersCopy].sort(function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (b.name > a.name) { return -1 }
                    return 0;
                }) :
                [...state.charactersCopy].sort(function (a, b) {
                    if (a.name > b.name) { return -1; }
                    if (b.name > a.name) { return 1; }
                    return 0;
                })
            return {
                ...state,
                allCharacters: sortedArr
            }

        case ORDER_CARDS_WEIGHT:

        const orderWeigth = action.payload === 'weightMin' ?
            [...state.charactersCopy].sort(function (a, b) {
                if (a.weightMin > b.weightMin) { return 1 }
                if (b.weightMin > a.weightMin) { return -1 }
                return 0;
            }) :
            [...state.charactersCopy].sort(function (a, b) {
                if (a.weightMin > b.weightMin) { return -1; }
                if (b.weightMin > a.weightMin) { return 1; }
                return 0;
            })
        return {
            ...state,
            allCharacters: orderWeigth
        }
          
        case FILTER_CARDS_SOURCE:

            const createdFilter = action.payload === 'Base_Datos' ?
                state.charactersCopy.filter(el => el.created === true) :
                state.charactersCopy.filter(el => !el.created);
            return {
                ...state,
                allCharacters: createdFilter,
            }

        default:
            return { ...state };
    }
};

export default rootReducer;