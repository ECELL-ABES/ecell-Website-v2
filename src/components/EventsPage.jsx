import React from 'react';
import { Link } from 'react-router-dom';
import { Slide, Fade } from 'react-awesome-reveal';
import { GiPolarStar } from "react-icons/gi";
import Idea from './Idea';

import TEC from "../assets/tes.png";
import GOD from "../assets/god.webp";
import Tech from "../assets/techpravaah.webp";
import At from "../assets/at.webp";
import fc from "../assets/fc.webp";
import bid from "../assets/bid.webp"
import nv from '../assets/nv.webp';  
import erk from '../assets/eureka.webp';
import tes3 from '../assets/tes3.0.webp';
import bizz from '../assets/bizz25.png';
import squid from '../assets/SQUID.png';
import zonals from '../assets/bannerimage iitr event.webp'
import keshav from "../assets/keshavjha.png"

// Utility function to generate a URL-friendly slug from event title
const createSlug = (title) => title.toLowerCase().replace(/ /g, '-');

// Placeholder image for events with missing images
const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image";

// Sample event data
const events = [
    { id:13, title:"The Entrepreneurship Show 4.0", date:"February 21st, 2026" , imgSrc: keshav},
    { id:12, title:"IDEASTORM 2026 – Delhi NCR Zonal", date:"December 13th'25 " , imgSrc: zonals},
    { id:11, title:"SQUID GAME 2025", date:"November 24th,25th,26th'25" , imgSrc: squid},
    { id: 10 , title:"BizzMantra 2025", date: "May 31st '25", imgSrc: bizz },
    { id: 9 , title:"The Entrepreneurship Show 2024", date: "November 30th '24", imgSrc: tes3 },
    { id: 8, title: "Eureka", date: "September 10th '22", imgSrc: erk },
    { id: 1, title: "The Entrepreneurship Show 2023", date: "February 27th '23", imgSrc: TEC },
    { id: 2, title: "Navy Visit-2023", date: "March 15th '23", imgSrc: nv },
    { id: 3, title: "FOUNDER'S CAP TRAINING", date: "April 10th '22", imgSrc: fc },
    { id: 4, title: "Game of Drones", date: "November 18th '22", imgSrc: GOD },
    { id: 5, title: "E-SUMMIT (TECHPRAVAAH)", date: "November 19th '22", imgSrc: Tech },
    { id: 6, title: "BIDWISER (THE MOCK IPL AUCTION)", date: "Jan 18th '24", imgSrc: bid },
    { id: 7, title: "ACHIEVER’S TALK", date: "November 18th '22", imgSrc: At },
];

// EventCard Component: Displays individual event information
const EventCard = ({ id, title, date, imgSrc }) => {
    const slug = createSlug(title); // Generate slug from title
    const displayImage = imgSrc || placeholderImage; // Use placeholder image if imgSrc is empty

    return (
        <Slide direction="down" cascade>
            <div
                className="overflow-hidden text-white transition-transform duration-300 ease-in-out transform bg-gray-800 rounded-lg shadow-lg hover:scale-105"
                style={{
                    border: '1px solid #322d22',
                    boxShadow: '20px -10px 100px #282410',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    
                }}
                aria-label={`${title} event card`}
            >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <img
                        src={displayImage}
                        alt={title || 'Event Image'}
                        className="absolute top-0 left-0 object-cover w-full h-full"
                    />
                </div>
                {/* Card Content */}
                <div className="p-4 bg-black">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-400">{date || 'Date not available'}</p>
                    <Link to={`/events/${slug}`} aria-label={`Read more about ${title}`}>
                        <button
                            className="px-6 py-2 mt-4 transition-colors duration-300 bg-transparent border border-white rounded-full hover:bg-white hover:text-black"
                        >
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </Slide>
    );
};


// EventSection Component: Displays the list of events in a grid
const EventSection = () => (
    <section className="w-full px-4 py-32 bg-black md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="container max-w-screen-xl mx-auto mb-10 text-center">
            <div
                className="px-4 py-1 m-auto mb-4 rounded-full w-fit"
                style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
            >
                <Fade cascade>
                    <span className="flex items-center gap-2">
                        <GiPolarStar aria-hidden="true" /> EVENTS
                    </span>
                </Fade>
            </div>
            <Fade>
                <h1 className="mt-4 text-4xl font-bold text-white md:text-7xl">
                    Entrepreneurship Cell <span className="text-[#ffed59]">ABESEC</span>
                </h1>
            </Fade>
        </div>

        {/* Events Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl=">
            {events.map(event => (
                <EventCard key={event.id} id={event.id} title={event.title} date={event.date} imgSrc={event.imgSrc} />
            ))}
        </div>

        {/* Additional Idea Component */}
        <Idea />
    </section>
);

export default EventSection;
