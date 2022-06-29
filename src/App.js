import React from 'react';
import {CommentForms, UserForms} from "./Components";

const App = () => {
    return (
        <div>

            <h2>User Form</h2>
            <UserForms/>
            <hr/>
            <hr/>
            <h2>Comment Form</h2>
            <CommentForms/>
        </div>
    );
};

export default App;