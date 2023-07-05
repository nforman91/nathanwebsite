import React from "react";
import bouldernate from '../img/bouldernate.jpg';
import { StyledAbout, StyledDescription, StyledImage, Hide } from '../styles';
import { Link } from 'react-router-dom';
// Framer Motion
import {motion} from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >Full Stack</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 
              variants={titleAnim}
            >
              <span>Web Developer</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 
              variants={titleAnim}
            >true.</motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Thank you for visiting my website! I'm excited to learn
          more about full stack web development in my coding journey!
        </motion.p>
        <motion.button variants={fade}>
            <a 
                href="https://github.com/nforman91/nathanswebsite" 
                className="github-button" 
                target="_blank" 
                rel="noreferrer"
                style={{color: '#ffffff', textDecoration: 'none'}}
            >Website GitHub</a>
        </motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={bouldernate} alt="Nathan standing in front of scenic view"/>
      </StyledImage>
      <Wave/>
    </StyledAbout>
  );
};

export default AboutSection;
