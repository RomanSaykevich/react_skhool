import React, {useEffect, useState} from 'react';


import {getComments} from "../../services/comment.service/comments.service";
import {Comments} from "../../Components";


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