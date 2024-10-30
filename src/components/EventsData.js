// Import images
import entrepreneurshipShow from '../assets/sa.jpg';
import navyVisit from '../assets/sa.jpg';
import gameOfDrones from '../assets/sa.jpg';
import eSummitTechpravaah from '../assets/sa.jpg';
import bidwiserMockIpl from '../assets/at.png';
import achieversTalk from '../assets/at.png';
import fc from "../assets/fc.jpg"
import tes from "../assets/tes2.jpg"

// Sample event data with imported images
const events = [
    { 
        id: 1, 
        title: "The Entrepreneurship Show 2023", 
        date: "February 27th '23", 
        description: "The Entrepreneurship Show, organized by E-Cell ABESEC, aimed to inspire and educate participants about the startup mindset and culture. TES 1.0 featured Karandeep Singh Vohra, who shared his journey and principles that guided his success, focusing on the foundational aspects of starting a business, overcoming challenges, and effective strategies. TES 2.0 featured Sandeep Jain, the renowned founder of Geeks for Geeks (GFG), as the guest of honor.He also shared their experience of building Geeks for Geeks, offering practical insights and advice for aspiring entrepreneurs. The event followed a talk show with a skilled moderator facilitating an engaging conversation with Speaker. Participants actively engaged in the discussion, asking questions to Speaker, who provided advice, addressing queries related to entrepreneurship and leadership.It promotes a direct exchange of ideas. The Entrepreneurship Show by E-Cell ABESEC not only met its vision but go beyond expectations by delivering an event rich in content, interaction, and inspiration", 
        image: tes
    },
    { 
        id: 2, 
        title: "Navy Visit-2023", 
        date: "March 15th '23", 
        description: "", 
        image: navyVisit 
    },
    { 
        id: 3, 
        title: "FOUNDER'S CAP TRAINING", 
        date: "April 10th '22", 
        description: "A dynamic and empowering event designed to inspire female students with the knowledge and tools needed for entrepreneurial success. The program aimed to enhance women's power within the college by guiding them towards entrepreneurship. It focused on educating participants about Intellectual Property Rights (IPR), ensuring they understand how to protect their innovative ideas with patents, trademarks, and copyrights. It was an engaging experience designed to empower young minds to confidently navigate the startup journey. The session was filled with valuable knowledge and practical advice on protecting intellectual property.Participants praised the event for its engaging format and the invaluable knowledge gained about IPR. Many expressed their confidence in pursuing their entrepreneurial dreams", 
        image: fc
    },
    { 
        id: 4, 
        title: "Game of Drones", 
        date: "April 10th '22", 
        description: "The Game of Drones event was a breathtaking highlight of Tech Pravaah, the Tech Fest of ABESEC. This event showcases the latest advancements in drone technology while giving participants an exciting racing experience. Game of Drones aims to engage tech enthusiasts, encourage innovation, and promote a spirit of competition. The event featured professional drone pilots from Delhi NCR, invited through the Drone Association by Hawai Adda, an alumni startup of ABESEC's incubation centre specializing in drones. Hawai Adda not only sponsored the event but also facilitated the participation of experienced pilots, adding a professional touch to the competition. This event provided attendees with deeper insights into the world of drones and introduced them to the latest technologies.", 
        image: gameOfDrones 
    },
    { 
        id: 5, 
        title: "E-SUMMIT (TECHPRAVAAH)", 
        date: "April 10th '22", 
        description: "E-Cell ABESEC's flagship annual event, the E-Summit, fetched together academics, venture capitalists, and businesspeople to endorse an entrepreneurial mindset through keynote speeches and panel discussions. The event had two tracks: India's Startup Ecosystem 2030 and Government Policies and Tech Startup Challenges. Renowned speakers included Saurabh Jain, Nandan Mishra, Dr. Ajay K. Dr. Garg, Dr. Krishnan Sundararajan, Dr. Nikhil Agarwal, K Sunil Vinod Abrol, and Shekhawat. Networking, financial administration, and business strategy were all important topics of discussion. Inspiring Q&A sessions and networking prospects at the summit's conclusion provided attendees with valuable empire-building insights", 
        image: eSummitTechpravaah 
    },
    { 
        id: 6, 
        title: "BIDWISER (THE MOCK IPL AUCTION)", 
        date: "April 10th '22", 
        description: "The Bid-wiser (Mock IPL Auction) is a pristine event from E-Cell ABES-EC that gives students a one-of-a-kind look at the IPL auction process. The participants, who will be separated into teams that represent IPL franchises, will bid on simulated players that are based on actual IPL players using a budget that has already been set. The event aims to improve participants' tactical thinking, negotiation abilities, and understanding of cricket team management. Sports business awareness, enhanced negotiation skills, teamwork, communication, and financial management knowledge are among the assistances. The event offers certificates, a prize pool of Rs. 1,000, and the chance for the winning team to join in an upcoming E-Cell visit. It is open to all ABES-EC students", 
        image: bidwiserMockIpl 
    },
    { 
        id: 7, 
        title: "ACHIEVER’S TALK", 
        date: "April 10th '22", 
        description: "E-Cell ABES-EC's newest event, The Achiever's Talk, structures one-on-one interactions with well-recognized organizations like GST Noida, Jain shikanji waale, and Anubhav Jain, among others, as well as motivational anecdotes and insights from successful entrepreneurs. The attendees acquired valuable information about overcoming challenges, business strategies, and individual development. Aspiring business owners had the opportunity to interact with industry privileged and network at the event. It came to a close with a Q&A session, which allowed for a lively discussion of ideas and useful advice. In general, Achievers Talk inspired participants and provided real-world advice for achieving entrepreneurial success.", 
        image: achieversTalk 
    },
];

export default events;
