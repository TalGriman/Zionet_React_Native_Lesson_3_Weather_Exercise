import axios from "axios";

export default axios.create({
    baseURL: 'https://save-http-default-rtdb.firebaseio.com'
});