import React from "react";
import "../App.css";
import { Slide, Fade } from "react-awesome-reveal";
import { GiPolarStar } from "react-icons/gi";

function Activities() {
  return (
    <div>
      <div className="bg-black text-white p-20 max-sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="flex flex-col justify-center">
            <div
              style={{
                backgroundColor: "#141412",
                color: "#ffde59",
                border: "1px solid #26250F",
              }}
              className=" rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2">
                  <GiPolarStar />
                  NATIONAL RECOGNITION
                </span>
              </Fade>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
              <Fade cascade>
                <span>National</span>{" "}
                <span style={{ color: "#ffde59" }}>Entrepreneurship</span>{" "}
                <span>Challenge 2023</span>
              </Fade>
            </h1>
            <p className="mt-4 text-zinc-400">
              The team's dedication to nurturing aspiring entrepreneurs has
              translated into a remarkable accomplishment: a 27th place at
              prestigious{" "}
              <span style={{ color: "#ffde59" }}>
                National Entrepreneurship Challenge 2023
              </span>
            </p>
          </div>
          <Slide direction="right">
            <div>
              <img
                src="src\assets\NEC25.JPG"
                alt=""
                srcset=""
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
          </Slide>
        </div>
        <hr style={{ color: "black" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <Slide direction="left">
            <div>
              <img
                src="src\assets\ETCI.jpg"
                alt=""
                srcset=""
                style={{ borderRadius: "0.5rem" }}
              />
            </div>
          </Slide>
          <div className="flex flex-col justify-center">
            <div
              style={{
                backgroundColor: "#141412",
                color: "#ffde59",
                border: "1px solid #26250F",
              }}
              className=" rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2">
                  <GiPolarStar />
                  ENGAGING EVENTS
                </span>
              </Fade>
            </div>
            <h2 className="text-2xl sm:text-5xl font-bold leading-tight">
              <Fade cascade>
                <span>Events to encourage</span>{" "}
                <span style={{ color: "#ffde59" }}>Entrepreneurships</span>
              </Fade>
            </h2>
            <p className="mt-4 text-zinc-400">
              The team hasn't stopped at forging partnerships; they've also
              transformed into a powerhouse of engaging events and workshops:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <Fade cascade>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> E-Summit
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> Achiever Talk
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> The
                  Entrepreneurship Show
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> Mock IPL
                  Auction
                </li>
              </Fade>
            </ul>
          </div>
        </div>
        <hr className="center-diamond" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="flex flex-col justify-center">
            <div
              style={{
                backgroundColor: "#141412",
                color: "#ffde59",
                border: "1px solid #26250F",
              }}
              className=" rounded-full px-4 py-1 mb-4 w-fit"
            >
              <Fade cascade>
                <span className="flex items-center gap-2">
                  <GiPolarStar />
                  REAL WORLD EXPOSURE
                </span>
              </Fade>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
              <Fade cascade>
                <span>
                  <span style={{ color: "#ffde59" }}>Visits</span> to{" "}
                  <span style={{ color: "#ffde59" }}>startups</span>
                </span>{" "}
                <span>
                  <span style={{ color: "#ffde59" }}>and</span> more
                </span>
              </Fade>
            </h1>
            <p className="mt-4 text-zinc-400">
              The team's dedication to nurturing aspiring entrepreneurs has
              translated into a remarkable accomplishment: a 27th place at
              prestigious{" "}
              <span style={{ color: "#ffde59" }}>
                National Entrepreneurship Challenge 2023
              </span>
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <Fade cascade>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> E-Summit
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> Achiever Talk
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> The
                  Entrepreneurship Show
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#ffde59]">✔</span> Mock IPL
                  Auction
                </li>
              </Fade>
            </ul>
          </div>
          <Slide direction="right">
            <div>
              <img
                src="src\assets\Visits3.JPG"
                alt=""
                srcset=""
                style={{
                  borderRadius: "0.5rem",
                  width: "42rem",
                  height: "25rem",
                }}
              />
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Activities;
