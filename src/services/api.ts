import axios from 'axios';

const api = axios.create({
baseURL: 'https://happydeployfelipedevagillity.herokuapp.com/',
});

export default api;
