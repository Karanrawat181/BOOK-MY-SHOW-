import React from 'react';


import DefaultHOC from './HOC/Default.HOC';

import Temp from './components/Temp';
import Lame from './components/lame';


function App() {

    return (

        <div>

        <DefaultHOC path="/"  exact component={Temp}    />
         <DefaultHOC path="/movie" exact component={Lame} />
       
        </div>
    );
};

export default App;