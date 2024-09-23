import React from 'react';
import NetworkCards from './NetworkCards';
import { GiPolarStar } from "react-icons/gi";
import { Fade } from 'react-awesome-reveal';

// Dummy data for the cards
const networkData = [
    { 
        name: "IIIT Delhi", 
        image: "http://iiitd.ac.in/sites/default/files/images/logo/logo.jpg", 
        info: "Premier institute in Delhi with a strong focus on innovation and entrepreneurship." 
    },
    { 
        name: "KIET", 
        image: "https://www.collegegyani.com/upload/kiet_logo.png", 
        info: "KIET is known for its advanced research programs and collaborations in engineering." 
    },
    { 
        name: "RLAC", 
        image: "https://via.placeholder.com/150", 
        info: "A leading college in Delhi with a vibrant student entrepreneurship community." 
    },
    { 
        name: "IMS Ghaziabad", 
        image: "https://via.placeholder.com/150", 
        info: "One of the oldest management institutes in India, known for its diverse alumni network." 
    },
    { 
        name: "IIT Bombay", 
        image: "https://via.placeholder.com/150", 
        info: "India's leading institute fostering groundbreaking research and industry partnerships." 
    },
    { 
        name: "BITS Pilani", 
        image: "https://via.placeholder.com/150", 
        info: "A premier institute with a strong emphasis on startups and innovation." 
    },
];

function Networking() {
    return (
        <div className="bg-black text-white p-8">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div 
                className="rounded-full px-4 py-1 mb-4 w-fit" 
                style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
            >
                <Fade cascade>
                    <span className="flex items-center gap-2">
                        <GiPolarStar />NETWORKING
                    </span>
                </Fade>
            </div>
            <h1 className="text-4xl font-semibold mb-4">Strategic Partnerships</h1>
            <p className="text-lg">
                Recognizing the power of synergy, E-Cell has forged strategic partnerships with premier institutes like IIIT Delhi, KIET, RLAC, and IMS Ghaziabad.
            </p>
        </div>

        {/* Right Section - Scrolling Content */}
        <div className="w-full lg:w-1/2 relative overflow-hidden fade-area" style={{ height: '550px' }}>
            <div className="flex flex-col sm:flex-row justify-between">
                {/* First Column - Scrolls Up */}
                <div className="marquee marquee-up">
                    <div className="marquee-content">
                        {networkData.map((network, index) => (
                            <NetworkCards 
                                key={index}
                                name={network.name} 
                                image={network.image} 
                                info={network.info} 
                            />
                        ))}
                        {networkData.map((network, index) => (
                            <NetworkCards 
                                key={`repeat-${index-1}`}
                                name={network.name} 
                                image={network.image} 
                                info={network.info} 
                            />
                        ))}
                    </div>
                </div>

                {/* Second Column - Scrolls Down */}
                <div className="marquee marquee-down">
                    <div className="marquee-content">
                        {networkData.map((network, index) => (
                            <NetworkCards 
                                key={index}
                                name={network.name} 
                                image={network.image} 
                                info={network.info} 
                            />
                        ))}
                        {networkData.map((network, index) => (
                            <NetworkCards 
                                key={`repeat-${index}`}
                                name={network.name} 
                                image={network.image} 
                                info={network.info} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );

}


export default Networking;
