import React, { useState } from "react";
import { GiPolarStar } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";


const volunteersData = {
  "2024-2025": [
  { name: "Satyam Raj Singh", role: "EVENTS AND PLANNING" },
  { name: "Sahil Kumar Sahu", role: "EVENTS AND PLANNING" },
  { name: "Ayush Aggarwal", role: "EVENTS AND PLANNING" },
  { name: "Srishti Yadav", role: "EVENTS AND PLANNING" },
  { name: "Shreya Singh", role: "EVENTS AND PLANNING" },
  { name: "Ayush Gautam", role: "EVENTS AND PLANNING" },
  { name: "Ayush Katiyar", role: "EVENTS AND PLANNING" },
  { name: "Nishat", role: "EVENTS AND PLANNING" },
  { name: "Shreya Vishwakarma", role: "EVENTS AND PLANNING" },
  { name: "Divyanka Pandey", role: "EVENTS AND PLANNING" },
  { name: "Asad Khan", role: "MARKETING AND OUTREACH" },
  { name: "Devanshi Srivastava", role: "MARKETING AND OUTREACH" },
  { name: "Rishi Raj Singh", role: "MARKETING AND OUTREACH" },
  { name: "Apurv", role: "MARKETING AND OUTREACH" },
  { name: "Amitabh Chaturvedi", role: "MARKETING AND OUTREACH" },
  { name: "Aakarsh", role: "FINANCE AND SPONSORSHIP" },
  { name: "Bulbul Singh", role: "FINANCE AND SPONSORSHIP" },
  { name: "Gopal Aggarwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Shobhit Jain", role: "FINANCE AND SPONSORSHIP" },
  { name: "Sumit Mishra", role: "FINANCE AND SPONSORSHIP" },
  { name: "Ridam Baranwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Amarjeet Pandey", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Anubhav Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Lakshit Teotia", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Saloni Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Manya Nigam", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Shubham Raj", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Suyash Khare", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Ankush Kumar", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Preetam Ray", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Amit Kumar Gupta", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Devendra Pratap Singh", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Harsh Kumar", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Nandini Goel", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Pratibha Maurya", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Jahanvi Pratap", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Ishan Arora", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },

  ],
  "2025-2026": [
  // MARKETING AND SPONSORSHIP
  { name: "Tanya Mishra", role: "MARKETING AND SPONSORSHIP" },
  { name: "Suyash Dwivedi", role: "MARKETING AND SPONSORSHIP" },
  { name: "Prateek Singh", role: "MARKETING AND SPONSORSHIP" },
  { name: "Arnav Garg", role: "MARKETING AND SPONSORSHIP" },
  { name: "Kashish Mani Tripathi", role: "MARKETING AND SPONSORSHIP" },
  { name: "Mallika Rathi", role: "MARKETING AND SPONSORSHIP" },
  { name: "Parth Srivastava", role: "MARKETING AND SPONSORSHIP" },
  { name: "Anshika Gupta", role: "MARKETING AND SPONSORSHIP" },
  { name: "Aditya Choudhary", role: "MARKETING AND SPONSORSHIP" },
  { name: "Asad Khan", role: "MARKETING AND SPONSORSHIP" },
  { name: "Shobhit", role: "MARKETING AND SPONSORSHIP" },
  { name: "Devanshi Srivastava", role: "MARKETING AND SPONSORSHIP" },
  { name: "Rishi Raj Singh Rajpoot", role: "MARKETING AND SPONSORSHIP" },
  { name: "Bulbul", role: "MARKETING AND SPONSORSHIP" },

  // TECHNICAL
  { name: "Amit Kumar Gupta", role: "TECHNICAL" },
  { name: "Pratibha Maurya", role: "TECHNICAL" },
  { name: "Jhanvi", role: "TECHNICAL" },
  { name: "Harsh Kumar", role: "TECHNICAL" },
  { name: "Preet Chauhan", role: "TECHNICAL" },
  { name: "Deevonika", role: "TECHNICAL" },
  { name: "Deepak", role: "TECHNICAL" },

  // EVENTS AND PLANNING
  { name: "Suhani Gupta", role: "EVENTS AND PLANNING" },
  { name: "Abhinay", role: "EVENTS AND PLANNING" },
  { name: "Aditya Rauniyar", role: "EVENTS AND PLANNING" },
  { name: "Harshita Dubey", role: "EVENTS AND PLANNING" },
  { name: "Anushree Mishra", role: "EVENTS AND PLANNING" },
  { name: "Ashutosh Dev", role: "EVENTS AND PLANNING" },
  { name: "Kriti Kaushik", role: "EVENTS AND PLANNING" },
  { name: "Saurav Tyagi", role: "EVENTS AND PLANNING" },
  { name: "Divyansh", role: "EVENTS AND PLANNING" },
  { name: "Ayush Aggarwal", role: "EVENTS AND PLANNING" },
  { name: "Ayush Katiyar", role: "EVENTS AND PLANNING" },
  { name: "Sahil Sahu", role: "EVENTS AND PLANNING" },

  // SOCIAL MEDIA
  { name: "Ritish", role: "SOCIAL MEDIA" },
  { name: "Anurag Jai Singh", role: "SOCIAL MEDIA" },
  { name: "Aryan Chaudhary", role: "SOCIAL MEDIA" },
  { name: "Mahak Khurana", role: "SOCIAL MEDIA" },
  { name: "Apurv Verma", role: "SOCIAL MEDIA" },
  { name: "Anvita Shukla", role: "SOCIAL MEDIA" },
  { name: "Saloni Singh", role: "SOCIAL MEDIA" },
  { name: "Lakshit", role: "SOCIAL MEDIA" },
  { name: "Manya", role: "SOCIAL MEDIA" },

  // VISUAL MEDIA
  { name: "Aabhas Viswas", role: "VISUAL MEDIA" },
  { name: "Ashish Kashyap", role: "VISUAL MEDIA" },
  { name: "Devansh Dev", role: "VISUAL MEDIA" },
  { name: "Satyam Yadav", role: "VISUAL MEDIA" },
  { name: "Shivani Srivastava", role: "VISUAL MEDIA" },
  { name: "Shreya Palak", role: "VISUAL MEDIA" },
  { name: "Shubham", role: "VISUAL MEDIA" },
],

};

const Volunteers = ({ currentTeam }) => {
  const teamVolunteers = volunteersData[currentTeam] || [];
  const roles = [...new Set(teamVolunteers.map((v) => v.role))];
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4 md:px-20 text-center">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div
          style={{ backgroundColor: "#141412", color: "#ffde59", border: "1px solid #26250F" }}
          className="rounded-full px-4 py-1 mb-4 w-fit m-auto"
        >
          <Fade cascade>
            <span className="flex items-center gap-2 text-xl">
              <GiPolarStar />VOLUNTEERS
            </span>
          </Fade>
        </div>
        <h1 className="text-5xl font-bold">
          Volunteers <span className="text-[#ffed59]">{currentTeam}</span>
        </h1>
      </div>

      {/* Role Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {roles.map((role, index) => (
          <button
            key={index}
            onClick={() => setSelectedRole(role)}
            className={`px-6 py-3 rounded-full shadow-md transition-all duration-300 ${
              selectedRole === role
                ? "bg-yellow-500 text-black font-bold"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {role}
          </button>
        ))}
        {selectedRole && (
          <button
            onClick={() => setSelectedRole(null)}
            className="px-6 py-3 rounded-full shadow-md transition-all duration-300 bg-red-600 text-white hover:bg-red-500"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Volunteers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamVolunteers
          .filter((volunteer) => !selectedRole || volunteer.role === selectedRole)
          .map((volunteer, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center border border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">{volunteer.name}</h2>
              <p className="text-yellow-500 text-sm font-medium">{volunteer.role}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Volunteers;