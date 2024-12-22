import React from "react";
import "./Volunteers.css";

const volunteers = [
  { name: "Sahil Kuma Sahu", role: "EVENTS AND PLANNING" },
  { name: "Divyanshu Chaubey", role: "EVENTS AND PLANNING" },
  { name: "Ayush Aggarwal", role: "EVENTS AND PLANNING" },
  { name: "Nitya Singhal", role: "EVENTS AND PLANNING" },
  { name: "Srishti Yadav", role: "EVENTS AND PLANNING" },
  { name: "Shreya Singh", role: "EVENTS AND PLANNING" },
  { name: "Ayush Gautam", role: "EVENTS AND PLANNING" },
  { name: "Sarthak Patel", role: "EVENTS AND PLANNING" },
  { name: "Ayush Katiyar", role: "EVENTS AND PLANNING" },
  { name: "Nishat", role: "EVENTS AND PLANNING" },
  { name: "Satyam Raj Singh", role: "EVENTS AND PLANNING" },
  { name: "Tamanna Garg", role: "EVENTS AND PLANNING" },
  { name: "Ishan Arora", role: "EVENTS AND PLANNING" },
  { name: "Himanya Malik", role: "EVENTS AND PLANNING" },
  { name: "Ayan Pandey", role: "EVENTS AND PLANNING" },
  { name: "Shreya Vishwakarma", role: "EVENTS AND PLANNING" },
  { name: "Divyanka Pandey", role: "EVENTS AND PLANNING" },
  { name: "Vanshika Sharma", role: "EVENTS AND PLANNING" },
  { name: "Asad Khan", role: "MARKETING AND OUTREACH" },
  { name: "Devanshi Srivastava", role: "MARKETING AND OUTREACH" },
  { name: "Kratika Aggarwal", role: "MARKETING AND OUTREACH" },
  { name: "Rishi Raj Singh", role: "MARKETING AND OUTREACH" },
  { name: "Swati Mittal", role: "MARKETING AND OUTREACH" },
  { name: "Amitabh Chaturvedi", role: "MARKETING AND OUTREACH" },
  { name: "Nilesh Suklai", role: "MARKETING AND OUTREACH" },
  { name: "Akash Kumar Jha", role: "FINANCE AND SPONSORSHIP" },
  { name: "Anamika Yadav", role: "FINANCE AND SPONSORSHIP" },
  { name: "Bulbul Singh", role: "FINANCE AND SPONSORSHIP" },
  { name: "Gopal Aggarwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Shobhit Jain", role: "FINANCE AND SPONSORSHIP" },
  { name: "Sumit Mishra", role: "FINANCE AND SPONSORSHIP" },
  { name: "Ridam Baranwal", role: "FINANCE AND SPONSORSHIP" },
  { name: "Aakash Agrairi", role: "FINANCE AND SPONSORSHIP" },
  { name: "Amarjeet Pandey", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Anubhav Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Shivansh Rai", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Lakshit Teotia", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Saloni Singh", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Manya Nigam", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Priya Sharma", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Sanchay Srivastava", role: "DIGITAL AND SOCIAL MEDIA" },
  { name: "Shubham Raj", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Suyash Khare", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Ananya Chauhan", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Shaily Srivastava", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Ankush Kumar", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Preetam Ray", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Shivam Sharma", role: "VISUAL MEDIA AND PRODUCTION" },
  { name: "Devendra Pratap Singh", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Akash Yadav", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Harsh Kumar", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Amit Kumar", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Nandini", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Pratibha", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
  { name: "Jahanvi Pratap", role: "DIGITAL INFRASTRUCTURE AND DEVELOPMENT" },
];

const Volunteers = () => {
  return (
    <div className="volunteers-container">
      <h1 className="volunteers-title">Volunteers 2023-24</h1>
      <div className="volunteers-grid">
        {volunteers.map((volunteer, index) => (
          <div key={index} className="volunteer-card">
            <h2>{volunteer.name}</h2>
            <p className="role">{volunteer.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;