import {axiosService} from "../axios.service/axios.service";


const postUsers = () => axiosService.post('user').then(response=> response.text());

const postUser = (id) => axiosService.post('/' + id).then(response=> response.text())

export {postUser, postUsers}
