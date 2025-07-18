import { useEffect, useRef } from "react"
import NetworkCards from "./NetworkCards"
import { GiPolarStar } from "react-icons/gi"
import { Fade } from "react-awesome-reveal"

// Dummy data for the cards
const networkData = [
  {
    name: "IIIT Delhi",
    image: "http://iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
    info: "Premier institute in Delhi with a strong focus on innovation and entrepreneurship.",
  },
  {
    name: "KIET",
    image: "src/assets/MOU_clg/KIET.jpg",
    info: "KIET is known for its advanced research programs and collaborations in engineering.",
  },
  {
    name: "RLAC",
    image: "src/assets/MOU_clg/RLAC.jpg",
    info: "A leading college in Delhi with a vibrant student entrepreneurship community.",
  },
  {
    name: "IMS Ghaziabad",
    image: "src/assets/MOU_clg/IMS.jpg",
    info: "One of the oldest management institutes in India, known for its diverse alumni network.",
  },
  {
    name: "IIT Bombay",
    image: "src/assets/MOU_clg/Indian_Institute_of_Technology_Bombay_Logo.svg.png",
    info: "India's leading institute fostering groundbreaking research and industry partnerships.",
  },
  {
    name: "Aryabhatta College, DU",
    image: "src/assets/MOU_clg/ARYABHATTA.jpg",
    info: "A distinguished college of the University of Delhi, fostering academic excellence and innovation.",
  },
  {
    name: "Bennett University",
    image: "src/assets/MOU_clg/BENNET UNI.jpg",
    info: "A modern university fostering entrepreneurship and innovation.",
  },
  {
    name: "Delhi Technological University (DTU)",
    image: "src/assets/MOU_clg/DTU.jpg",
    info: "A premier engineering institution excelling in technology and innovation.",
  },
  {
    name: "JSS Academy of Technical Education",
    image: "src/assets/MOU_clg/jss.jpg",
    info: "A renowned institution known for academic excellence and technical innovation.",
  },
  {
    name: "Kirori Mal College, DU",
    image: "src/assets/MOU_clg/kmc.jpg",
    info: "A prestigious college of the University of Delhi, nurturing talent and innovation.",
  },
  {
    name: "KIT, IMR Kolhapur",
    image: "src/assets/MOU_clg/kolhapur.jpg",
    info: "A reputed institute focused on developing skilled leaders in management and technology.",
  },
  {
    name: "MSIT",
    image: "src/assets/MOU_clg/MSIT.jpg",
    info: "An institution known for its strong focus on innovation, entrepreneurship, and technical excellence.",
  },
  {
    name: "Shivaji College, DU",
    image: "src/assets/MOU_clg/SHIVAJI.jpg",
    info: "A prominent college of the University of Delhi, nurturing entrepreneurship and fostering innovation.",
  },
]

function Networking() {
  // Split the data for the two columns
  const firstHalf = networkData.slice(0, Math.ceil(networkData.length / 2))
  const secondHalf = networkData.slice(Math.ceil(networkData.length / 2))

  // Refs for the marquee containers
  const marqueeUpRef = useRef(null)
  const marqueeDownRef = useRef(null)

  // Effect to handle pause on hover
  useEffect(() => {
    const marqueeUp = marqueeUpRef.current
    const marqueeDown = marqueeDownRef.current

    const handleMouseEnter = (e) => {
      const container = e.currentTarget
      const content = container.querySelector(".marquee-content")
      if (content) content.style.animationPlayState = "paused"
    }

    const handleMouseLeave = (e) => {
      const container = e.currentTarget
      const content = container.querySelector(".marquee-content")
      if (content) content.style.animationPlayState = "running"
    }

    if (marqueeUp) {
      marqueeUp.addEventListener("mouseenter", handleMouseEnter)
      marqueeUp.addEventListener("mouseleave", handleMouseLeave)
    }

    if (marqueeDown) {
      marqueeDown.addEventListener("mouseenter", handleMouseEnter)
      marqueeDown.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (marqueeUp) {
        marqueeUp.removeEventListener("mouseenter", handleMouseEnter)
        marqueeUp.removeEventListener("mouseleave", handleMouseLeave)
      }
      if (marqueeDown) {
        marqueeDown.removeEventListener("mouseenter", handleMouseEnter)
        marqueeDown.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div
            className="rounded-full px-4 py-1 mb-4 w-fit"
            style={{ backgroundColor: "#141412", color: "#ffde59", border: "1px solid #26250F" }}
          >
            <Fade cascade>
              <span className="flex items-center gap-2">
                <GiPolarStar />
                NETWORKING
              </span>
            </Fade>
          </div>
          <h1 className="text-4xl font-semibold mb-4">
            Strategic <span className="text-[#ffde59]">Partnerships</span>
          </h1>
          <p className="text-lg text-gray-300">
            Recognizing the power of synergy, E-Cell has forged strategic partnerships with premier institutes like IIIT
            Delhi, KIET, RLAC, and IMS Ghaziabad.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            These collaborations enable knowledge exchange, resource sharing, and create a vibrant ecosystem for
            innovation and entrepreneurship across institutions.
          </p>
        </div>

        {/* Right Section - Vertical Scrolling Content */}
        <div className="w-full lg:w-1/2 relative overflow-hidden" style={{ height: "550px" }}>
          <div className="flex flex-col sm:flex-row justify-between gap-4 h-full">
            {/* First Column - Scrolls Up */}
            <div ref={marqueeUpRef} className="vertical-marquee-container w-full sm:w-1/2">
              <div className="marquee-content scrolling-up">
                {[...firstHalf, ...firstHalf].map((network, index) => (
                  <NetworkCards key={`up-${index}`} name={network.name} image={network.image} info={network.info} />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>

            {/* Second Column - Scrolls Down */}
            <div ref={marqueeDownRef} className="vertical-marquee-container w-full sm:w-1/2 hidden sm:block">
              <div className="marquee-content scrolling-down">
                {[...secondHalf, ...secondHalf].map((network, index) => (
                  <NetworkCards key={`down-${index}`} name={network.name} image={network.image} info={network.info} />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Networking
