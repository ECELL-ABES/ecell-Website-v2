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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdMargin } from 'react-icons/md'


function Home() {
    return (
        <div>
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
                    <div style={{ backgroundColor: '#0D0D0D', boxShadow: '0 0 2000px 20px rgba(255, 222, 89, 0.6)' }} className="flex items-center justify-center rounded-lg py-2 px-4">
                            <input style={{ backgroundColor: '#0D0D0D' }} type="email" placeholder="example@gmail.com" className="p-3 text-white focus:outline-none sm:w-[20rem]" />
                            <button style={{ backgroundColor: '#ffde59' }} className="text-black font-semibold px-5 py-1 sm:py-2 rounded-lg">Let's Connect</button>
                        </div>

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
                    <div className="p-6 rounded-lg h-[10rem]" style={{ backgroundColor: '#131412' }}>
                    <div className="flex items-center mb-4">
        {/* Inline SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="mr-4"
          style={{ width: '40px', height: '40px' }}
        >
          <path
            fill="#ffde59" // Updated fill color
            d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
          />
        </svg>
        <h2 className="text-xl font-semibold">Mindset</h2>
      </div>
      <p>
        Inspire and motivate students to pursue their entrepreneurial dreams.
      </p>
    </div>
                    </Slide>
                    <Slide direction='up'>
      <div className="p-6 rounded-lg h-[10rem]" style={{ backgroundColor: '#131412' }}>
        <div className="flex items-center mb-4">
          {/* Inline SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="mr-4"
            style={{ width: '40px', height: '40px' }}
          >
            <path
              fill="#ffde59" // Set the fill color
              d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold">Mission</h2>
        </div>
        <p>
          Inspire and motivate students to pursue their entrepreneurial dreams.
        </p>
      </div>
    </Slide>
                    <Slide direction="right">
      <div className="p-6 rounded-lg h-[10rem]" style={{ backgroundColor: '#131412' }}>
        <div className="flex items-center mb-4">
          {/* Inline SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="mr-4"
            style={{ width: '40px', height: '40px' }}
          >
            <path
              fill="#ffde59" // Set the fill color
              d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
            />
          </svg>
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
