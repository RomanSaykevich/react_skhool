import React, { useState} from 'react';


import {Posts, Users} from "./components";
import {getUserPosts} from "./services";


const App = () => {

    const [post, setPost] = useState([]);

    const getPostUser = (id) => {
        getUserPosts(id).then(({data})=>setPost([...data]))

    }

    return (

        <div>

            <Users getPostUser={getPostUser} />

            {
                post.map(value => <Posts key={value.id} id={value.id} title={value.title} body={value.body} />)
            }

        </div>

    );
};

export default App;