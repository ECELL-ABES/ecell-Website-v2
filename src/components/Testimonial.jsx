import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dg from "../assets/dg.png";
import np from "../assets/np.jpg";
import sa from "../assets/sa.jpg";
import ka from "../assets/ka.jpg";
import t from "../assets/t.png";

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };
  

  const reverse = {
    ...settings,
    rtl: true,
  };

  const data = [
    {
      id: 1,
      description:
      "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting a drone show and reaching NEC 2023 finals. Guided by Mahendra Sir and Prabansh Sir, it fostered growth, teamwork, and unforgettable memories.",      imgSrc: dg,
      name: "Divyanshyu gupta",
      role: "Mentor",
    },
    {
      id: 2,
      description:
"E-Cell ABESEC guided my growth from volunteer to Tech-Ops Coordinator, highlighted by launching the first live website, fostering professional and personal development under inspiring mentorship.",      
      imgSrc: np,
      name: "Neelansh Pandey",
      role: "Former Tech-Ops Coordinator, E-CELL ABESEC",
    },
    {
      id: 3,
      description:
        "E-Cell ABESEC guided my growth from volunteer to Social Media Coordinator, fostering personal and professional development through impactful events and lasting relationships under inspiring mentorship.",
      imgSrc: sa,
      name: "Shoaib Ahmad",
      role: "Former Social Media Coordinator, E-CELL ABESEC",
    },
    {
      id: 4,
      description:
      "E-Cell ABESEC shaped my journey from volunteer to Vice President, boosting female participation by 30%, enhancing leadership skills, and building confidence while leaving a lasting legacy. fostering personal and professional growth.",
      imgSrc: ka,
      name: "Kamakshi Agarwal",
      role: "Former Vice president",
    },
    {
      id: 5,
      description:
      "E-Cell ABESEC has been a transformative experience, fostering resilience, leadership, and innovation. It shaped my journey as co-founder of Know Your Colleges and continues to empower students networks that drive success in entrepreneurship.", 
      imgSrc: t,
      name: "Sarthak Gupta",
      role: "Former Treasurer",
    },
  ];

  return (
    <div className="bg-black text-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <div
            style={{
              backgroundColor: "#141412",
              color: "#ffde59",
              border: "1px solid #26250F",
            }}
            className="rounded-full px-4 py-1 mb-4 w-fit"
          >
            <Fade cascade>
              <span className="flex items-center gap-2">
                <GiPolarStar />
                TESTIMONIALS
              </span>
            </Fade>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">Testimonials About Us</h2>
        </div>

        <div className="slider-container mx-0  sm:mx-0 md:ml-2 overflow-visible">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="px-1 sm:px-2">
                <Card
                  description={item.description}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  role={item.role}
                />
              </div>
            ))}
          </Slider>
          <div className="mt-2">
            <Slider {...reverse}>
              {data.map((item) => (
                <div key={item.id} className="px-1 sm:px-2">
                  <Card
                    description={item.description}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    role={item.role}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;