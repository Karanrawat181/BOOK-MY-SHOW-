import axios from "axios";
import React, { useState,useEffect } from "react";


// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// config




const HomePage = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);


  useEffect(() => {

    const requestGetPopularMovies = async () => {

      const getPopularMovies = await axios.get("/movie/popular");

      setPopularMovies(getPopularMovies.data.results);


    };

    requestGetPopularMovies();

  }, []);


  useEffect(() => {

    const requestGetTopRatedMovies = async () => {

      const getTopRatedMovies = await axios.get("/movie/top_rated");

      setTopRatedMovies(getTopRatedMovies.data.results);


    };

    requestGetTopRatedMovies();

  }, []);
  
  useEffect(() => {

    const requestGetPopularMovies = async () => {

      const getUpcomingMovies = await axios.get("/movie/upcoming");

      setUpcomingMovies(getUpcomingMovies.data.results);


    };

    requestGetPopularMovies();

  }, []);



  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 xl:px-14 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3 xl:px-14">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8 xl:px-14">
        <PosterSlider
          images={TopRatedMovies}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8 xl:px-14">
        <PosterSlider
          images={upcomingMovies}
          title="Outdoor events"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;