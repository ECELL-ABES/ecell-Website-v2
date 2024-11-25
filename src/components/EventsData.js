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
        description: "The Entrepreneurship Show, the flagship event of E-Cell ABESEC, is a vibrant platform designed to ignite entrepreneurial passion and educate a startup mindset among participants. TES has become synonymous with inspiration, innovation, and invaluable insights, creating an atmosphere where ideas thrive and future leaders are born.TES 1.0 marked an incredible beginning with “Karandeep Singh Vohra” gracing the stage. His captivating story of turning ideas into reality resonated deeply with the audience. Karandeep explored into the essential principles of starting a business, tackling challenges head-on, and crafting effective strategies for a stable success. His insights left attendees motivated and better equipped to take their first entrepreneurial steps.TES 2.0 took the excitement to the next level by featuring the legendary “Sandeep Jain”, founder of Geeks for Geeks (GFG), as the guest of honor. He shared the journey of building one of the most influential platforms for coders and tech enthusiasts. His talk was a perfect guide on turning ideas into reality, filled with useful advice, lessons from his own experiences, and practical tips for future entrepreneurs.Each edition of TES unfolded as an engaging talk show, with a skilled moderator guiding thought-provoking conversations with the speakers. The interactive format encouraged active participation, with attendees asking pressing questions and receiving personalized advice from these accomplished leaders. This direct exchange of ideas and perspectives made the event dynamic and impactful.TES didn’t just meet expectations—it surpassed them, delivering an extraordinary experience brimming with inspiration, knowledge, and meaningful connections. The event created a ripple effect of innovation, empowering students to think big and chase their entrepreneurial dreams.Missed the show this time? Don't worry—TES will be back, bigger and better, with more stories, insights, and opportunities to fuel your entrepreneurial spirit! ", 
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
        description: " E-Cell's flagship annual event, the E-Summit, successfully convened a diverse assembly of academics, venture capitalists, and business leaders, all united in their mission to cultivate a robust entrepreneurial mindset among attendees. Designed with purpose, the event aimed to equip participants with the essential knowledge and invaluable insights required to excel in the ever-evolving startup ecosystem, facilitated through a carefully curated series of engaging keynote speeches and thought-provoking panel discussions. The summit featured two focused tracks: 'India’s Startup Ecosystem 2030,' which delved into future trends and opportunities, and 'Government Policies and Tech Startup Challenges,' which addressed current obstacles and the regulatory landscape facing startups. Esteemed speakers included industry leaders such as Saurabh Jain, Nandan Mishra, Dr. Ajay K. Dr. Garg, Dr. Krishnan Sundararajan, Dr. Nikhil Agarwal, K. Sunil Vinod Abrol, and Shekhawat. Throughout the event, key topics were rigorously explored, including effective networking strategies, financial administration, and strategic business development. Additionally, inspiring Q&A sessions at the conclusion of the summit, along with ample networking opportunities, provided attendees with valuable insights and practical takeaways to empower their entrepreneurial journeys.", 
        image: eSummitTechpravaah 
    },
    { 
        id: 6, 
        title: "BIDWISER (THE MOCK IPL AUCTION)", 
        date: "April 10th '22", 
        description: " The Bid-wiser (Mock IPL Auction) is a prestigious event organized by E-Cell, offering students an insightful glimpse into the IPL auction process. Participants will form teams representing various IPL franchises and strategically bid on simulated players based on real athletes, all within a predetermined budget. This event aims to enhance participants' strategic thinking, negotiation skills, and understanding of cricket team management, while also exploring the dynamics of sports business, teamwork, and financial management. Along with certificates of participation, the winning team will receive a prize pool of Rs. 1,000 and an exclusive opportunity to join an upcoming E-Cell visit, further enriching their experience. All students are invited to participate in this exciting event, whether you are a cricket enthusiast or looking to sharpen your skills in strategy and teamwork. The mock IPL auction promises to be a rewarding opportunity for growth and enjoyment! ", 
        image: bidwiserMockIpl 
    },
    { 
        id: 7, 
        title: "ACHIEVER’S TALK", 
        date: "April 10th '22", 
        description: " E-Cell recently hosted The Achiever's Talk, a distinguished event designed to facilitate meaningful one-on-one interactions with esteemed organizations, including GST Noida, Jain Shikanji Waale, and Anubhav Jain. This interactive platform gave attendees invaluable insights into the entrepreneurial landscape and allowed them to engage with successful business leaders who shared their motivational narratives. Participants gained a deeper understanding of common challenges faced in the industry and explored effective strategies for overcoming these obstacles. The event featured an interactive Q&A session that ignited thoughtful discussions among participants. This format encouraged engagement and provided practical advice tailored to their unique circumstances and aspirations. The exchange of ideas enriched the overall learning experience and fostered intellectual growth. Attendees were inspired and gained essential knowledge, boosting their confidence for their entrepreneurial journeys. Valuable connections were made with participating organizations, offering insights and motivational stories from successful entrepreneurs. Overall, the event underscored the importance of community engagement and knowledge-sharing in supporting emerging entrepreneurs and fostering future collaborations.", 
        image: achieversTalk 
    },
];

export default events;
