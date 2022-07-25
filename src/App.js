import React from 'react';
import {Navigate,Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CarsPage from "./Pages/CarsPage/CarsPage";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<Navigate to={'login'}/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>

        </div>
    );
};

export default App;