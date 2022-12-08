import axios from "axios";
import authHeader from "./auth-header";
import url from "./API_URL";

const API_URL_ALL_TRAINER = url + "/trainers";
const API_URL_TRAINER = url + "/trainer";
const API_URL_SEARCH = '?search_query='


const getAllTrainer = (keyword) => {
  return axios.get(API_URL_ALL_TRAINER + API_URL_SEARCH + keyword, { headers: authHeader() });
};

const getTrainerById = (id) => {
  return axios.get(API_URL_TRAINER + `/${id}`, { headers: authHeader() });
};



const trainerService = {
    getAllTrainer,
    getTrainerById ,
};

export default trainerService;
