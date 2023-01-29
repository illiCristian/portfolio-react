import React from "react";
import image from "../assets/avatar1.png";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Cristian <span>Illi</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1]">
              <span className=" text-white mr-4">I am </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
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
              className="mb-8 max-w-lg mx-auto lg:mx-0">
              Desarrollador Front-End con sólidos conocimientos en HTML5, CSS3 y
              JavaScript, manejo de tecnologías cómo React JS, SaSS, Tailwind,
              Bootstrap y control de versiones con GIT, poseo la capacidad de
              construir páginas web responsive (Mobile First) y conocimientos
              básicos en diseño UX/UI de páginas web.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                Mi portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[20px] flex gap-x-6 mx-auto lg:mx-0 max-w-max">
              <a target="_blank" href="https://github.com/illiCristian">
                <FaGithub />
              </a>
              <a target="_blank" href="https://github.com/illiCristian">
                <FaLinkedin />
              </a>
              <a target="_blank" href="https://github.com/illiCristian">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
            <img src={image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

/* 
   <section id="home" className="min-h-[85vh]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Cristian <span>Illi</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary uppercase leading-[1]">
              <span className=" text-white mr-4">I am </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Desarrollador Front-End con sólidos conocimientos en HTML5, CSS3 y
              JavaScript, manejo de tecnologías cómo React JS, SaSS, Tailwind,
              Bootstrap y control de versiones con GIT, poseo la capacidad de
              construir páginas web responsive (Mobile First) y conocimientos
              básicos en diseño UX/UI de páginas web.
            </p>
          </div>
          <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contact me</button>
            <a href="#" className="text-gradient btn-link">
              Mi portfolio
            </a>
          </div>

         
          <div className="text-[20px] flex gap-x-6 mx-auto lg:mx-0">
            <a target="_blank" href="https://github.com/illiCristian">
              <FaGithub />
            </a>
            <a target="_blank" href="https://github.com/illiCristian">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/illiCristian">
              <FaInstagram />
            </a>
          </div>
          <div>
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
*/
