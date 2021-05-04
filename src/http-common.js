import axios from "axios";

export default axios.create({
  baseURL: "http://filamenttracker-backend-sparkseric90395205.codeanyapp.com/api/filament",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': '*',
  }
});
