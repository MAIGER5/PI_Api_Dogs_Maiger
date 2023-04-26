import {
    CLEAN_DETAIL, 
    GET_CHARACTERS_DETAIL, 
    GET_CHARACTERS_BY_NAME, 
    ORDER_CARDS, 
    FILTER_CARDS_SOURCE, 
    GET_CHARACTERS, 
    ORDER_CARDS_WEIGHT, 
    // GET_TEMPERAMENTS_BD, 
    FILTER_CARDS_TEMPERAMENT,
    GET_AND_POST_TEMPERAMENTS} from "./actions";


const initialState = {
    allCharacters: [],
    charactersCopy: [],
    charactersDetail: [],
    temperamentsBD: [],
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

        case FILTER_CARDS_TEMPERAMENT:

            const {charactersCopy} = state
            let filterTemp = action.payload

            filterTemp === 'DEFAULT'? (filterTemp = charactersCopy) : (filterTemp = charactersCopy.filter((ele)=> ele.temperament.includes(action.payload)))
            // const filTemp = state.charactersCopy.filter((ele)=> ele.temperament.includes(action.payload))
            return {
                ...state,
                allCharacters: filterTemp,
            }

        case GET_AND_POST_TEMPERAMENTS:
            return {
                ...state,
                temperamentsBD: action.payload,
            };

        // case GET_TEMPERAMENTS_BD:
        //     return {
        //         ...state,
        //         temperamentsBD: action.payload,
        //     };

        default:
            return { ...state };
    }
};

export default rootReducer;