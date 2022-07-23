import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../Store";





const CarsForm = () => {
    const {handleSubmit, register, reset} = useForm();
const dispatch = useDispatch();



    const submit = (data)=>{
dispatch(carActions.createCar({car: data}))
    } ;
    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="number" placeholder={'price'} {...register('price')}/>
                <input type="number" placeholder={'year'} {...register('year')}/>
                <button>save</button>
            </form>
        </div>
    );
};

export default CarsForm;