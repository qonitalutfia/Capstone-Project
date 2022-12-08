import axios from "axios";
import authHeader from "./auth-header";
import url from "./API_URL";

const API_URL_ALL_FOOD = url + "/foods";
const API_URL_FOOD = url + "/food";
const API_URL_SEARCH = '?search_query='


const getAllFood = (keyword) => {
  return axios.get(API_URL_ALL_FOOD + API_URL_SEARCH + keyword, { headers: authHeader() });
};

const getFoodById = (id) => {
  return axios.get(API_URL_FOOD + `/${id}`, { headers: authHeader() });
};



const trainerFood = {
    getAllFood,
    getFoodById ,
};

export default trainerFood;
