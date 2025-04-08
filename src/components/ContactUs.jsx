import React, { useState, useCallback } from "react";
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

  const [formStatus, setFormStatus] = useState(""); // To display submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log("Form Submitted:", formData);
      setFormStatus("Your message has been sent successfully!"); // Success message

      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    },
    [formData]
  );

  const position = [28.6341, 77.4456]; // Coordinates for ABES Engineering College

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pt-32 px-6">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-10 max-w-screen-xl">
        <div
          className="rounded-full px-4 py-1 mb-4 m-auto w-fit"
          style={{
            backgroundColor: "#141412",
            color: "#ffde59",
            border: "1px solid #26250F",
          }}
        >
          <Fade cascade>
            <span className="flex items-center gap-2">
              <GiPolarStar aria-hidden="true" /> CONTACT US
            </span>
          </Fade>
        </div>
        <Fade>
          <h1 className="text-5xl font-bold">
            Reach Us <span className="text-[#ffed59]">Here</span>
          </h1>
        </Fade>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between p-10 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-xl shadow-2xl">
        <div className="mb-10 md:mb-0 md:mr-12 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6 text-yellow-400">
            Get In Touch
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Need assistance or have questions? Don't hesitate to reach out to
            us. Our team is happy to help.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>

          {formStatus && (
            <div className="mt-4 text-green-500 text-center">{formStatus}</div>
          )}
        </div>
      </div>

      {/* Contact Info & Interactive Map Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mt-16 w-full max-w-5xl px-5">
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-5">
            <AiOutlineMail className="text-5xl text-white" />
            <div>
              <p className="text-lg font-semibold">Email</p>
              <a
                href="mailto:ecell@abes.ac.in"
                className="text-gray-400 hover:text-blue-500"
              >
                ecell@abes.ac.in
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <AiOutlineInstagram className="text-5xl text-white" />
            <div>
              <p className="text-lg font-semibold">Instagram</p>
              <a
                href="https://www.instagram.com/ecell_abesec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500"
              >
                @ecell_absec
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <AiOutlineWhatsApp className="text-5xl text-white" />
            <div>
              <p className="text-lg font-semibold">WhatsApp</p>
              <a
                href="https://whatsapp.com/channel/0029VaEzRcf84Om7lps30D2F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500"
              >
                Join on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <AiOutlineYoutube className="text-5xl text-white" />
            <div>
              <p className="text-lg font-semibold">YouTube</p>
              <a
                href="https://www.youtube.com/@E-CELL_ABESEC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500"
              >
                E-Cell ABSEC
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900">
          <MapContainer
            center={position}
            zoom={15}
            className="w-full h-full rounded-xl"
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
  );
}

export default ContactUs;
