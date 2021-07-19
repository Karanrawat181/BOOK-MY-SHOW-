import React from "react";

// Components
import EntertainmentCardSlider from "../components/EntertainmentCard/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import PremierImages from "../Config/TempPoster.config";

const HomePage = () => {

  return (

    <>
      <div className="flex flex-col gap-10">

        <div className="container  mx-auto xl:px-16 px-4 ">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />

        </div>


        <div className="bg-bms-800 py-14">
          <div className="container xl:px-16 mx-auto px-4 flex flex-col gap-3">

            <div className="hidden md:flex">
              <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="premier"
                className="w-full h-full"
              />
            </div>
            
            <PosterSlider images={PremierImages} 
                          title="Premiers"
                          subtitle="Brand new releses every friday"
                            isDark="true"
                          />

          </div>

        </div>
      </div>
        
      <div className="container xl:px-14 px-4 mx-auto my-8">

      <PosterSlider images={PremierImages}
                     title="Online Streaming Events"

                    isDark={false}

                   />

      </div>


    </>

  );
};

export default HomePage;