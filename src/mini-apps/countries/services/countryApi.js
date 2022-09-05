import axios from 'axios';


export function getCountryList (){
    return axios.get(`https://restcountries.com/v2/all`);
}