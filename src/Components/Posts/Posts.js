import React, {Component} from 'react';

import {PostService} from "../../Services";
import {Post} from "../index";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.PostService = new PostService();
        this.state = {posts:[]};
        this.PostService.getPosts().then(value => this.setState({posts:value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default Posts;