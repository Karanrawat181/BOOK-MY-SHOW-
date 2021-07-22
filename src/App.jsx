

import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/MovieHOC';


import HomePage from './pages/Home';
import Movie from './pages/Movie';
import Plays from './pages/Plays.page';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

    return (
        <>

            <DefaultHOC path="/" exact component={ HomePage } />
            <MovieHOC path="/movie/:id" exact component={ Movie } />
            <DefaultHOC path="/plays" exact component={Plays} />
        
        </>
    );
};

export default App;