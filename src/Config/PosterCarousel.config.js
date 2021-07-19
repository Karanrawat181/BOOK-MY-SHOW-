
const settings = {
  infinity: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  InitialSlide: 0,
  responsive: [
    {
      breakpoints: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,   
      },
    },
    {
      breakpoints: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        InitialSlide: 1,
      },
    },

    {
      breakpoints: 480,
      settings: {

        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;