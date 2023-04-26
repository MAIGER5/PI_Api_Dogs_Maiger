import axios from "axios";

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_DETAIL = 'GET_CHARACTERS_DETAIL';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_CHARACTERS_BY_NAME = 'GET_CHARACTERS_BY_NAME';
export const ORDER_CARDS = 'ORDER_CARDS';
export const FILTER_CARDS_SOURCE = 'FILTER_CARDS_SOURCE';
export const FILTER_CARDS_TEMPERAMENT = 'FILTER_CARDS_TEMPERAMENT';
export const ORDER_CARDS_WEIGHT = 'ORDER_CARDS_WEIGHT';
export const GET_AND_POST_TEMPERAMENTS = 'GET_AND_SAVE_TEMPERAMENTS';
// export const GET_TEMPERAMENTS_BD = 'GET_TEMPERAMENTS_BD';


const URLdogs = 'http://localhost:3001/dogs'
const URLtemps = 'http://localhost:3001/temperaments'

export const getCharacters = ()=> {
    return async function(dispatch) {
        const response = await axios.get(`${URLdogs}/`)
        dispatch({type: GET_CHARACTERS, payload: response.data});
    };
};

export const getCharactersByName = (name) => {
    return async function(dispatch) {
        const response = await axios.get(`${URLdogs}/?name=${name}`)
        dispatch({type: GET_CHARACTERS_BY_NAME, payload: response.data})
        // if (response.data.name) {
        //     dispatch({type: GET_CHARACTERS_BY_NAME, payload: response.data})
        // } else {
        //     alert(`No hay perros con el name ${name}`);
        // };
    };
}

export const orderCards = (order) => {
    return function(dispatch) {
        dispatch({type: ORDER_CARDS, payload: order});
    } 
}

export const orderCardsWeight = (orWeight) => {
    return function(dispatch) {
        dispatch({type: ORDER_CARDS_WEIGHT, payload: orWeight});
    }
}

export const filterCardsSource = (payload) => {
    return {
        type: FILTER_CARDS_SOURCE, 
        payload
    }
}

export const filterCardsTemperament = (temps) => {
    return function(dispatch) {
        dispatch({type: FILTER_CARDS_TEMPERAMENT, payload: temps});
    }
}

export const getCharactersDetail = (id)=> {
    return async function(dispatch) {
        const response = (await axios.get(`${URLdogs}/${id}`)).data
        dispatch({type: GET_CHARACTERS_DETAIL, payload: response});
    };
};

export const cleandDetail = ()=> {
    return {
        type: CLEAN_DETAIL
    };
};

export const getTemperaments = ()=> {
    return async function(dispatch) {
        const response = await axios.get(`${URLtemps}/`)
        dispatch({type: GET_AND_POST_TEMPERAMENTS, payload: response.data});
    }
}

export const createRaceDog = (payload)=> {
    return async function(dispatch) {
        const response = await axios.post(`${URLdogs}`, payload );
        return response;
    }
}
// export const getTemperamentsBD = ()=> {
//     return async function(dispatch) {
//         const response = await axios.get(`${URLtemps}/Bd`)
//         dispatch({type: GET_TEMPERAMENTS_BD, payload: response.data});
//     }
// }
