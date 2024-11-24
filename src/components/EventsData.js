// Import images
import entrepreneurshipShow from '../assets/sa.jpg';
import navyVisit from '../assets/sa.jpg';
import gameOfDrones from '../assets/sa.jpg';
import eSummitTechpravaah from '../assets/sa.jpg';
import bidwiserMockIpl from '../assets/at.png';
import achieversTalk from '../assets/at.png';
import fc from "../assets/fc.jpg";
import tes from "../assets/tes2.jpg";
import eureka from "../assets/eureka.jpg";


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
        description: "The Training Program was an electrifying and empowering event tailored exclusively for the talented and ambitious female students. The program was designed to help young women with the knowledge, confidence, and practical tools required to embark on a successful entrepreneurial success. With a core focus on innovation and leadership, the event aimed to amplify women's influence within the college community by inspiring them to dream big and turn their business ideas into reality.One of the key highlights of the program was its in-depth sessions on “Intellectual Property Rights (IPR)”, making them understand the critical importance of protecting their innovative ideas through patents, trademarks, and copyrights. Real-life examples, interactive discussions, and expert advice made the learning experience relatable.The atmosphere was charged with enthusiasm as participants explored the possibilities of expanding their business ideas. From getting to know the startup ecosystem to gaining clarity on safeguarding their ideas, the program offered a clear approach to navigating the challenges of starting a business. Feedback from attendees was overwhelmingly positive, with many describing the event as a game-changer. They appreciated the hands-on approach, real-world insights, and the unwavering support offered by mentors throughout the session. For many, it was more than just a learning experience—it was a boost of confidence and inspiration to take their first steps as future leaders and innovators. The Founder's Cap Training Program stood as a celebration of women's potential, a beacon of empowerment, and a launchpad for entrepreneurial dreams, leaving every participant motivated to rewrite the rules and carve out their unique success stories.Missed this incredible experience? Stay tuned and be ready to join us for the next empowering session! ", 
        image: fc
    },
    { 
        id: 4, 
        title: "Game of Drones", 
        date: "April 10th '22", 
        description: "Game of Drones: At Tech Pravaah, ABESEC’s annual tech fest, the 'Game of Drones' event was a thrilling display of top-notch drone technology and high-speed racing. It drew in both tech fans and students, giving them an exciting look at the world of drones and the amazing progress being made. With intense races and impressive aerial tricks, 'Game of Drones' brought innovation to life in a really engaging way.The event was all about fostering innovation and a competitive edge among the participants, featuring experienced drone pilots from around Delhi NCR. These pros, invited by the Drone Association and organized through Hawai Adda—an alumni startup from ABESEC’s incubation center—really raised the bar with their skills. Hawai Adda didn’t just sponsor the event; they also made sure the best pilots were there, which made the whole thing even more exciting. At 'Game of Drones', people got to see how drones can be used in all sorts of ways, from taking cool photos and making movies to helping out in farming and shipping. The event also gave students a chance to meet experts, learn more about the tech, and maybe even spark an interest in a career in this exciting area.Everyone who took part in the event really enjoyed it. Many said they learned a lot about drone technology and felt inspired to explore the field more. The Game of Drones wasn't just a competition; it was a chance to discover new things, get inspired, and connect with others who love drones. If you didn’t make it this time, no worries—join us next time at Tech Pravaah for an amazing experience!", 
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
     { 
        id: 8, 
        title: "Eureka!", 
        date: "September 28th '24", 
        description: "E-Cell ABES-EC's newest event, The Achiever's Talk, structures one-on-one interactions with well-recognized organizations like GST Noida, Jain shikanji waale, and Anubhav Jain, among others, as well as motivational anecdotes and insights from successful entrepreneurs. The attendees acquired valuable information about overcoming challenges, business strategies, and individual development. Aspiring business owners had the opportunity to interact with industry privileged and network at the event. It came to a close with a Q&A session, which allowed for a lively discussion of ideas and useful advice. In general, Achievers Talk inspired participants and provided real-world advice for achieving entrepreneurial success.", 
        image: eureka
    },
];

export default events;
