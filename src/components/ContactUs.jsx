import React, { useState, useCallback } from "react";
import Map from "../assets/map.png";
import { GiPolarStar } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    }, [formData]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white pt-32 px-6">
            {/* Heading Section */}
                    <div className="container mx-auto text-center mb-10 max-w-screen-xl">
                        <div
                            className="rounded-full px-4 py-1 mb-4 m-auto w-fit"
                            style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
                        >
                            <Fade cascade>
                                <span className="flex items-center gap-2">
                                    <GiPolarStar aria-hidden="true" /> CONTACT US
                                </span>
                            </Fade>
                        </div>
                        <Fade>
                        <h1 className="text-5xl font-bold">Reach Us <span className='text-[#ffed59]'>Here</span></h1>
                        </Fade>
                    </div>
            {/* Contact Section */}
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between p-10 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-xl shadow-2xl">
                <div className="mb-10 md:mb-0 md:mr-12 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-6 text-yellow-400">Get In Touch</h1>
                    <p className="text-gray-300 leading-relaxed">
                        Need assistance or have questions? Don't hesitate to reach out to us. Our team is happy to help.
                    </p>
                </div>
                
                {/* Form */}
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Email Fields */}
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
                        {/* Message Field */}
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
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Contact Info & Map Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mt-16 w-full max-w-5xl px-6">
                {/* Contact Info */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-5">
                        <span className="text-3xl">📧</span>
                        <div>
                            <p className="text-lg font-semibold">Email</p>
                            <p className="text-gray-400">ecell@abes.ac.in</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5">
                        <span className="text-3xl">💬</span>
                        <div>
                            <p className="text-lg font-semibold">Social</p>
                            <p className="text-gray-400">@ecellabsec</p>
                        </div>
                    </div>
                </div>
                {/* Map Section */}
                <div className="relative w-full md:w-[400px] h-[280px] rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-950">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>
                    <img src={Map} alt="Location Map" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-5 py-2 rounded-lg text-sm font-medium text-white">
                        📍 ABES Engineering College, Ghaziabad
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
