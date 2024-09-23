// src/components/EventDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import events from './EventsData';


// Utility function to generate slug from event title
const createSlug = (title) => title.toLowerCase().replace(/ /g, '-');

const EventDetail = () => {
    const { slug } = useParams();  // Get the slug from the route

    // Find event based on the slug
    const event = events.find(event => createSlug(event.title) === slug);

    if (!event) {
        return <div className="text-center text-white">Event not found</div>;
    }

    return (
        <div className="container mx-auto p-8 text-white">
      {/* Event Title */}
      <div className="bg-black p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      </div>

      {/* Event Image */}
      <div className="mt-8 flex justify-center">
  <img
    src={event.image}
    alt={event.title}
    className="w-full sm:w-11/12 md:w-10/12 lg:w-4/5 xl:w-3/4 rounded-lg shadow-lg"
  />
</div>


      {/* Event Description */}
      <div className="p-6 mt-8 mx-auto rounded-lg shadow-lg max-w-5xl">
        <p className="text-gray-400 mb-4">{event.date}</p>
        <p className="px-12">{event.description}</p>
      </div>
    </div>
    );
};

export default EventDetail;
