import axios from 'axios';


export default axios.create({
    baseURL: 'http://localhost:3000'
});

export const ibge = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br'
});
