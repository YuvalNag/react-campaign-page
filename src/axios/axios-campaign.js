import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {'X-API-KEY':'  9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9'}
});

export default instance