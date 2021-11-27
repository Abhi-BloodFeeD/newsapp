import axios from "axios";

const result = axios.create({
    baseURL:"https://newsapi.org/v2",
});

export default result;