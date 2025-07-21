import React from 'react';
import { GiPolarStar } from "react-icons/gi";
import sir from '../assets/sir.png'
import { Fade, Slide } from 'react-awesome-reveal';

const Mentor = () => {
    return (
        <div className="text-white py-12 px-4">
            {/* Section Heading */}
            <div className="text-center mb-8">
                <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className="rounded-full px-4 py-1 mb-4 w-fit m-auto">
                    <Fade cascade>
                        <span className="flex items-center gap-2">
                            <GiPolarStar /> Mentor’s Message
                        </span>
                    </Fade>
                </div>
                <h1 className="text-4xl font-bold">Words from Our Faculty Mentor</h1>
            </div>

            {/* Message + Image Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto px-6">
                {/* Mentor Text */}

                <div className="rounded-xl p-6 shadow-lg border border-[#26250F]" style={{ backgroundColor: '#131412' }}>
                    <p className="text-lg leading-relaxed text-zinc-300 text-justify">
                        "Entrepreneurship is key to job creation and economic growth — especially in countries like ours where nurturing startups and technopreneurs is urgent. At E-CELL, we foster an entrepreneurial mindset through student-led initiatives like E-Summit, workshops, meetups, and more. I invite all students to explore, engage, and innovate with us."
                    </p>
                    <p className="mt-4 text-right font-semibold text-[#ffde59]">
                        – Mahendra Kumar Gupta
                        <br />
                        <span className="text-sm text-zinc-400">Faculty Mentor, E-Cell</span>
                    </p>
                </div>


                {/* Mentor Image */}

                <img
                    src={sir}
                    alt="Faculty Mentor"
                    className="rounded-2xl w-64 h-64 object-cover border border-[#ffde59] shadow-lg"
                    style={{ aspectRatio: '1 / 1' }}
                />

            </div>
        </div>
    );
};

export default Mentor;
