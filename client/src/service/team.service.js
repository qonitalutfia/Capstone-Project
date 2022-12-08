import axios from "axios";
import authHeader from "./auth-header";
import url from "./API_URL";

const API_URL_ALL_TEAM = url + "/teams";
const API_URL_TEAM = url + "/team";
const API_URL_SEARCH = '?search_query='


const getAllTeam = (keyword) => {
  return axios.get(API_URL_ALL_TEAM + API_URL_SEARCH + keyword, { headers: authHeader() });
};

const getTeamById = (id) => {
  return axios.get(API_URL_TEAM + `/${id}`, { headers: authHeader() });
};



const trainerService = {
    getAllTeam,
    getTeamById ,
};

export default trainerService;
