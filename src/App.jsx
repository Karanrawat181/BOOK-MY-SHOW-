import axios from 'axios';

//Layouts
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/MovieHOC';

//Pages
import HomePage from './pages/Home';
import Movie from './pages/Movie';
import Plays from './pages/Plays.page';

//CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;


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