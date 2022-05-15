import axios from "axios";

export default axios.create({
    baseURL: 'https://api.weatherapi.com/v1/current.json?key=0b9fe350d38644b0a4193829221505&q='
});