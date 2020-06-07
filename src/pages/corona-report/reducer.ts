import { SET_LOADING, GET_COUNTRIES, ERROR_COUNTRIES } from "./actionTypes";

type appState = {};
type Action = { type: string; payload: any }


const initialState: appState = {
    countries: null,
    loading: false,
    error: null
}


export default (state = initialState, action: Action): appState => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };

        case ERROR_COUNTRIES:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
