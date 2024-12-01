import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dg from "../assets/dg.png";
import np from "../assets/np.jpg";
import sa from "../assets/sa.jpg";
import ka from "../assets/ka.jpg";
import t from "../assets/t.png";
import { DiGithubAlt } from "react-icons/di";

function Testimonial() {
  

  const data = [
    {
      id: 1,
      description:
        "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting a drone show and reaching NEC 2023 finals. Guided by Mahendra Sir and Prabansh Sir, it fostered growth, teamwork, and unforgettable memories.",
      imgSrc: dg,
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
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">
            Testimonials About Us
          </h2>
        </div>

        {/* <div className="slider-container mx-0  sm:mx-0 md:ml-2 overflow-visible">
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
        </div> */}

        {/*  ---------- forward slider starts here --------- */}
        <div
          className="slider"
          style={{
            "--width": "300px",
            "--height": "320px",
            "--quantity": data.length,
          }}
        >
          <div className="list">
            {data.map((testimonial, index) => (
              <div
                className="item"
                style={{ "--position": index + 1 }}
                key={testimonial.id}
              >
                <div className="w-[350px] mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B] h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {testimonial.description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={testimonial.imgSrc}
                        alt={`Profile image of ${testimonial.name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  ---------- forward  slider closes here --------- */}

        {/*  ---------- reverse slider starts here --------- */}
        <div
          className="reverse-slider"
          style={{
            "--width": "300px",
            "--height": "320px",
            "--quantity": data.length,
          }}
        >
          <div className="list">
            {data.map((testimonial, index) => (
              <div
                className="item"
                style={{ "--position": index + 1 }}
                key={testimonial.id}
              >
                <div className="w-[350px] mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B] h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {testimonial.description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={testimonial.imgSrc}
                        alt={`Profile image of ${testimonial.name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------- reverse slider ends here ----------- */}
      </div>
    </div>
  );
}

export default Testimonial;
