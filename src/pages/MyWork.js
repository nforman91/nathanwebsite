import React, { useEffect } from 'react';
import styled from 'styled-components';
// Images
import peoples from "../img/peoples.png";
import coderheroes from '../img/coder_heroes.png';
import mern_stack from '../img/mern_stack.png';
import hockeyteamslibrary from '../img/hockey-teams-library.png';

// Animations
import { motion } from 'framer-motion';
import {
    pageAnimation, 
    fade, 
    photoAnim, 
    lineAnim, 
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWork 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}
        >
            {/* People's Productions */}
            <StyledMovie>
                <motion.h2>People's Productions</motion.h2>
                <StyledP>A website with information about 30+ year live event businesses in the Des Moines, Iowa area.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={peoples} alt="peoples image"/>
                    </Hide>
                <div className="button-container">
                    {/* <motion.button variants={fade}>
                        <a 
                            href="https://mern-stack-nforman91.vercel.app/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button> */}
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/nforman91/peoples" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>

            {/* MERN Stack Blog */}
            <StyledMovie>
                <motion.h2>MERN Stack Blog</motion.h2>
                <StyledP>An application to access blog posts and visit individual pages.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={mern_stack} alt="mern stack image"/>
                    </Hide>
                <div className="button-container">
                    <motion.button variants={fade}>
                        <a 
                            href="https://mern-stack-nforman91.vercel.app/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button>
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/nforman91/mern_stack" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>

            {/* CoderHeroes */}
            <StyledMovie
                ref={element} 
                variants={fade}
                animate={controls}
                initial='hidden'
            >
                <motion.h2>CoderHeroes</motion.h2>
                <StyledP>An application to help youth break into tech built for third-party client. Contributions included UX designs using Figma and Ant Design, as well as adding functionality for multiple roles, including parent, instructor and admin.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={coderheroes} alt="coder heroes image"/>
                    </Hide>
                <div className="button-container">
                    <motion.button variants={fade}>
                        <a 
                            href="https://www.coderheroes.com/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button>
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/BloomTech-Labs/coder-heroes-fe" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>

            {/* Hockey Teams Library */}
            <StyledMovie
                ref={element2} 
                variants={fade}
                animate={controls2}
                initial='hidden'
            >
                <motion.h2>Hockey Teams Library</motion.h2>
                <StyledP>An application for displaying basic information about NHL teams. Combines third-party API data for displaying team information in modals, and local state for displaying logos/sorting functionality.</StyledP>
                <motion.div variants={lineAnim} className="line"></motion.div>
                    <Hide>
                        <motion.img variants={photoAnim} src={hockeyteamslibrary} alt="hockey teams library image"/>
                    </Hide>
                <div className="button-container">
                    <motion.button variants={fade}>
                        <a 
                            href="https://hockey-team-library.vercel.app/" 
                            className="visit-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >Visit Project</a>
                    </motion.button>
                    <motion.button variants={fade}>
                        <a 
                            href="https://github.com/nforman91/image-library/tree/main/image-library" 
                            className="github-button" 
                            target="_blank" 
                            rel="noreferrer"
                        >GitHub</a>
                    </motion.button>
                </div>
            </StyledMovie>
            
            <ScrollTop/>
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 320px){
        padding: 2rem 2rem;
    }
    h2{
        padding: 1rem 0rem;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        /* object-fit: cover; */
    }
    .button-container{
        display: flex;
        justify-content: center;
    }
    button{
        margin-top: 1rem;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
`;

const StyledP = styled.p`
    color: #000000;
`;

const Hide = styled.div`
    overflow: hidden;
`;

// const StyledButtons = styled.div`
//     margin-left: -10rem;
// `;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #23d997;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #9ff7d6;
`;

const Frame3 = styled(Frame1)`
    background: #beffe7;
`;

export default MyWork;
