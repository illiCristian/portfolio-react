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
        <div>
          {/* img */}
          <div
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top">
            img
          </div>
          {/* text */}
          <div>text</div>
        </div>
      </div>
    </section>
  );
};

export default About;
