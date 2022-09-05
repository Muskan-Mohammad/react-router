import axios from 'axios';

export function getCatList (){
    return axios.get(`https://api.thecatapi.com/v1/breeds`);
}