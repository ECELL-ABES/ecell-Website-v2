import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal"
import Testimonial from "../components/Testimonial"
import Aboutus from "../components/Aboutus"
import Volunteers from "../components/Volunteers"
import {teamData , sectionData} from "../components/DataTeam"
import { FaInstagram } from "react-icons/fa6"
import { PiLinkedinLogoBold } from "react-icons/pi"
import { GiPolarStar } from "react-icons/gi"


function Teams() {
  const [currentTeam, setCurrentTeam] = useState("2024-2025")
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-black text-white mt-40 flex flex-col" >
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
          <Fade cascade="true">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-[#ffde59]">{sectionData.hero.title1.split(" ")[0]}</span>{" "}
              {sectionData.hero.title1.split(" ").slice(1).join(" ")}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {sectionData.hero.title2.split("Environment")[0]} <span className="text-[#ffde59]">Environment</span>
            </h2>
            <p className="text-zinc-400 mb-8">{sectionData.hero.description}</p>
          </Fade>
        </div>
      </div>

      {/* About Us Section */}
      <Aboutus />

      {/* Team Section */}
      <div
        className={`text-white py-12 px-4 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <SectionHeader badge={sectionData.team.badge} title={sectionData.team.title} />

        {/* Team Selection Navbar */}
        <div className="text-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 ${currentTeam === "2024-2025" ? "bg-[#ffed59] text-black" : "bg-gray-700 text-white hover:bg-gray-600"}`}
            onClick={() => setCurrentTeam("2024-2025")}
          >
            Team 2024-2025
          </button>
        </div>

        {/* Team Members */}
        <TeamSection members={teamData[currentTeam].executives} />
      </div>

      {/* Mentors Section */}
      <div
        className={`text-white py-12 px-4 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <SectionHeader badge={sectionData.mentors.badge} title={sectionData.mentors.title} />
        <TeamSection members={teamData[currentTeam].mentors} />
      </div>

      {/* Alumni Section */}
      <div
        className={`text-white py-12 px-4 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <SectionHeader badge={sectionData.alumni.badge} title={sectionData.alumni.title} />
        <TeamSection members={teamData[currentTeam].alumni} />
      </div>

      {/* Additional Sections */}
      <Volunteers />
      <Testimonial />
    </div>
  )
}

export default Teams

// import TeamMemberCard from "./TeamMemberCard"

export const TeamSection = ({ members }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  )
}





export const SectionHeader = ({ badge, title }) => {
  return (
    <div className="text-center mb-8">
      <div
        style={{ backgroundColor: "#141412", color: "#ffde59", border: "1px solid #26250F" }}
        className="rounded-full px-4 py-1 mb-4 w-fit m-auto"
      >
        <Fade cascade>
          <span className="flex items-center gap-2 text-xl">
            <GiPolarStar />
            {badge}
          </span>
        </Fade>
      </div>
      <h1 className="text-5xl font-bold">
        {title.split(" ").map((word, index) =>
          word === "Team" || word === "Mentors" || word === "Alumni" ? (
            <span key={index} className="text-[#ffed59]">
              {word}{" "}
            </span>
          ) : (
            <span key={index}>{word} </span>
          ),
        )}
      </h1>
    </div>
  )
}


export const TeamMemberCard = ({ member }) => {
  return (
    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="mb-4 rounded-full w-[15rem] object-cover aspect-square"
      />
      <h3 className="text-3xl font-semibold">{member.name}</h3>
      <p className="text-[#ffed59]">{member.role}</p>
      {member.description && <p className="text-zinc-400 mt-2 text-sm">{member.description}</p>}
      <div className="flex space-x-2 mt-4 justify-center">
        {member.instagram && (
          <a
            target="_blank"
            href={member.instagram}
            className="text-[#ffde59] text-xl hover:text-primary-foreground hover:scale-110 transition-transform"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        )}
        {member.linkedin && (
          <a
            target="_blank"
            href={member.linkedin}
            className="text-[#ffde59] text-xl hover:text-primary-foreground hover:scale-110 transition-transform"
            rel="noreferrer"
          >
            <PiLinkedinLogoBold />
          </a>
        )}
      </div>
    </div>
  )
}
