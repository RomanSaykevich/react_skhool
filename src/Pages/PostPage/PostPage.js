import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import Posts from "../../Components/Posts/Posts";
import {getPostsId} from "../../services/posts.service/posts.service";

const PostPage = () => {

    const [posts, setPosts] = useState(null)

    const {id} = useParams()

    useEffect((id) => {
            getPostsId(id)
                .then(({data}) => setPosts([...data]))

    }, [id])

    return (
        <div>
            {
                posts.map(post => <Posts key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostPage;