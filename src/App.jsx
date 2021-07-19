import React from 'react';
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/MovieHOC';
import HomePage from './pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movie from './pages/Movie';


function App() {

    return (
        <>

            <DefaultHOC path="/" exact component={ HomePage } />
            <MovieHOC path="/movie/:id" exact component={ movie } />
        
        </>
    );
};

export default App;