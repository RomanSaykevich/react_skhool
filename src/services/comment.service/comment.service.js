import {axiosService} from "../axios.service/axios.service";


const postComments = () => axiosService.post('comment').then(value => value);

