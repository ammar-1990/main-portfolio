import { motion } from "framer-motion";
import Lottie from "lottie-react";
import programmer from "../../public/programmer.json";

type Props = {};

const About = (props: Props) => {
  return (
    <section
      id="about"
      className="h-screen snap-center max-w-6xl mx-auto  pt-24 "
    >
      <h1 className="text-center text-secondary tracking-[20px] uppercase text-2xl">
        About
      </h1>
      <div className="lg:p-10 p-4 mt-10 flex gap-4 sm:gap-8 md:gap-20 flex-col sm:flex-row items-center justify-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-[250px] lg:w-[450px] flex-shrink-0"
        >
          <Lottie color="" animationData={programmer} className=" " />
        </motion.div>

        <div className="text-center sm:text-start space-y-3">
          <h2 className="text-xl font-semibold">Some info about me</h2>
          <p className="text-xs   max-w-[500px] sm:max-w-[475px] text-justify sm:h-auto h-[150px] overflow-y-scroll sm:overflow-auto">
            I am a <span className="text-main font-semibold">MERN full-stack </span>developer with expertise in <span className="text-main font-semibold">React
            Native</span>, and <span className="text-main font-semibold">Next.js</span>.<br/> I have a strong track record of building
            complex websites, including e-commerce platforms with product
            catalogs, shopping carts, and payment gateways, social media sites
            with user profiles, news feeds, and messaging systems, as well as
            blogs with content management capabilities. Additionally, I have
            experience building real-time video applications using Socket.io and
            deploying applications to production environments. I am skilled in
            integrating APIs and services, developing RESTful APIs, and writing
            clean, maintainable, and modular code that adheres to industry
            standards. I am always eager to learn new technologies and
            frameworks to stay up-to-date with the latest trends in the
            industry. Whether you're looking to build an e-commerce platform,
            social media site, blog, instant messaging app, or any other complex
            web project, I have the experience and expertise to deliver
            innovative solutions that meet your unique needs. Let's collaborate
            to bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
