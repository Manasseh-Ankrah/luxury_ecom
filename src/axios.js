import axios from "axios";

const instance = axios.create({
  baseURL: "https://jordanluxury.herokuapp.com/", //API URL (from Heroku)
});

export default instance;
