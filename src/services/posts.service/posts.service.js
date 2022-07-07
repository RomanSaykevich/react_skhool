import {axiosService} from "../axios.services/axios.services";


const getPostsId= (id) => axiosService.get('/posts/'+ id + '/comments').then(value => value)

export {getPostsId}