import React from 'react'
import Activities from '../components/Activities'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Networking from '../components/Networking'
import ScrollProgress from '../components/ScrollProgress'
import { Fade, Slide } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";
import Idea from '../components/Idea'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        
        toast.success("Thank you for connecting with us!");

        setTimeout(() => {
            setSubmitted(true);
            setEmail(''); 
        }, 500); 
    };
    return (
        <div>
             <ToastContainer />
            {/* <ScrollProgress /> */}
            <div className=" bg-black text-white flex flex-col" style={{ minHeight: '80vh' }}>
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <div style={{ backgroundColor: '#141412', color: '#FFDE59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4">
                        <Fade cascade>
                            <span className='flex items-center gap-2'><GiPolarStar /> From Ideas to Imprint</span>
                        </Fade>
                    </div>
                   
                    <Fade cascade="true">
                        <h1 className="text-4xl md:text-6xl font-bold mb-2">
                            <span style={{ color: '#FFDE59' }}>Welcome</span> <span>To</span>
                        </h1>
                        <h2 style={{ color: '#ffde59' }} className="text-4xl md:text-6xl font-bold mb-4">Entrepreneurship Cell</h2>
                        <p className="text-zinc-400 mb-8">ABES Engineering College, Ghaziabad</p>
                        <form onSubmit={handleFormSubmit} style={{ backgroundColor: '#0D0D0D' }} className="flex items-center justify-center rounded-lg py-2 px-4">
                            <input 
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="example@gmail.com"
                                required
                                className="p-3 text-white focus:outline-none sm:w-[20rem]"
                                style={{ backgroundColor: '#0D0D0D' }}
                            />
                            <button type="submit" style={{ backgroundColor: '#ffde59' }} className="text-black font-semibold px-5 py-1 sm:py-2 rounded-lg">
                                Let's Connect
                            </button>
                        </form>
                        {submitted && (
                            <p className="text-zinc-400 mt-4">Thank you for connecting with us!</p>
                        )}
                    </Fade>
                </div>
            </div>
            {/* =============================================================================== */}
            <div className=" text-white py-12 px-4">
                <div className="text-center mb-8">
                    <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit  m-auto">
                        <Fade cascade>
                            <span className='flex items-center gap-2'><GiPolarStar /> About Us</span>
                        </Fade>
                    </div>
                    <h1 className="text-4xl font-bold">Who We Are</h1>
                    <p className="mt-4 max-w-6xl mx-auto">
                        We are the Entrepreneurship Cell ABES Engineering College, a group run by students with the mission of promoting entrepreneurship among students and the general public. We think that being an entrepreneur involves more than just starting a firm; it also involves adding value, resolving issues, and having a good influence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 ">
                    <Slide direction="left">
                        <div className="p-6 rounded-lg h-[10rem] " style={{ backgroundColor: '#131412' }}>
                            <div className="flex items-center mb-4">
                                <img alt="mindset" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Mindset</h2>
                            </div>
                            <p>
                                Embrace a mindset of creativity, risk-taking, innovation, and learning from mistakes.
                            </p>
                        </div>
                    </Slide>
                    <Slide direction='up'>
                        <div className=" p-6 rounded-lg h-[10rem]" style={{ backgroundColor: '#131412' }}>
                            <div className="flex items-center mb-4">
                                <img alt="mission" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Mission</h2>
                            </div>
                            <p>
                                Inspire and motivate students to pursue their entrepreneurial dreams.
                            </p>
                        </div>
                    </Slide>
                    <Slide direction="right">
                        <div className=" p-6 rounded-lg h-[10rem]" style={{ backgroundColor: '#131412' }}>
                            <div className="flex items-center mb-4">
                                <img alt="vision" src="https://placehold.co/40x40" className="mr-4" />
                                <h2 className="text-xl font-semibold">Vision</h2>
                            </div>
                            <p>
                                Create a vibrant and dynamic entrepreneurial culture on campus and beyond.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>

            <Activities />
            <Networking />
            <Testimonial />
            <Idea />

        </div>
    )
}

export default Home