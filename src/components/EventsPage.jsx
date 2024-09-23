// src/components/EventSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Slide, Fade } from 'react-awesome-reveal';
import { GiPolarStar } from "react-icons/gi";
import Idea from './Idea';

// Utility function to generate slug from event title
const createSlug = (title) => title.toLowerCase().replace(/ /g, '-');

// Sample event data
const events = [
    { id: 1, title: "The Entrepreneurship Show 2023", date: "February 27th '23", imgSrc: "path_to_image1" },
   // { id: 2, title: "Navy Visit-2023", date: "March 15th '23", imgSrc: "path_to_image2" },
    { id: 3, title: "FOUNDER'S CAP TRAINING", date: "April 10th '22", imgSrc: "path_to_image3" },
    { id: 4, title: "Game of Drones", date: "April 10th '22", imgSrc: "path_to_image3" },
    { id: 5, title: "E-SUMMIT (TECHPRAVAAH)", date: "April 10th '22", imgSrc: "path_to_image3" },
    { id: 6, title: "BIDWISER (THE MOCK IPL AUCTION)", date: "April 10th '22", imgSrc: "path_to_image3" },
    { id: 7, title: "ACHIEVER’S TALK", date: "April 10th '22", imgSrc: "path_to_image3" },
    


];

const EventCard = ({ id, title, date, imgSrc }) => {
    const slug = createSlug(title); // Generate slug from title

    return (
        <Slide direction="down" cascade>
            <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
            style={{
                border: '1px solid #322d22',
                boxShadow: '20px -10px 100px #282410',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
               
              }}>
                <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
                <div className="bg-black p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-400">{date}</p>
                    <Link to={`/events/${slug}`}>
                        <button className="mt-4 bg-transparent border border-white py-2 px-6 rounded-full">
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </Slide>
    );
};

const EventSection = () => (
    <section className="bg-black py-32 px-4 md:px-8 lg:px-16 w-full">
        <div className="container mx-auto text-center mb-10 max-w-screen-xl">
            <div className="rounded-full px-4 py-1 mb-4 m-auto w-fit" style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}>
                <Fade cascade>
                    <span className="flex items-center gap-2"><GiPolarStar />EVENTS</span>
                </Fade>
            </div>
            <Fade>
                <h1 className="text-4xl md:text-7xl text-white font-bold mt-4">
                    Entrepreneurship Cell <span className="text-[#ffed59]">ABESEC</span>
                </h1>
            </Fade>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl">
            {events.map(event => (
                <EventCard key={event.id} id={event.id} title={event.title} date={event.date} imgSrc={event.imgSrc} />
            ))}
        </div>
        <Idea />
    </section>
);

export default EventSection;
