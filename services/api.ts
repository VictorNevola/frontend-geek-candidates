import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-geek-candidates.herokuapp.com/'
})

export default api;