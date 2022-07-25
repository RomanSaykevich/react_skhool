import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {authActions} from "../../Store";

const LoginForm = () => {

    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = async (data) => {
        const {error} = await dispatch(authActions.login({user: data}));

        if (!error) {
            navigate('/cars')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'}{...register('username')}/>
                <input type="text" placeholder={'password'}{...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default LoginForm;