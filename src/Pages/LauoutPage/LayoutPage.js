import React from 'react';
import {Link, Outlet} from "react-router-dom";

const LayoutPage = () => {
    return (
        <div>
            <div>
                <ol>
                    <li><Link to={'todos'}>Todos</Link></li>
                    <li><Link to={'albums'}>Albums</Link></li>
                    <li><Link to={'comments'}>Comments</Link></li>
                </ol>
            </div>

            <Outlet/>
        </div>
    );
};

export default LayoutPage;