import React from 'react'

const MovieInfo = () => {
  return (
    <>

      <div className="flex flex-col gap-3  lg:gap-8">

        <div className="flex items-center gap-3 md:px-4">

          <div className="w-40 h-8">

            <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />

          </div>

          <span className="bg-bms-700 p-1 text-xs text-white rounded-md"> Streaming Now</span>

        </div>

        <h1 className="text-white font-bold lg:text-5xl hidden lg:block"> Justice League</h1>

        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col ">


          <div className="text-white font-light flex flex-col gap-2 md:px-4">

            <h4>4k &bull; English &bull; Action</h4>
            <h4>1h 53m &bull;Action, Sci-Fi , thriller &bull; 13++</h4>

          </div>


          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">

            <div className="bg-red-600 w-full py-3 text-center text-white font-semibold rounded-lg">

              <button>Rent ₹149</button>
            </div>

            <div className="bg-red-600 w-full py-3 text-center text-white font-semibold rounded-lg">

              <button>Buy ₹149</button>
            </div>


          </div>

        </div>

      </div>

    </>
  )
}

export default MovieInfo;

