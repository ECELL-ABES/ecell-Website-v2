import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AchievementCarousel = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
  };

  return (
   <div className="flex justify-center items-center py-8">
  <div className="w-full max-w-4xl">
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} className="flex justify-center items-center">
          <img
            src={src}
            alt=""
            className="rounded-lg w-full h-[25rem] object-cover"
          />
        </div>
      ))}
    </Slider>
  </div>
</div>
  );
};

export default AchievementCarousel;