import React from 'react';
import {Link} from "react-router-dom";

const Comments = ({comment}) => {
    return (
        <div>
                {comment.id} - {comment.name}---<Link to={comment.postId.toString()}> details post</Link>
        </div>
    );
};

export default Comments;