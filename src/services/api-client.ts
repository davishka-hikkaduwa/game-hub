import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: 'af78e41f1a6845fb932ae6f311842071'
    }
})