import React, {useEffect, useState} from 'react';


import {getTodos} from "../../services/todo.service/todo.service";
import Todo from "../../Components/Todo/Todo";



const TodosPage = () => {

    const [todos, setTodo] = useState([])

    useEffect(()=>{
        getTodos().then(({data}) => setTodo([...data]))
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