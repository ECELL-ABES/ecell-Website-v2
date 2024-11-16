import React from 'react'
import {NetworkCards,NetworkCards1,NetworkCards2,NetworkCards3,NetworkCards4,NetworkCards5} from './NetworkCards'
import { Slide, Fade } from 'react-awesome-reveal'
import { GiPolarStar } from "react-icons/gi";

function Networking() {
    return (
        <div> 
            <div className="bg-black text-white p-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10" style={{ alignItems: 'center' }}>
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <div style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }} className=" rounded-full px-4 py-1 mb-4 w-fit">
                            <Fade cascade>
                                <span className='flex items-center gap-2'><GiPolarStar />NETWORKING</span>
                            </Fade>
                        </div>
                        <h1 className="text-4xl font-semibold mb-4">Strategic Partnerships</h1>
                        <p className="text-lg">
                            Recognizing the power of synergy, E-Cell has forged strategic partnerships with premier institutes like IIIT Delhi, KIET, RLAC, and IMS Ghaziabad.
                        </p>
                    </div>
                    {/* <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <NetworkCards />
                        <NetworkCards />
                        <NetworkCards />
                        <NetworkCards />
                        <NetworkCards />
                        <NetworkCards />

                    </div> */}
                    <div className='flex flex-wrap gap-5 justify-center'>
                        <div className='flex flex-col '>
                            <NetworkCards/>
                            <NetworkCards1/>
                            <NetworkCards2/>
                        </div>
                        <div className='flex flex-col'>
                            <NetworkCards3/>
                            <NetworkCards4/>
                            <NetworkCards5/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Networking