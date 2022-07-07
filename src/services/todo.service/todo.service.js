import {axiosService} from "../axios.services/axios.services";

const getTodos = () => axiosService.get('todos')

export {getTodos}