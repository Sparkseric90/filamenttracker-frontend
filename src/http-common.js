import axios from "axios";

export default axios.create({
  baseURL: "https://filamenttracker-backend-sparkseric90395205.codeanyapp.com/api/filament",
  headers: {
    "Content-type": "application/json"
  }
});
