import React, {useEffect, useState} from 'react';

import {getUsers} from "../../services";
import {User} from "../User/User";
import('./Users.css')

const Users = ({getPostUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{

        getUsers().then(({data}) => setUsers([...data]))

    },[])

    return (

        <div className={'usersD'}>
            {
                users.map(value => <User key={value.id} item={value}  getPostUser={getPostUser}/>)
            }
        </div>

    );
};

export {Users};