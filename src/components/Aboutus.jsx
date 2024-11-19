import React from 'react'
import '../App.css'
import { Fade, Slide } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";

function Aboutus() {
    return (
        <div>
            <div className="bg-black text-white p-5 sm:p-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="flex flex-col justify-center">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />ABOUT US</span>
                            </Fade>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight">
                            <span style={{ color: '#ffde59' }}>Fast Tracking </span>the idea into reality with E-Cell ABESEC
                        </h1>
                        <p className="mt-4 text-zinc-400">
                            At E-Cell ABESEC, our journey began with a simple but powerful idea: to fast track and nuture the ideas devlopming in the mind of young brains. Frustrated by the complexities and limitations of existing solutions, we set out to create a platform that would empower teams to collaborate more effectively, streamline workflows, and drive success.</p>
                        <p className="mt-4 text-zinc-400">With a team of passionate developers and project management experts, we embarked on a journey of innovation and iteration. We listened to the needs of our users, gathered feedback, and continuously refined our platform to meet the evolving demands of modern businesses.</p>
                    </div>
                    <Slide direction='right'>

                        <div><img src="src\assets\FastTracking.jpg" alt="" srcset="" style={{ borderRadius: '0.5rem',height: '25rem',width: "42rem" }} /></div>      {/* first image */}
                    </Slide>
                </div>

                <hr style={{ color: 'black' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div class="flex flex-col">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />ACHIEVEMENTS</span>
                            </Fade>
                        </div>

                        <h1 class="text-4xl font-bold leading-tight">
                            Highlight <span style={{ color: '#ffde59' }} >achievements</span> by the<span style={{ color: '#ffde59' }} > numbers</span>
                        </h1>

                        <div class="mt-4 grid grid-cols-2 gap-4">
                            <div class="flex flex-col text-white p-4 rounded-lg">
                                <p class="text-2xl font-bold mb-2">500+</p>
                                <p>Project Completed</p>
                            </div>

                            <div class="flex flex-col text-white p-4 rounded-lg">
                                <p class="text-2xl font-bold mb-2">500+</p>
                                <p>Project Completed</p>
                            </div>
                            <div class="flex flex-col text-white p-4 rounded-lg ">
                                <p class="text-2xl font-bold mb-2">500+</p>
                                <p>Project Completed</p>
                            </div>

                            <div class="flex flex-col text-white p-4 rounded-lg ">
                                <p class="text-2xl font-bold mb-2">500+</p>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </div>
                    <Slide direction='right'>

                    <div><img src="src\assets\HighAchive.JPG" alt="" srcset="" style={{ borderRadius: '0.5rem',width: "42rem",height:"25rem" }} /></div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

export default Aboutus