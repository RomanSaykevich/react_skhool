import React, {useEffect, useState} from 'react';

import {Comments} from "../../Components";
import {getComments} from "../../Services/comment.service/comments.service";



const CommentsPage = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments().then(value=> setComments([...value]))
    },[])


    return (

        <div>

            {
                comments.map(comment => <Comments key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsPage;