import React from 'react';
import {Link, Routes, Route} from "react-router-dom";

import {AlbumPage, CommentsPostsPages, HomePage, Layout, PostPage, TodosPage} from "./Pages";

const App = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/layout'}>Layout</Link></li>
                </ul>
            </div>

            <div>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/layout'} element={<Layout/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumPage/>}/>
                        <Route path={'comments'} element={<CommentsPostsPages/>}>
                            <Route path={':postId'} element={<PostPage/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;