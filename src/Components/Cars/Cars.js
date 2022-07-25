import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {carActions} from "../../Store";
import Car from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, prev, next} = useSelector(state=>state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        dispatch(carActions.getAll({page:query.get('page')}))
    },[dispatch,query])

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };

    return (
        <div>

            <button disabled={!prev} onClick={prevPage}>Prev</button>

            <button disabled={!next} onClick={nextPage}>Next</button>

            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }

        </div>
    );
};

export default Cars;