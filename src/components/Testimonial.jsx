import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dg from "../assets/dg.png";
import np from "../assets/np.jpg";
import sa from "../assets/sa.jpg";
import kaa from "../assets/kaa.jpg";
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
      imgSrc: kaa,
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
        <div className="main">
          <div
            className="slider"
            style={{  
            "--width": "350px",
            "--height": "300px",
            "--quantity": "5",
          }}
          >
            <div className="list">
              <div className="item" style={{"--position": "1"}}>
                <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[0].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[0].imgSrc}
                        alt={`Profile image of ${data[0].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[0].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[0].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "2"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[1].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[1].imgSrc}
                        alt={`Profile image of ${data[1].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[1].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[1].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "3"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[2].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[2].imgSrc}
                        alt={`Profile image of ${data[2].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[2].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[2].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "4"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[3].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[3].imgSrc}
                        alt={`Profile image of ${data[3].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[3].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[3].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "5"}}>
              <div className="w-full mx-0 flex-shrink-0 ">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[4].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[4].imgSrc}
                        alt={`Profile image of ${data[0].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[4].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[4].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* the list div closess here */}
          </div> {/** the slider div closes here  */}
          {/*  forward slider ends here  */}


          {/* the reverse slider starts here . */}
          <div
            className="reverse-slider"
            style={{  
            "--width": "350px",
            "--height": "300px",
            "--reverse": "true",
            "--quantity": "5",
          }}
          reverse = {true} 
          >
            <div className="list">
              <div className="item" style={{"--position": "1"}}>
                <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[0].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[0].imgSrc}
                        alt={`Profile image of ${data[0].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[0].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[0].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "2"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[1].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[1].imgSrc}
                        alt={`Profile image of ${data[1].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[1].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[1].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "3"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[2].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[2].imgSrc}
                        alt={`Profile image of ${data[2].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[2].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[2].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "4"}}>
              <div className="w-full mx-0 flex-shrink-0">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[3].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[3].imgSrc}
                        alt={`Profile image of ${data[3].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[3].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[3].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{"--position": "5"}}>
              <div className="w-full mx-0 flex-shrink-0 ">
                  <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-[#0C0D0B]  h-full flex flex-col justify-between shadow-lg">
                    <p className="mb-6 text-sm sm:text-base line-clamp-6 sm:line-clamp-none leading-relaxed text-gray-300">
                      {data[4].description}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full mr-3"
                        src={data[4].imgSrc}
                        alt={`Profile image of ${data[0].name}`}
                      />
                      <div>
                        <p className="text-base font-medium text-white">
                          {data[4].name}
                        </p>
                        <p className="text-sm text-gray-400">{data[4].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* the list div  of reverse slider  closess here */}
          </div> {/** the reverse slider div closes here  */}






        </div> {/* main class ends here*/}

      </div>
    </div>
  );
}

export default Testimonial;
