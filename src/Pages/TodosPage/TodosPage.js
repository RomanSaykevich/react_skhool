import React, {useEffect, useState} from 'react';

import {Todo} from "../../Components";
import {getTodos} from "../../Services/todo.service/todo.service";

const TodosPage = () => {

    const [todos, setTodo] = useState([])
н
    useEffect(()=>{
        getTodos()
            .then(value => setTodo([...value]))
    },[])

    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosPage;