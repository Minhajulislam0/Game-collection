import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "2268ea4a67e1424aac3654b86b81552e",
  },
});
