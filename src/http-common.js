import axios from "axios";

export default axios.create({
  baseURL: "http://filamenttracker-backend-sparkseric90395205.codeanyapp.com/api/filament",
  body: {
    "Content-type": "application/json"
  }
});
