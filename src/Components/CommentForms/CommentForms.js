import React from 'react';
import {useForm} from "react-hook-form";

const CommentForms = () => {
    
    const {register,handleSubmit} = useForm({defaultValues:{id:'id', name:'name',email:'email', body:'body'}})

const submit = (obj) => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
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

                <input type="text"{...register('id')}/>
                <input type="text"{...register('name')}/>
                <input type="text"{...register('email')}/>
                <input type="text"{...register('body')}/>

                <button>post</button>

            </form>

        </div>
    );
};

export default CommentForms;