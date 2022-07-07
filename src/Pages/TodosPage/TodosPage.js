import React, {useEffect, useState} from 'react';

import {getTodos} from "../../services/todo.service/todo.service";
import {Todo} from "../../Components";

const TodosPage = () => {

    const [todos, setTodo] = useState([])

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