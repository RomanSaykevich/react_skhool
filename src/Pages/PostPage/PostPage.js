import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {getPostsId} from "../../services/posts.service/posts.service";
import {Posts} from "../../Components";

const PostPage = () => {

    const [posts, setPosts] = useState([])

    const {postId} = useParams()

    useEffect(() => {
            getPostsId(postId)
                .then(value=> setPosts([{...value}]))
    }, [postId])

    return (
        <div>
            {
                posts.map(value =><Posts item={value} key={value.id}/>)
            }
        </div>
    );
};

export default PostPage;