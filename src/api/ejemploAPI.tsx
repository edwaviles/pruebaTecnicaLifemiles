import axios from "axios";

const ejemploDb = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params:{
        api_key:"bb7749e14b09fce2cb0e4a711e45f9d0",
        language:"es-ES"
    }
})

export default ejemploDb;