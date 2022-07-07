import React from 'react';
import{Outlet} from "react-router-dom";

import {CommentsPage} from "../index";

const CommentsPostsPages = () => {
    return (
        <div>
            <Outlet/>
        <CommentsPage/>
        </div>
    );
};

export default CommentsPostsPages;