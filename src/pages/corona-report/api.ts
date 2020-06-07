import axois from "axios";

const url: string = "https://covid-193.p.rapidapi.com";

const apiHeaders = {
    headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "743a26ad9bmshf94694a9f1bfac3p1ac79ajsn206275e766c8",
        "useQueryString": true
    }
};

export const getCountries = async () => {
    try {
        const { data: { response } } = await axois.get(`${url}/countries`, apiHeaders);
        return response;

    } catch (error) {
        console.log(error);
    }
}

export const getStatistics = async () => {
    try {
        const { data: { response } } = await axois.get(`${url}/statistics`, apiHeaders);
        return response;
    } catch (error) {
        console.log(error);
    }
}