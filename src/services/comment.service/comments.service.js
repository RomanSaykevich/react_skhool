import {axiosService} from "../axios.services/axios.services";


const getComments = () => axiosService.get('comments').then(value => value);

export {getComments}