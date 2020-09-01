import axios from 'axios';
import CONFIG from '../Config';

export const getCovidStats = async country => {
    return await axios.get(`${CONFIG.HOST}/countries/${country}`);
}