import {axiosService} from "../axios.service/axios.service";

const getUsers = ()=> axiosService.get('').then(value => value);

const getUser = (id)=> axiosService.get('/' + id).then(value => value);

const getUserPosts = (id) => axiosService.get('/' + id + '/posts').then(value => value);

export {getUsers, getUserPosts, getUser}



