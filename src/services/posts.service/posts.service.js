import {axiosService} from "../axios.services/axios.services";


const getPostsId= (id) => axiosService.get('posts/'+ id + '/comments')

export {getPostsId}