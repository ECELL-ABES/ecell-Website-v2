import { useEffect, useRef } from "react";
import NetworkCards from "./NetworkCards";
import { GiPolarStar } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
import kmc from "../assets/MOU_clg/kmc.jpg";
import mnit from "../assets/MOU_clg/MNIT.png";
import Yukta from "../assets/MOU_clg/YUKTA.jpeg";
import iitd from "../assets/MOU_clg/IIT DELHI.png";
import vgi from "../assets/MOU_clg/VGI.jpeg";
import srcasw from "../assets/MOU_clg/SRCASW.jpeg";

// Dummy data for the cards
const networkData = [
  {
    name: "IIIT Delhi",
    image: "http://iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
    info: "Premier institute in Delhi with a strong focus on innovation and entrepreneurship.",
  },
  {
    name: "Kirori Mal College, DU",
    image: kmc,
    info: "A prestigious college of the University of Delhi, nurturing talent and innovation.",
  },
  {
    name: "MANIT(NIT BHOPAL)",
    image: mnit,
    info: "An institution known for its strong focus on innovation, entrepreneurship, and technical excellence.",
  },
  {
    name: "IIT DELHI",
    image: iitd,
    info: "India's leading institute fostering groundbreaking research and industry partnerships.",
  },
  {
    name: "E-CELL YUKTA ",
    image: Yukta,
    info: "A renowned institution known for academic excellence and technical innovation.",
  },
  {
    name: "VGI",
    image: vgi,
    info: "VGI is known for its advanced research programs and collaborations in engineering.",
  },
  {
    name: "Rajguru College",
    image: srcasw,
    info: "A leading college in Delhi with a vibrant student entrepreneurship community.",
  },
];

function Networking() {
  // Split the data for the two columns
  const firstHalf = networkData.slice(0, Math.ceil(networkData.length / 2));
  const secondHalf = networkData.slice(Math.ceil(networkData.length / 2));

  // Refs for the marquee containers
  const marqueeUpRef = useRef(null);
  const marqueeDownRef = useRef(null);

  // Effect to handle pause on hover
  useEffect(() => {
    const marqueeUp = marqueeUpRef.current;
    const marqueeDown = marqueeDownRef.current;

    const handleMouseEnter = (e) => {
      const container = e.currentTarget;
      const content = container.querySelector(".marquee-content");
      if (content) content.style.animationPlayState = "paused";
    };

    const handleMouseLeave = (e) => {
      const container = e.currentTarget;
      const content = container.querySelector(".marquee-content");
      if (content) content.style.animationPlayState = "running";
    };

    if (marqueeUp) {
      marqueeUp.addEventListener("mouseenter", handleMouseEnter);
      marqueeUp.addEventListener("mouseleave", handleMouseLeave);
    }

    if (marqueeDown) {
      marqueeDown.addEventListener("mouseenter", handleMouseEnter);
      marqueeDown.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (marqueeUp) {
        marqueeUp.removeEventListener("mouseenter", handleMouseEnter);
        marqueeUp.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (marqueeDown) {
        marqueeDown.removeEventListener("mouseenter", handleMouseEnter);
        marqueeDown.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="px-4 py-16 text-white bg-black sm:px-8">
      <div className="flex flex-col items-center gap-10 mx-auto max-w-7xl lg:flex-row">
        {/* Left Section */}
        <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
          <div
            className="px-4 py-1 mb-4 rounded-full w-fit"
            style={{
              backgroundColor: "#141412",
              color: "#ffde59",
              border: "1px solid #26250F",
            }}
          >
            <Fade cascade>
              <span className="flex items-center gap-2">
                <GiPolarStar />
                NETWORKING
              </span>
            </Fade>
          </div>
          <h1 className="mb-4 text-4xl font-semibold">
            Strategic <span className="text-[#ffde59]">Partnerships</span>
          </h1>
          <p className="text-lg text-gray-300">
            Recognizing the power of synergy, E-Cell has forged strategic
            partnerships with premier institutes like IIIT Delhi, KIET, RLAC,
            and IMS Ghaziabad.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            These collaborations enable knowledge exchange, resource sharing,
            and create a vibrant ecosystem for innovation and entrepreneurship
            across institutions.
          </p>
        </div>

        {/* Right Section - Vertical Scrolling Content */}
        <div
          className="relative w-full overflow-hidden lg:w-1/2"
          style={{ height: "550px" }}
        >
          <div className="flex flex-col justify-between h-full gap-4 sm:flex-row">
            {/* First Column - Scrolls Up */}
            <div
              ref={marqueeUpRef}
              className="w-full vertical-marquee-container sm:w-1/2"
            >
              <div className="marquee-content scrolling-up">
                {[...firstHalf, ...firstHalf].map((network, index) => (
                  <NetworkCards
                    key={`up-${index}`}
                    name={network.name}
                    image={network.image}
                    info={network.info}
                  />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-b from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Second Column - Scrolls Down */}
            <div
              ref={marqueeDownRef}
              className="hidden w-full vertical-marquee-container sm:w-1/2 sm:block"
            >
              <div className="marquee-content scrolling-down">
                {[...secondHalf, ...secondHalf].map((network, index) => (
                  <NetworkCards
                    key={`down-${index}`}
                    name={network.name}
                    image={network.image}
                    info={network.info}
                  />
                ))}
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-b from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 z-10 h-16 pointer-events-none bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networking;
