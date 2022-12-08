import axios from "axios";
import authHeader from "./auth-header";
import url from "./API_URL";

const API_URL_ALL_PLACE = url + "/places";
const API_URL_PLACE = url + "/place";
const API_URL_SEARCH = '?search_query='


const getAllPlace = (keyword) => {
  return axios.get(API_URL_ALL_PLACE + API_URL_SEARCH + keyword, { headers: authHeader() });
};

const getPlaceById = (id) => {
  return axios.get(API_URL_PLACE + `/${id}`, { headers: authHeader() });
};



const PlaceService = {
    getAllPlace,
    getPlaceById ,
};

export default PlaceService;
