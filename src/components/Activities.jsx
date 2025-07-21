import React from 'react'
import '../App.css'
import { Slide, Fade } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";
import AchievementCarousel from "./AchievementCarousel";
import tes3 from "../assets/tes3convrted.webp";
import tes2 from "../assets/tes2.webp";
import yugantra25 from "../assets/yugantra25.webp";
import iiitD25 from "../assets/iiitD25.webp";
import nec25 from "../assets/nec25.webp";
import tes3a from "../assets/tes3a.webp";
import tes3b from "../assets/tes3b.webp";
import tes3c from "../assets/tes3c.webp";
import nec24 from "../assets/iitb.jpg"
import eurekamb from "../assets/eurekamb.jpg";


const images3 = [nec25, nec24];
const images1 = [tes3, tes2, tes3a , tes3b, tes3c];
const images2 = [yugantra25, iiitD25];


function Activities() {
    return (
        <div>
            <div className="bg-black text-white p-20 max-sm:p-8">

                {/* Acitvity - 1 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />NATIONAL RECOGNITION</span>
                            </Fade>
                        </div>
                        <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
                            <Fade cascade>
                                <span>National</span> <span style={{ color: '#ffde59' }} >Entrepreneurship</span> <span>
                                    Challenge
                                </span>
                            </Fade>
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            The team's dedication to nurturing aspiring entrepreneurs has translated into a remarkable accomplishment: a 27th  and 29th place at prestigious <span style={{ color: '#ffde59' }} >National Entrepreneurship Challenge 2023 & 2024 </span> respectively .
                        </p>
                    </div>
                    <div>
                        <AchievementCarousel images={images3} />
                    </div>
                </div>

                <hr style={{ color: 'black' }} />

                {/* Activity - 2: EUREKA Runner-Up */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <Slide direction="left">
                        <img
                            src={eurekamb}
                            alt="Eureka Runner Up"
                            className="rounded-xl shadow-lg border border-[#26250F]"
                        />
                    </Slide>
                    <div className="flex flex-col justify-center">
                        <div
                            style={{
                                backgroundColor: '#141412',
                                color: '#ffde59',
                                border: '1px solid #26250F',
                            }}
                            className="rounded-full px-4 py-1 mb-4 w-fit"
                        >
                            <Fade cascade>
                                <span className="flex items-center gap-2">
                                    <GiPolarStar /> INNOVATION RECOGNIZED
                                </span>
                            </Fade>
                        </div>
                        <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
                            <Fade cascade>
                                <span>Eureka</span>{' '}
                                <span style={{ color: '#ffde59' }}> 1<sup>st</sup> Runner-Up</span>
                            </Fade>
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            Our team secured the <span style={{ color: '#ffde59' }}>1<sup>st</sup>  Runner-Up</span> position at
                            <span style={{ color: '#ffde59' }}> Eureka 2024</span>, Asia’s largest business model competition
                            organized by IIT Bombay. This achievement reflects the innovation and problem-solving spirit of our students.
                        </p>
                    </div>
                </div>

                <hr style={{ color: 'black' }} />

                {/* Activity - 3 */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />REAL WORLD EXPOSURE</span>
                            </Fade>
                        </div>
                        <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
                            <Fade cascade>
                                <span ><span style={{ color: '#ffde59' }} >Visits</span> to <span style={{ color: '#ffde59' }} >startups</span></span> <span><span style={{ color: '#ffde59' }} >and</span> more</span>
                            </Fade>
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            Our recent visits to some of the most dynamic startups gave our members a unique opportunity to:
                            <span style={{ color: '#ffde59' }} >Witness the startup grind up close,

                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <Fade cascade>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> Interact with founders and industry leaders,


                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> Understand the challenges and thrills of building from scratch, and


                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> Absorb the energy of teams solving real-world problems with passion and purpose
                                </li>
                            </Fade>
                        </ul>
                    </div>
                    <div>
                        <AchievementCarousel images={images2} />
                    </div>
                </div>

                <hr style={{ color: 'black' }} />

                {/* Acitvity - 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <Slide direction="left">
                        <div><AchievementCarousel images={images1} /></div>
                    </Slide>
                    <div className="flex flex-col justify-center">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />ENGAGING EVENTS</span>
                            </Fade>
                        </div>
                        <h2 className="text-2xl sm:text-5xl font-bold leading-tight">
                            <Fade cascade>
                                <span>Events to encourage</span> <span style={{ color: '#ffde59' }} >Entrepreneurships</span>
                            </Fade>
                        </h2>
                        <p className="mt-4 text-zinc-400">
                            The team hasn't stopped at forging partnerships; they've also transformed into a powerhouse of engaging events and workshops:
                        </p>
                        <ul className="mt-4 space-y-2 text-zinc-400">
                            <Fade cascade>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> The Entrepreneurship Show
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> BizzMantra
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> E-Summit
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#ffde59]">✔</span> Achiever Talk
                                </li>
                            </Fade>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activities