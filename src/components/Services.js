import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

/* services Data */
const services = [
  {
    name: "Web Development",
    description:
      "I specialize in building responsive and user-friendly websites tailored to your unique needs. Whether you need a personal blog, an e-commerce platform, or a corporate website, I can bring your vision to life.",
    link: "View my work",
  },
  {
    name: "Mobile App Development",
    description:
      "Turn your app idea into reality with my mobile app development services. I create native and cross-platform apps for both iOS and Android, ensuring a seamless user experience.",
    link: "See my apps",
  },
  {
    name: "E-commerce Solutions",
    description:
      "Boost your online sales with my e-commerce solutions. I can set up, customize, and optimize your online store, integrating secure payment gateways and advanced shopping features.",
    link: "Explore e-commerce",
  },
  {
    name: "Quality Assurance",
    description:
      "I prioritize the quality and reliability of your software products. Through rigorous testing and QA processes, I ensure that your applications are bug-free and perform flawlessly.",
    link: "Learn about QA",
  },
];

const Services = () => {
  return (
    <section id="services" className="section p-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'am Freelance Full-Stack Developer with over 3 years of
              experience
            </h3>
            <button className="btn btn-sm text-[#0F1624] font-extrabold">
              See my work
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 mb-10 flex h-[146px]"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a className="text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
