import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/ecell.svg'
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";

function Footer() {
    return (
        <div>
            <div className="bg-black text-white py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link to='/'>
                            <div className="flex items-center mb-4">
                                <img src={Logo} alt="E-cell logo" className="mr-2 w-12" />
                            </div>
                        </Link>
                        <p className="mb-4">Experience financial transformation like never before with FIntec.</p>
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
                    <div>
                        <h3 className="text-lg font-bold mb-4">Page</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" style={{ color: '#ffde59' }}>Home</Link></li>
                            <li><Link to="/events" className="text-zinc-400 hover:text-[#ffde59]">Events</Link></li>
                            <li><Link to="/contactus" className="text-zinc-400 hover:text-[#ffde59]">Contact</Link></li>
                            <li><Link to="/teams" className="text-zinc-400 hover:text-[#ffde59]">Team</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Let's Connect</h3>
                        <form>
                            <input type="email" placeholder="name@email.com" className="w-full p-2 mb-4 bg-zinc-300 text-zinc-800 rounded-md hover:outline-none outline-none" />
                            <button
                                type="submit"
                                className="w-full p-2 bg-[#ffde59] text-black font-semibold rounded-md transition duration-300 ease-in-out hover:bg-[#e6c84a]"
                            >
                                Subscribe
                            </button>

                        </form>
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

export default Footer