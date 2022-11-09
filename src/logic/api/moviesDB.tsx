import axios from 'axios';

export const moviesDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2049ec1613fc1c7b1742f71f5e0b9bcd',
        language: 'es-CO'
    }
})

export default moviesDB;