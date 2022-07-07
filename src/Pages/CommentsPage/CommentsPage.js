import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {getComments} from "../../services/comment.service/comments.service";
import Comments from "../../Components/Comments/Comments";

const CommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments().then(({data})=> setComments([...data]))
    },[])


    return (

        <div>
            <Outlet/>
            {
                comments.map(comment => <Comments key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPage;