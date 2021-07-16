import React from 'react';
import DefaultHOC from './HOC/Default.HOC';
import HomePage from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

    return (

        <>

            <DefaultHOC path="/" exact component={ HomePage } />
            
          

        </>
    );
};

export default App;