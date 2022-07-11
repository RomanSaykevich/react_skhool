import React, {Component} from 'react';

import {CommentService} from "../../Services";
import {Comment} from "../index";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.CommentService = new CommentService();
        this.state = {comments:[]}
        this.CommentService.getComments().then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        );
    }
}

export default Comments;