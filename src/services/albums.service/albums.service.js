import {axiosService} from "../axios.services/axios.services";


const getAlbums = ()=> axiosService.get('albums').then(value => value);

export {getAlbums}


