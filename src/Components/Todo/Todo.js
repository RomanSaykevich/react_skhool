import React from 'react';

const Todo = ({todo}) => {

    return (
        <div>
            {todo.id} - {todo.title} -- {todo.completed.toString()}
        </div>
    );
};

export default Todo;