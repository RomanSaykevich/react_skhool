import {axiosService} from "../axios.services/axios.services";
import {urls} from "../constans/urls";

const CarsService= {
    getAll: (page = 1) => axiosService.get(urls.cars, {params: {page}})
}

export {
    CarsService
}