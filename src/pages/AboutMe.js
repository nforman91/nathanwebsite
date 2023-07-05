import React, { useEffect } from "react";
//Page Components
import AboutMeComponent from "../components/AboutMeComponent";
// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const AboutMe = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return (
    <motion.div 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
      exit="exit"
    >
      <AboutMeComponent/>
    </motion.div>
  );
};

export default AboutMe;
