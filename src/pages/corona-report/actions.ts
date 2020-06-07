import axios from "axios";
import { SET_LOADING, GET_COUNTRIES, ERROR_COUNTRIES } from "./actionTypes";

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const getCountries = () => async (dispatch: any) => {
    try {
        setLoading();

        const res = await axios.get("https://covid-193.p.rapidapi.com/countries", {
            headers: {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "743a26ad9bmshf94694a9f1bfac3p1ac79ajsn206275e766c8",
                "useQueryString": true
            }
        });

        const data = await res;

        dispatch({
            type: GET_COUNTRIES,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR_COUNTRIES,
            payload: error.response.statusText
        });
    }
}