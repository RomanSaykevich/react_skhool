import {axiosService} from "../axios.services/axios.services";


const getComments = () => axiosService.get('comments').then(value => value);

const getCommentsByPostId = (id) => {axiosService('/'+ '/post' + '/'+ id).then(value => value)

}
export {getComments, getCommentsByPostId}