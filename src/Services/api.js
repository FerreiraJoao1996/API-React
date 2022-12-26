import axios from "axios";



//URL
// /movie/now_playing?api_key=44622483b317166bb3c4e35dc6e4bc1a&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;