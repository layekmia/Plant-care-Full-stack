import axios from 'axios';

const BASE_URL = 'https://backend-chi-beige.vercel.app/web/api/plants'

async function getPlantsData() {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  } catch (error) {
    return null;
  }
}

async function getPlantById(params){
    try {
        const res = await axios.get(`${BASE_URL}/${params}`);
        return res;
    } catch (error) {
        return null
    }
}

export {getPlantsData, getPlantById, BASE_URL}