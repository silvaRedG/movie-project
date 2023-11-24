import axios from "axios";


const api = axios.create({

    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key: "e5b3fa264d87cff771e6393db5cbb361",
        language: "pt-BR",
        page:1
    }
})


export default api