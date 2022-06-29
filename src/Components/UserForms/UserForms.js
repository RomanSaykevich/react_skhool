import React from 'react';
import {useForm} from "react-hook-form";


const UserForms = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues:{name:'name', userName:'userName',email:'email'}});

    const submit = (obj)=>{

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(obj),
        })
            .then(response => response.text())
            .then(result => console.log(result))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                <input type={'text'} {...register('name', {required:true})}/>
                {
                    errors.name && <span>Друже, вкажи імя своє</span>
                }
                <input type={'text'} {...register('userName')}/>

                <input type={'text'} {...register('email',{required:true})}/>
                {
                    errors.email && <span>Братику, ти забув про емайл</span>
                }
                <button>post</button>

            </form>

        </div>
    );
};

export default UserForms;