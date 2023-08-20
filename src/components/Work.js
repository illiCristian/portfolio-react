import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
const Work = () => {
  return (
    <section
      id="work"
      className=" flex flex-col lg:flex-row mx-auto w-full gap-x-2 gap-y-4 p-4 max-w-7xl"
    >
      <div className="basis-0 lg:basis-6/12 flex flex-col gap-4 grow w-full">
        <div className="w-full grow">
          <h2 className="h2 leading-tight text-accent">
            My Latest <br />
            Work.
          </h2>
          <p className="max-w-sm mb-10">
            Lorem ipsun dolor sit amet consectur adipisicng elit. dolor natus
          </p>
          <button className="btn btn-sm">View all projects</button>
        </div>
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className=" group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img1}
            alt=""
          />

          <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-accent font-bold">UI/UX Design</span>
          </div>

          <div className="absolute w-full h-full flex flex-col top-[60%] items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </div>
      </div>
      <div className="basis-0 lg:basis-6/12 flex flex-col gap-4 grow w-full">
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className=" group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img1}
            alt=""
          />

          <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-accent font-bold">UI/UX Design</span>
          </div>

          <div className="absolute w-full h-full flex flex-col top-[60%] items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </div>
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
          <div className=" group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>

          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img1}
            alt=""
          />

          <div className="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-accent font-bold">UI/UX Design</span>
          </div>

          <div className="absolute w-full h-full flex flex-col top-[60%] items-center group-hover:opacity-100 opacity-0 transition-opacity duration-500 z-30">
            <span className="text-3xl text-white">Project Title</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

/*  */
