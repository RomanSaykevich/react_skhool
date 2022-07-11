import React, {Component} from 'react';

import {UserService} from "../../Services";
import {User} from "../index";

class Users extends Component {

    constructor(props) {
        super(props);
        this.UserService = new UserService();
        this.state = {users: []}
        this.UserService.getUsers().then(value => this.setState({users: value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        );
    }
}

export default Users;