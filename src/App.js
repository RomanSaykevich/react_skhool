import React from 'react';
import {Link, Routes, Route} from "react-router-dom";

import {AlbomPage, CommentsPage, HomePage, LayoutPage, TodosPage} from "./Pages";


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
                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'alboms'} element={<AlbomPage/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;