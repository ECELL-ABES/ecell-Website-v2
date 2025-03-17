import React, { useState } from 'react';
// import Activities from '../components/Activities'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
// import Networking from '../components/Networking'
import Aboutus from '../components/Aboutus'
import Idea from '../components/Idea'
import { Fade, Slide } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import president from '../assets/president.png'
import vmc from '../assets/vmc.png'
import vp from '../assets/vp.png'
import sc from '../assets/sc.png'
import t from '../assets/t.png'
import to from '../assets/to.png'
import ec from '../assets/ec.png'
import md from '../assets/md.jpg'
import dhr from '../assets/dga.jpg'

import pt from '../assets/pt.jpg'
import ag from '../assets/ag2.png'
import nk from '../assets/nk.jpg'
import dg from '../assets/dg.png'
import np from '../assets/np.jpg'
import sa from '../assets/sa.jpg'
import sm from '../assets/sm.jpg'
import kaa from '../assets/kaa.jpg'


import sf from '../assets/sf.jpg'
import am from '../assets/am.jpg'
import sk from '../assets/sk.jpg'
import vb from '../assets/vb.jpg'
import am2 from '../assets/am2.jpg'
import ts from '../assets/ts.jpg'
import ig from '../assets/ig.jpg'
import ak from '../assets/ak.jpg'
import dk from '../assets/dk.jpg'
import rk from '../assets/rk.jpg'
import sd from '../assets/sp.jpg'
import sg from '../assets/sg.jpg'

import adg from '../assets/adg.jpg'
import nz from '../assets/nz.jpg'
import ys from '../assets/ys.jpg'
import ssy from '../assets/ssy.jpg'
import as from '../assets/as.jpg'

//create a single component for all the cards.
import Volunteers from "../components/Volunteers";

function Teams() {
    const [currentTeam, setCurrentTeam] = useState('2024-2025'); // Default to current executives

    return (
        <div>
            <div className=" bg-black text-white flex flex-col" style={{ minHeight: '70vh' }}>
                {/* <Navbar /> */}
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <Fade cascade="true">
                        <h1 className="text-4xl md:text-6xl font-bold mb-2">
                            <span className='text-[#ffde59]'>Empowering</span> Future Entrepreneurs
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">
                            with Right <span className='text-[#ffde59]'>Environment</span>
                        </h2>
                        <p className="text-zinc-400 mb-8">
                            Discover Our Story, Mission, and Commitment to Streamlining Project Workflows
                        </p>
                    </Fade>
                </div>
            </div>
            {/* =============================================================================== */}
            <Aboutus />
            <div className="text-white py-12 px-4">
                <div className="text-center mb-8">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit m-auto">
                        <Fade cascade>
                            <span className='flex items-center gap-2 text-xl'><GiPolarStar />TEAM</span>
                        </Fade>
                    </div> 
                    <h1 className="text-5xl font-bold">Introduce our <span className='text-[#ffed59]'>Team</span></h1>
                </div>

                {/* Team Selection Navbar */}
                <div className="text-center mb-8">
                    <button
                        className={`px-4 py-2 mx-2 rounded-full ${currentTeam === '2024-2025' ? 'bg-[#ffed59] text-black' : 'bg-gray-700 text-white'}`}
                        onClick={() => setCurrentTeam('2024-2025')}
                    >
                        Team 2024-2025
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 rounded-full ${currentTeam === '2022-2023' ? 'bg-[#ffed59] text-black' : 'bg-gray-700 text-white'}`}
                        onClick={() => setCurrentTeam('2022-2023')}
                    >
                        Team 2022-2023
                    </button>
                </div>

                {/* Conditional Rendering of Teams */}
                {currentTeam === '2024-2025' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        {/* Add the details of the 2022-2023 team here */}
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={ec} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Aditya Pandey</h3>
                            <p className="text-[#ffed59]">President</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://www.instagram.com/adityapandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/aditya-pandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sg} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Suyash Gupta</h3>
                        <p className="text-[#ffed59]">Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/isuyash.g/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/isuyashgupta/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sf} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sayed Haneef</h3>
                        <p className="text-[#ffed59]">Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_sayed.haneef_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sayed-mohd-haneef-b12155217/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={am} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Anuj Mishra</h3>
                        <p className="text-[#ffed59]">TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/anuj_mishra_05/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/> 
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/anujmishra05/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sk} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sohail Khan</h3>
                        <p className="text-[#ffed59]">TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_sohxilkhxn/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sohail-khan-187969208/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vb} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Vinit Baishkiyar</h3>
                        <p className="text-[#ffed59]">Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/vini.t281/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/vinit-baishkiyar-220627202/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={am2} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Anshika Mishra</h3>
                        <p className="text-[#ffed59]">Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/anshika_mishra_0190/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/anshika-mishra-252849259/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ts} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Tanishka Saharawat</h3>
                        <p className="text-[#ffed59]">Social Media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/saharawat_tanishka/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/tanishka-saharawat-88251a238/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ig} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ishan Garg</h3>
                        <p className="text-[#ffed59]">Marketing Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/gargishan_15/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ishan-garg-19a622257/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ak} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ashish Kumar</h3>
                        <p className="text-[#ffed59]">Marketing Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ashishkumar0407/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ashish-kumar-406245237/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={dk} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Divyam Kumar</h3>
                        <p className="text-[#ffed59]">Filmography Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/divyam.kumar._/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/divyam-kumar-b7406a258/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={rk} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Rajnish Kumar</h3>
                        <p className="text-[#ffed59]">Filmography Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_originality_matters_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/rajnish-kumarom/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sd} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sona Poddar</h3>
                        <p className="text-[#ffed59]">Student Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/sonaa.30_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sona-poddar-087812282/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    
                        {/* Add other team members from 2022-2023 here */}
                        
                        {/* Add other team members from 2024-2025 here */}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        {/* Add the details of the 2022-2023 team */}
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={president} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Yash Mishra</h3>
                            <p className="text-[#ffed59]">President</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://www.instagram.com/yashprime02/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/yash-mishra-b2290220a/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vp} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayushmaan Kushwaha</h3>
                        <p className="text-[#ffed59]">Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushman_kushwaha25/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayushman-kushwaha-19a938227/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={t} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sarthak Gupta</h3>
                        <p className="text-[#ffed59]">Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/sarthak_pvt193/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sarthak-gupta-116358238/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={to} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayush Tomer</h3>
                        <p className="text-[#ffed59]">TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushtomer_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayu219/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ec} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Aditya Pandey</h3>
                        <p className="text-[#ffed59]">Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/adityapandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/aditya-pandey0502/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={dhr} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Dhruv Ghangwani</h3>
                        <p className="text-[#ffed59]">Social Media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/dhruv_gangwani/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/dhruv-gangwani-93a261249/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={md} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Abhay Bansal</h3>
                        <p className="text-[#ffed59]">Marketing Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://instagram.com/baniya_guy/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/abhaybansal1/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vmc} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shikhar Shaurya</h3>
                        <p className="text-[#ffed59]">Filmography Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/shikhar_shaurya/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shikhar-shaurya-62b0bb1bb/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sc} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Akshita Singh</h3>
                        <p className="text-[#ffed59]">Student Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_akshita_.singhh/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/akshita-singh-801a44258/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                        {/* Add other team members from 2022-2023 here */}
                    </div>
                )}
            </div>
            <div className="text-white py-12 px-4">
                <div className="text-center mb-8">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className="rounded-full px-4 py-1 mb-4 w-fit m-auto">
                        <Fade cascade>
                            <span className='flex items-center gap-2 text-xl'><GiPolarStar />MENTORS</span>
                        </Fade>
                    </div>
                    <h1 className="text-5xl font-bold">Meet Our <span className='text-[#ffed59]'>Mentors</span></h1>
                </div>
                {currentTeam === '2024-2025' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        {/* Add the details of the 2022-2023 team here */}
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={md} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Abhay Bansal</h3>
                            <p className="text-[#ffed59]">Former Marketing Coordinator</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://instagram.com/baniya_guy/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/abhaybansal1/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vmc} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shikhar Shaurya</h3>
                        <p className="text-[#ffed59]">Former Visual Media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/shikhar_shaurya/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shikhar-shaurya-62b0bb1bb/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Dhruv Gangwani</h3>
                        <p className="text-[#ffed59]">Former Social media Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/dhruv_gangwani/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/dhruv-gangwani-93a261249/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src="https://placehold.co/150x150" alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayush Rai</h3>
                        <p className="text-[#ffed59]">Former Events Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={adg} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Aditya Garg</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/adityagarg_26/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/aditya-garg-854256211/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={nz} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Naman Zadoo</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_namanzadoo/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/naman-zadoo-677331228/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={t} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Sarthak Gupta</h3>
                        <p className="text-[#ffed59]">Former Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/sarthak_pvt193/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/sarthak-gupta-116358238/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={to} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayush Tomer</h3>
                        <p className="text-[#ffed59]">Former TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushtomer_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayu219/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={vp} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Ayushmaan Kushwaha</h3>
                        <p className="text-[#ffed59]">Former Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/ayushman_kushwaha25/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/ayushman-kushwaha-19a938227/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    
                        {/* Add other team members from 2022-2023 here */}
                        
                        {/* Add other team members from 2024-2025 here */}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        {/* Add the details of the 2022-2023 team */}
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={dg} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Divyanshu Gupta</h3>
                            <p className="text-[#ffed59]">Former Event Coordinator</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://www.instagram.com/di_we_an_shoe.2002/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/divyanshu-gupta-691310202/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ys} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Yash Sarin</h3>
                        <p className="text-[#ffed59]">Former Treasurer</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_rudth/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/yash-sarin-84185b221/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={kaa} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Kamakshi Agarwal</h3>
                        <p className="text-[#ffed59]">Former Vice President</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/kamakshiii_20/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/-kamakshi20/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sa} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shoaib Ahmed</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/shoaibahmed6433/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shoaib-ahmed-367916214/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sm} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shubhansh Mahawar</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/iam_thesuperbloke/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shubhansh-mahawar-5a822420b/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ssy} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shashank Shekhar Yadav</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.linkedin.com/in/shashank-shekhar-yadav-a088b81ba/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.instagram.com/shashankshekharyad/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={np} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Neelansh Pandey</h3>
                        <p className="text-[#ffed59]">Former TechOps Coordinator</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_neelansh.__/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/neelansh-pandey-81348b21b/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={as} alt="example" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Anshika Singh</h3>
                        <p className="text-[#ffed59]"></p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/annxiieee/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram/>
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shikhar-shaurya-62b0bb1bb/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold/>
                            </a>
                        </div>
                    </div>
                        {/* Add other team members from 2022-2023 here */}
                    </div>
                )}
            </div>
        {/* Alumni Section */}
        <div className="text-white py-12 px-4">
                <div className="text-center mb-8">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className="rounded-full px-4 py-1 mb-4 w-fit m-auto">
                        <Fade cascade>
                            <span className='flex items-center gap-2 text-xl'><GiPolarStar />ALUMNI TEAM</span>
                        </Fade>
                    </div>
                    <h1 className="text-5xl font-bold">Meet Our <span className='text-[#ffed59]'>Alumni</span></h1>
                </div>
                {currentTeam === '2024-2025' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={pt} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Prabhansh Tripathi</h3>
                        <p className="text-[#ffed59]">SDE AT ACCENTURE <br></br> (Founder of E-CELL ABESEC) </p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/prats0507_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/prabhansh-tripathi-a15532190/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ag} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Anuroopa Goswami</h3>
                        <p className="text-[#ffed59]">Project Associate At Indian Institute of Technology Indore <br></br> (For Project Swayam Run by MeiTy(Govt. of India))</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={nk} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Naman Kumar</h3>
                        <p className="text-[#ffed59]">PG, Kingston University  UK <br></br> (Former Tech-Ops Coordinator)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/namankumar1234nk/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/naman-kumar-1062681b2/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={president} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Yash Mishra</h3>
                            <p className="text-[#ffed59]">SDE at Euodias Technologies <br></br> (Former President)</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://www.instagram.com/yashprime02/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/yash-mishra-b2290220a/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                            <img src={dg} alt="Team Member" className="mb-4 rounded-full w-[15rem] " />
                            <h3 className="text-3xl font-semibold">Divyanshu Gupta</h3>
                            <p className="text-[#ffed59]">Data Analyst at Armstrong Capital and Financial Services <br></br> (Former Executive Mentor)</p>
                            <div className="flex space-x-2 mt-4 justify-center">
                                <a target='_blank' href="https://www.instagram.com/di_we_an_shoe.2002/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <FaInstagram/>
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/divyanshu-gupta-691310202/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                    <PiLinkedinLogoBold/>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={np} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Neelansh Pandey</h3>
                        <p className="text-[#ffed59]">Software Engineer at Ksolves India Ltd <br></br> (Former Tech-Ops Coordinator)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/_neelansh.__/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/neelansh-pandey-81348b21b/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sa} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shoaib Ahmad</h3>
                        <p className="text-[#ffed59]">Commercial Projects Representative at Lutron Electronics <br></br> (Former Social Media Coordinator)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/shoaibahmed6433/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shoaib-ahmed-367916214/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    {/* Alumni 8 */}
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={sm} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Shubhansh Mahawar</h3>
                        <p className="text-[#ffed59]">UI/UX Designer at Goldenflitch <br></br> (Former Social media Mentor)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/iam_thesuperbloke/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/shubhansh-mahawar-5a822420b/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={kaa} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Kamakshi Agarwal</h3>
                        <p className="text-[#ffed59]">Business Analyst  at Gemini Solutions <br></br> (Former Vice President)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/kamakshiii_20/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://linkedin.com/in/-kamakshi20/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    </div>
                    
                    
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-background">
                        <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={pt} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Prabhansh Tripathi</h3>
                        <p className="text-[#ffed59]">SDE AT ACCENTURE <br></br> (Founder of E-CELL ABESEC) </p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/prats0507_/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/prabhansh-tripathi-a15532190/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={ag} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Anuroopa Goswami</h3>
                        <p className="text-[#ffed59]">Project Associate At Indian Institute of Technology Indore <br></br> (For Project Swayam Run by MeiTy(Govt. of India))</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-[1rem] text-center bg-card py-10 rounded-lg shadow-md">
                        <img src={nk} alt="Alumni" className="mb-4 rounded-full w-[15rem]" />
                        <h3 className="text-3xl font-semibold">Naman Kumar</h3>
                        <p className="text-[#ffed59]">PG, Kingston University  UK <br></br> (Former Tech-Ops Coordinator)</p>
                        <div className="flex space-x-2 mt-4 justify-center">
                            <a target='_blank' href="https://www.instagram.com/namankumar1234nk/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <FaInstagram />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/naman-kumar-1062681b2/" className="text-[#ffde59] text-xl hover:text-primary-foreground">
                                <PiLinkedinLogoBold />
                            </a>
                        </div>
                    </div>
                    </div>
                )}



            </div>


            
            <Volunteers />
            



            <Testimonial />
            {/* <Idea /> */}

            {/* <Footer /> */}
        </div>
    )
}

export default Teams
