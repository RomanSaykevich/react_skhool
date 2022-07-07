import React from 'react';

const Posts = ({item}) => {
    return (
        <div>
            {item.id} --- {item.body}

        </div>
    );
};

export default Posts;