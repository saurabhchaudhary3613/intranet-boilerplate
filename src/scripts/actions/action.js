import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const ROOT_URL = 'http://localhost:8081/api/data';

export function fetchProducts() {
    const request = axios.get(`${ROOT_URL}`);
    console.log('products', request);
    return {
        type: 'FETCH_PRODUCTS',
        payload: request
    };
}
