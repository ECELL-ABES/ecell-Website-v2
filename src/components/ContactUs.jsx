import { useState, useCallback } from "react";
import { GiPolarStar } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai"; // Import white icons

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [35, 45],
  iconAnchor: [17, 42],
  popupAnchor: [0, -36],
});

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [formStatus, setFormStatus] = useState(""); // To display submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
  }, []);

  const position = [28.6341, 77.4456]; // Coordinates for ABES Engineering College

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-black text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-10 md:mb-12 max-w-4xl">
        <div
          className="rounded-full px-4 py-1.5 mb-4 m-auto w-fit shadow-md"
          style={{
            backgroundColor: "#141412",
            color: "#ffde59",
            border: "1px solid #26250F",
          }}
        >
          <Fade cascade>
            <span className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <GiPolarStar aria-hidden="true" className="text-yellow-400" /> CONTACT US
            </span>
          </Fade>
        </div>
        <Fade>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Reach Us <span className="text-[#ffed59]">Here</span>
          </h1>
        </Fade>
      </div>

      <div className="w-full max-w-5xl space-y-10 md:space-y-12">
        {/* Main Contact Section: Intro + Form */}
        <div className="w-full flex flex-col md:flex-row items-stretch justify-between p-6 sm:p-8 md:p-10 bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl gap-8 md:gap-12">
          {/* Introductory Content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-yellow-400">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Need assistance or have questions? Don&apos;t hesitate to reach out to
              us. Our team is happy to help.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:max-w-md bg-gray-800/90 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-700/80">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-200"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition duration-200"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none h-32 transition duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out shadow-md hover:shadow-yellow-500/20"
              >
                Send Message
              </button>
            </form>

            {formStatus && (
              <div className="mt-4 text-green-500 text-center font-medium">{formStatus}</div>
            )}
          </div>
        </div>

        {/* Contact Info & Interactive Map Section */}
        <div className="w-full bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact Details Grid */}
            <div className="flex flex-col justify-between space-y-4 sm:space-y-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Connect With Us
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Find us across our official communication channels and social platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <a
                  href="mailto:ecell@abes.ac.in"
                  className="group flex items-center p-4 rounded-xl bg-gray-800/70 border border-gray-700/60 hover:border-yellow-500/50 hover:bg-gray-800 transition duration-300 space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gray-900/80 text-yellow-400 group-hover:scale-110 transition duration-300 shrink-0">
                    <AiOutlineMail className="text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors truncate">
                      ecell@abes.ac.in
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ecell_abesec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl bg-gray-800/70 border border-gray-700/60 hover:border-pink-500/50 hover:bg-gray-800 transition duration-300 space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gray-900/80 text-pink-400 group-hover:scale-110 transition duration-300 shrink-0">
                    <AiOutlineInstagram className="text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Instagram
                    </p>
                    <p className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors truncate">
                      @ecell_abesec
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://whatsapp.com/channel/0029VaEzRcf84Om7lps30D2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl bg-gray-800/70 border border-gray-700/60 hover:border-green-500/50 hover:bg-gray-800 transition duration-300 space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gray-900/80 text-green-400 group-hover:scale-110 transition duration-300 shrink-0">
                    <AiOutlineWhatsApp className="text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors truncate">
                      Join on WhatsApp
                    </p>
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@E-CELL_ABESEC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl bg-gray-800/70 border border-gray-700/60 hover:border-red-500/50 hover:bg-gray-800 transition duration-300 space-x-4"
                >
                  <div className="p-3 rounded-lg bg-gray-900/80 text-red-400 group-hover:scale-110 transition duration-300 shrink-0">
                    <AiOutlineYoutube className="text-2xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      YouTube
                    </p>
                    <p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors truncate">
                      E-Cell ABESEC
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="relative w-full h-[320px] sm:h-[350px] lg:h-full min-h-[300px] lg:min-h-[350px] rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 isolate z-0">
              <MapContainer
                center={position}
                zoom={15}
                className="w-full h-full rounded-xl"
                style={{ width: "100%", height: "100%" }}
                zoomControl={true}
                scrollWheelZoom={true}
                dragging={true}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="ABES Engineering College, Ghaziabad"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    <span className="font-semibold text-lg">
                      ABES Engineering College
                    </span>
                    <br />
                    Ghaziabad, India
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
