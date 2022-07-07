import {axiosService} from "../axios.services/axios.services";


const getPostsId= (id) => axiosService.get('/posts/'+ id).then(value => value.data)

export {getPostsId}