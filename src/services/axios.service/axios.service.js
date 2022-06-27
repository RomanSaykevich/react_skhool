import axios from "axios";

const axiosService = axios.create({

    baseURL: 'https://jsonplaceholder.typicode.com/users'

})

export {axiosService};