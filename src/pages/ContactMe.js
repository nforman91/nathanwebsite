import React from 'react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactMe = () => {
    const myEmail = `nathan.forman@gmail.com`

    return (
        <StyledContact
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            exit="exit"
            style={{ background: '#fff' }}
        >
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </StyledHide>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle/>
                        <h2>Email: </h2>
                            <StyledA href={`mailto:${myEmail}`}>nathan.forman@gmail.com</StyledA>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle/>
                        <h2>Socials: </h2>
                    </StyledSocial>
                    <StyledSocial variants={titleAnim}>
                        <StyledUl>
                            <li><StyledA href="https://www.linkedin.com/in/nathanforman/" target="_blank">LinkedIn</StyledA></li>
                            <li><StyledA href="https://github.com/nforman91" target="_blank">GitHub</StyledA></li>
                            <li><StyledA href="https://www.discogs.com/user/nforman" target="_blank">Discogs</StyledA></li>
                        </StyledUl>
                    </StyledSocial>
                </StyledHide>
            </div>
        </StyledContact>
    );
};

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: black;
    min-height: 90vh;
    @media (max-width: 414px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 320px){
        margin-top: 5rem;
    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

const StyledCircle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-top: -2.5rem;
    h2{
        margin: 2rem;
    }
`;

const StyledA = styled.a`
    font-size: 3rem;
`;

const StyledUl = styled.ul`
    margin: 2rem 0rem 0rem 10rem;
    font-size: 3rem;
`;

export default ContactMe;

