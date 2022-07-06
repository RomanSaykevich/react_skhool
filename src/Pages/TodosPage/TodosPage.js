import React, {useEffect, useState} from 'react';


import {getTodos} from "../../services/todo.service/todo.service";
import Todo from "../../Components/Todo/Todo";



const TodosPage = () => {

    const [todo, setTodo] = useState([])

    useEffect(()=>{
        getTodos().then(({data}) => setTodo([...data]))
    },[])
    return (
        <div>
            {
                todo.map(value => <Todo key={todo.id} todo={value}/>)
            }

        </div>
    );
};

export default TodosPage;