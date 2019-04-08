import axios from "axios";

const BASE_URL = 'https://samples.openweathermap.org/data/2.5';
const API_KEY = 'f2d5b997078489b8a7f5bebf013dbb4c';
axios.defaults.baseURL = BASE_URL;

export const getTodayWeather = async (townName = 'Warsaw') => {
    const response = await axios({
        method: "get",
        url:`/weather?q=${townName}&appid=${API_KEY}`,
    });
     return response.data;
}


