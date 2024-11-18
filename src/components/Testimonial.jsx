import React from 'react'
import Card from './Card'
import { Slide, Fade } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className='flex flex-col items-center'>
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />TESTIMONIALS</span>
                            </Fade>
                        </div>
                        <h2 className="text-5xl font-semibold">Testimonials About Us</h2>
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  <div className="slider-container w-[90vw] md:w-[85vw] lg:w-[80vw]">
    <Slider {...settings}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Slider>
  </div>
</div>

                </div>
            </div>
        </div>
    )
}

export default Testimonial