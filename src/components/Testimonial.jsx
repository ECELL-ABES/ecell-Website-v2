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
        "E-Cell ABESEC will always hold a special place in my heart. From a chaotic first event to conducting the first-ever drone show and reaching NEC 2023 finals, the journey was rewarding. Grateful for the support of my team and invaluable guidance from Mahendra Sir and Prabansh Sir. These experiences taught me resilience and teamwork, essential for future success.",
      imgSrc: dg,
      name: "Divyanshyu gupta",
      role: "Mentor",
    },
    {
      id: 2,
      description:
        "E-Cell ABESEC shaped my journey from volunteer to Tech-Ops Coordinator. Launching the first live website for the cell was a proud moment. Guided by Mahendra Sir and Prabansh Sir, this experience was transformative, helping me grow professionally and personally, while creating lasting memories with an exceptional team.",
      imgSrc: np,
      name: "Neelansh Pandey",
      role: "Former Tech-Ops Coordinator, E-CELL ABESEC",
    },
    {
      id: 3,
      description:
        "E-Cell ABESEC helped me grow from volunteer to Social Media Coordinator. Key events, like collaborating with Sandeep Sir from GeeksforGeeks, shaped our journey. Guided by Mahendra Sir and Prabansh Sir, I built lifelong memories and relationships, contributing to both personal and professional development.",
      imgSrc: sa,
      name: "Shoaib Ahmad",
      role: "Former Social Media Coordinator, E-CELL ABESEC",
    },
    {
      id: 4,
      description:
        "E-Cell ABESEC defined my college journey from Events Volunteer to Vice President. Guided by Mahendra Sir and Prabansh Bhaiya, I led impactful events and increased female participation by 30%. This journey built my confidence, honed leadership skills, and gave me a clear purpose for the future. I am proud of the legacy we've built.",
      imgSrc: ka,
      name: "Kamakshi Agarwal",
      role: "Former Vice president",
    },
    {
      id: 5,
      description:
        "E-Cell ABESEC transformed my college experience. From being Treasurer to mentoring, it shaped my leadership. As the co-founder of Know Your Colleges, I attribute much of my growth to E-Cell's ecosystem. It fosters innovation and teamwork, laying a strong foundation for success in future endeavors. I encourage students to embrace this opportunity.",
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

        <div className="slider-container -mx-4 sm:mx-0 md:ml-10 overflow-visible">
          <Slider {...settings}>
            {data.map((item) => (
              <div key={item.id} className="px-2 sm:px-4">
                <Card
                  description={item.description}
                  imgSrc={item.imgSrc}
                  name={item.name}
                  role={item.role}
                />
              </div>
            ))}
          </Slider>
          <div className="mt-4">
            <Slider {...reverse}>
              {data.map((item) => (
                <div key={item.id} className="px-2 sm:px-4">
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