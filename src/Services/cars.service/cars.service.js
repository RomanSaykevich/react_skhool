import {axiosService} from "../axios.service/axios.service";
import {urls} from "../constants";



const carsService = {
    getAll: () => axiosService.get(urls.cars),
    deleteCarId:(id) => axiosService.delete(`${urls.cars}/${id}`),
    createCars:(car)=> axiosService.post(urls.cars, car)
}

export {carsService}