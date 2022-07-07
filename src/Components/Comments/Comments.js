import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Comments = ({comment}) => {
    return (
        <div>
            <Outlet/>

                {comment.id} - {comment.name}---<Link to={comment.id.toString()}> details post</Link>
        </div>
    );
};

export default Comments;