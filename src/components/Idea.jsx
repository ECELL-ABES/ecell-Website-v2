import React from 'react'

function Idea() {
    const [email, setEmail] = React.useState("");

    const handleConnect = () => {
        if (email) {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center py-10 bg-black">
                <div style={{ backgroundColor: '#0B0C0A' }} className=" text-white rounded-lg p-3 md:p-8 mx-auto text-center">
                    <h1 className=" text-3xl md:text-6xl font-semibold mb-5 p-2 md:p-7">Have Ideas in mind? Let's connect and discuss</h1>
                    <p className="text-zinc-400 md:text-2xl mb-6">Let’s brainstorm together and bring your ideas to life with engaging discussions and creative collaboration!</p>
                    <div style={{ backgroundColor: '#0D0D0D', border: '1px solid #26250F' }} className="w-fit flex items-center justify-center rounded-lg  py-2 px-4 m-auto">
                        <input
                            style={{ backgroundColor: '#0D0D0D' }}
                            type="email"
                            placeholder="example@gmail.com"
                            className="p-3  text-white focus:outline-none md:w-[20rem]"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <button
                            style={{ backgroundColor: '#ffde59' }}
                            className=" text-black font-semibold px-5 py-1 sm:py-2 rounded-lg"
                            onClick={handleConnect}
                        >
                            Let's Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idea