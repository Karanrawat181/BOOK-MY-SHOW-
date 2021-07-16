import React from "react";
// Components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.component";

const HomePage = () => {


  return (

    <>
      <div className="container mx auto px-4">

        <h1 className="text-2xl font-bold text-gray-800 my-3 ">
          The best of Entertainment
        </h1>

        <EntertainmentCardSlider />
      </div>

    </>

  );
};

export default HomePage;