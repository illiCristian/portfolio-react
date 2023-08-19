import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} id="about" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-[80vh] lg:h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[540px]
            mix-blend-lighten bg-top "
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h3 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'am Freelance Full-Stack Developer </h3>
            {/*      <p className="mb-6">
              lorem ipsoun dolor sit amet consectur adipisicng elit. dolor natus
              omnis invetore quas beatea illo nulla
            </p> */}
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-6">
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Proojetcs <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
