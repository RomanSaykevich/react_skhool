import {axiosService} from "../axios.services/axios.services";


const getTodos = () => axiosService.get('todos').then(value => value);

const getTodoId = (id) => axiosService.get('/' + id).then(value => value);

export {getTodos, getTodoId}