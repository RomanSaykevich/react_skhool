import React from 'react';

import Cars from "./Components/Cars/Cars";
import CarsForm from "./Components/CarsForm/CarsForm";

const App = () => {
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;