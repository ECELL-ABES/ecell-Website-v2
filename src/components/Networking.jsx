import React from 'react';
import NetworkCards from './NetworkCards';
import { GiPolarStar } from "react-icons/gi";
import { Fade } from 'react-awesome-reveal';

// Dummy data for the cards
const networkData = [
    
    {
        name: "IIT Delhi",
        image: "src/assets/MOU clg/iitDelhi.png",
        info: "A hub of intellectual curiosity,  creativity, and innovation, nurturing the next generation of leaders, visionaries and entrepreneurs." 
        },
    { 
        name: "IIIT Delhi", 
        image: "http://iiitd.ac.in/sites/default/files/images/logo/logo.jpg", 
        info: "Premier institute in Delhi with a strong focus on innovation and entrepreneurship." 
    },
   { 
        name: "RLAC", 
        image: "src/assets/MOU clg/RLAC.jpg", 
        info: "A leading college in Delhi with a vibrant student entrepreneurship community." 
    },
    { 
        name: "IMS Ghaziabad", 
        image: "src/assets/MOU clg/imsG.jpg", 
        info: "One of the oldest management institutes in India, known for its diverse alumni network." 
    },
    { 
        name: "IIT Bombay", 
        image: "src/assets/MOU clg/Indian_Institute_of_Technology_Bombay_Logo.svg.png", 
        info: "India's leading institute fostering groundbreaking research and industry partnerships." 
    },
    
   {
        name: "Aryabhatta College, DU",
        image: "src/assets/MOU clg/ARYABHATTA.jpg",
        info: "A distinguished college of the University of Delhi, fostering academic excellence and innovation."
   },
   {
        name: "Bennett University",
        image: "src/assets/MOU clg/BENNET UNI.jpg",
        info: "A modern university fostering entrepreneurship and innovation."
   },
   {
        name: "Delhi Technological University (DTU)",
        image: "src/assets/MOU clg/DTU.jpg",
        info: "A premier engineering institution excelling in technology and innovation."
   },
   {
        name: "JSS Academy of Technical Education",
        image: "src/assets/MOU clg/jss.jpg",
        info: "A renowned institution known for academic excellence and technical innovation."
   },
   {
        name: "Kirori Mal College, DU",
        image: "src/assets/MOU clg/kmc.jpg",
        info: "A prestigious college of the University of Delhi, nurturing talent and innovation."
   },
   {
        name: "KIT, IMR Kolhapur",
        image: "src/assets/MOU clg/kolhapur.jpg",
        info: "A reputed institute focused on developing skilled leaders in management and technology."
   },
   {
    name: "MSIT",
    image: "src/assets/MOU clg/MSIT.jpg",
    info: "An institution known for its strong focus on innovation, entrepreneurship, and technical excellence."
   },

   {
    name: "Shivaji College, DU",
    image: "src/assets/MOU clg/SHIVAJI.jpg",
    info: "A prominent college of the University of Delhi, nurturing entrepreneurship and fostering innovation."
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
                Recognizing the power of synergy, E-Cell has forged strategic partnerships with premier institutes like IIT Delhi , KMC , RLAC , IIIT Delhi , and IMS Ghaziabad.
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
