import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '54d859a65a8342c1bd41cacece47ec23'
    }
})