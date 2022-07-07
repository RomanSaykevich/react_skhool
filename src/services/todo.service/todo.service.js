import {axiosService} from "../axios.services/axios.services";

const getTodos = () => axiosService.get('todos').then(value => value.data)

export {getTodos}