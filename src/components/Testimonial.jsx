import React from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { GiPolarStar } from "react-icons/gi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dg from "../assets/dg.webp";
import founder from "../assets/founder.jpg";
import president from "../assets/president.webp";
import np from "../assets/np.jpg";
import sa from "../assets/sa.jpg";
import kaa from "../assets/kaa.webp";
import t from "../assets/t.webp";
import { DiGithubAlt } from "react-icons/di";

const testimonialData = [
  {
    id: 1,
    description:
      "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting a drone show and reaching NEC 2023 finals. Guided by Mahendra Sir and Prabansh Sir, it fostered growth, teamwork, and unforgettable memories.",
    imgSrc: dg,
    name: "Divyanshyu Gupta",
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
      "E-Cell ABESEC holds a special place in my heart, from chaotic first events to conducting an E-SUMMIT, reaching NEC 2023 finals, and achieving AIR 27. Guided by Mahendra Sir and Prabhansh Sir, it fostered growth and teamwork.",
    imgSrc: president,
    name: "Yash Mishra",
    role: "Former NEC Lead and President E-CELL ABESEC",
  },
  {
    id: 6,
    description:
      "Founding E-CELL ABESESC was a journey of vision, perseverance, and teamwork. With Mahendra Sir's guidance, we built a platform to foster innovation and inspire future entrepreneurs.",
    imgSrc: founder,
    name: "Prabhansh Tripathi",
    role: "Founder",
  },
]

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className="bg-[#141412] rounded-xl p-6 flex flex-col items-center text-center min-h-[250px] h-auto w-[350px] border border-[#26250F] hover:border-[#ffde59] mx-4 my-2 justify-between shadow-lg">
      {/* Feedback Text */}
      <p className="text-gray-300 mt-2 mb-4">{body}</p>

      {/* User Info */}
      <div className="flex items-center mt-auto space-x-3 text-left">
        <img src={img || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full border border-[#ffde59]" />
        <div>
          <h3 className="text-lg font-semibold text-[#ffde59]">{name}</h3>
          <p className="text-sm text-gray-400">{username}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonial() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Split testimonials into two rows for the marquee
  const halfLength = Math.ceil(testimonialData.length / 2)
  const firstRow = testimonialData.slice(0, halfLength)
  const secondRow = testimonialData.slice(halfLength)

  return (
    <div className="w-full bg-black py-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#ffde5920] via-transparent to-transparent opacity-20"></div>

      {/* Testimonials Section Header */}
      <div
        className="flex flex-col items-center mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div
          variants={titleVariants}
          className="rounded-full px-4 py-1 mb-4 w-fit bg-[#141412] border border-[#26250F]"
        >
          <span className="flex items-center gap-2 text-[#ffde59]">
            <GiPolarStar />
            TESTIMONIALS
          </span>
        </div>
        <h2 variants={titleVariants} className="text-4xl sm:text-5xl font-semibold text-center text-white">
          Testimonials <span className="text-[#ffde59]">About Us</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* First Row (left to right) */}
        <div className="marquee-container">
          <div className="marquee">
            {[...firstRow, ...firstRow].map((item, index) => (
              <ReviewCard
                key={`first-row-${index}`}
                img={item.imgSrc}
                name={item.name}
                username={item.role}
                body={item.description}
              />
            ))}
          </div>
        </div>

        {/* Second Row (right to left) */}
        <div className="marquee-container mt-4">
          <div className="marquee reverse">
            {[...secondRow, ...secondRow].map((item, index) => (
              <ReviewCard
                key={`second-row-${index}`}
                img={item.imgSrc}
                name={item.name}
                username={item.role}
                body={item.description}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </div>
  )
}

export default Testimonial
