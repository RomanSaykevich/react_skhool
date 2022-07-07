import React from 'react';

const Posts = ({post}) => {
    return (
        <div>
            {post.id} --- {post.name}
        </div>
    );
};

export default Posts;