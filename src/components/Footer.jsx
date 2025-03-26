import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/ecell.svg'
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Footer() {
    return (
        <div>
            <div className="bg-black text-white py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4">Page</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#ffde59] font-bold" : "text-zinc-400 hover:text-[#ffde59]"}>Home</NavLink></li>
                            <li><NavLink to="/teams" className={({ isActive }) => isActive ? "text-[#ffde59] font-bold" : "text-zinc-400 hover:text-[#ffde59]"}>Team</NavLink></li>
                            <li><NavLink to="/events" className={({ isActive }) => isActive ? "text-[#ffde59] font-bold" : "text-zinc-400 hover:text-[#ffde59]"}>Events</NavLink></li>
                            <li><NavLink to="/contactus" className={({ isActive }) => isActive ? "text-[#ffde59] font-bold" : "text-zinc-400 hover:text-[#ffde59]"}>Contact</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <NavLink to='/'>
                            <div className="flex items-center mb-4">
                                <img src={Logo} alt="E-cell logo" className="mr-2 w-12" />
                            </div>
                        </NavLink>
                        <p className="mb-4">Experience financial transformation like never before with Fintec.</p>
                        <div className="flex space-x-2">
                            <a href="https://www.linkedin.com/company/ecell-abes-ec/mycompany/" className="text-[#ffde59] flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-800 transition duration-300 ease-in-out hover:bg-[#ffde59] hover:text-white hover:border-[#ffde59]"><PiLinkedinLogoBold className="text-2xl" /></a>
                            <a
                                href="https://www.instagram.com/ecell_abesec/"
                                className="text-[#ffde59] flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-800 transition duration-300 ease-in-out hover:bg-[#ffde59] hover:text-white hover:border-[#ffde59]"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>

                        </div>
                    </div>

                    <div className='Footerdiv'>
                        {/* Future content (e.g., newsletter subscription) can be added here */}
                    </div>
                </div>
                <hr style={{ width: '20rem', margin: '2rem auto 10px auto' }} />
                <div className="text-center text-zinc-500">
                    © 2024 E-Cell. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;
