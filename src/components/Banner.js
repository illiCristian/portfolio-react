import React from "react";
import image from "../assets/avatar1.png";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import BackgroundAnimation from "./BackgrooundAnimation/BackgroundAnimation";
const Banner = () => {
  /*  */
  return (
    <section id="home" className="min-h-[78vh] flex items-center">
      <div className="p-10 lg:px-32 mx-auto lg:mx-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
          <div className="text-center font-secondary lg:text-left max-h-36">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[110px] whitespace-nowrap"
            >
              Cristian <span>Illi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1] whitespace-nowrap"
            >
              <span className=" text-white mr-4">I am </span>
              <TypeAnimation
                sequence={["Front-End", 2000, "Back-End", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Full-Stack developer with knowledge in HTML, CSS and JavaScript,
              handling technologies such as React JS, NextJs, Typescript, SaSS,
              Handlebars, Tailwind, I have the ability to build responsive web
              pages (Mobile First).
              <br /> In backend I have knowledge in C, Node js, express, Nest
              js, Mongodb, WebSockets, Swagger
            </motion.p>
            <div className="">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 lg:flex-row flex-col gap-4"
              >
                <button className="btn btn-lg">Contact me</button>
                <a href="#" className="text-gradient btn-link">
                  Mi portfolio
                </a>
                <motion.div
                  variants={fadeIn("up", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-[20px] flex gap-x-6 mx-auto lg:mx-0 max-w-max"
                >
                  <a
                    target="_blank"
                    href="https://github.com/illiCristian"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/cristian-illi/"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
          {/* className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]" */}
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <BackgroundAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
