import { motion } from "framer-motion";
import Lottie from "lottie-react";
import programmer from "../../public/programmer.json";
import { RefObject, useEffect } from "react";
import {useIntersectionObserver} from '../hooks/useIntersecting'
import React from "react";

type Props = { setTheHash:React.Dispatch<React.SetStateAction<string>> };

const About = ({setTheHash}: Props) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  useEffect(()=>{
    if(isIntersecting)
  {  window.history.pushState(null, "", `#${'about'}`);
    setTheHash('about')}
  },[isIntersecting])
  return (
    <section ref={ref}
    
      id="about"
      className="section "
    >
      <h1 className="title">
        About
      </h1>
      <motion.div
      viewport={{once:true}}
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}}
      className="lg:p-10 p-4 mt-10 flex gap-4 sm:gap-8 md:gap-20 flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{once:true}}
        

          className="w-[250px] lg:w-[450px] flex-shrink-0"
        >
          <Lottie color="" animationData={programmer} className=" " />
        </motion.div>

        <div className="text-center sm:text-start space-y-3">
          <h2 className="text-xl font-semibold ">A little aboute me</h2>
          <p className="text-xs   max-w-[500px] sm:max-w-[475px] text-justify md:h-auto h-[150px] overflow-y-scroll sm:overflow-auto myScrollThree px-2">
          I am a <span className="text-red-500 font-semibold uppercase">full-stack developer</span> with a strong focus on <span className="text-red-500 font-semibold uppercase"> MERN</span>  stack,<span className="text-red-500 font-semibold uppercase"> mobile</span>  cross-platform development, and a passion for <span className="text-red-500 font-semibold uppercase">blockchain</span>  technology. In addition to my expertise in React.js, Next.js, and React Native, I have extensive experience in Solidity, Ethereum, and building Web3 applications.
I have a strong track record of building complex websites, including e-commerce platforms with product catalogs, shopping carts, and payment gateways, social media sites with user profiles, news feeds, and messaging systems, as well as blogs with content management capabilities. Additionally, I have experience building real-time video applications using Socket.io and deploying applications to production environments.
I am skilled in integrating APIs and services, developing RESTful APIs, and writing clean, maintainable, and modular code that adheres to industry standards.
By combining my expertise in React.js and Next.js with my proficiency in Solidity, ethers.js, and blockchain development, I can build innovative Web3 applications. These applications would provide users with enhanced security, transparency, and decentralization, revolutionizing industries such as finance, supply chain management, and decentralized governance.
Next.js, a powerful React framework, empowers me to create websites that not only deliver outstanding user experiences but also excel in search engine optimization (SEO). By leveraging Next.js's server-side rendering (SSR) and static site generation (SSG) capabilities, I ensure that the website content is readily accessible to search engines, leading to improved crawlability and indexability.
I am always eager to learn new technologies and frameworks to stay up-to-date with the latest trends in the industry. Whether you're looking to build an e-commerce platform, social media site, blog, instant messaging app, blockchain-related project, or any other complex web project, I have the experience and expertise to deliver innovative solutions that meet your unique needs. Let's collaborate to bring your ideas to life.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(About);
