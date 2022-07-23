import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../Store";


const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>

            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;