import {axiosService} from "../axios.services/axios.services";


const getAlboms = ()=> axiosService.get('alboms').then(value => value);

export {getAlboms}