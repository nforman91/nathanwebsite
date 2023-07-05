import React from 'react';
import styled from 'styled-components';
import skiingnate from "../img/skiingnate.JPG";
import html_logo from '../img/html_logo.png';
import css_logo from '../img/css_logo.png';
import js_logo from '../img/js_logo.png';
import react_logo from '../img/react_logo.png';
import node_logo from '../img/node_logo.png';
import {motion} from 'framer-motion';
import {photoAnim} from '../animation';

const AboutMeComponent = () => {
    return(
        <StyledBackground style={{background: '#fff'}}>
            <StyledAboutMe>
                <StyledText>
                    Hello! My name is Nathan. I have been learning full stack web development since July 2021.
                </StyledText>
                <StyledText>
                    The primary tools I'm using as of now are:
                </StyledText>
                <StyledLogoContainer>
                    <StyledLogoContainers>
                        <StyledLogo src={html_logo} alt="html logo"/>
                        <StyledTitles>HTML</StyledTitles>
                    </StyledLogoContainers>
                    <StyledLogoContainers>
                        <StyledLogo src={css_logo} alt="css logo"/>
                        <StyledTitles>CSS</StyledTitles>
                    </StyledLogoContainers>
                    <StyledLogoContainers>
                        <StyledLogo src={js_logo} style={{ width: '4rem' }} alt="js logo"/>
                        <StyledTitles>JavaScript</StyledTitles>
                    </StyledLogoContainers>
                    <StyledLogoContainers>
                        <StyledLogo src={react_logo} alt="react logo"/>
                        <StyledTitles>React</StyledTitles>
                    </StyledLogoContainers>
                    <StyledLogoContainers>
                        <StyledLogo src={node_logo} style={{ width: '6rem', height: '4rem', marginTop: '1rem' }} alt="node logo"/>
                        <StyledTitles>Node</StyledTitles>
                    </StyledLogoContainers>
                </StyledLogoContainer>
                <StyledPic variants={photoAnim} src={skiingnate} alt="picture of Nate skiing" />
                <StyledText>
                    I grew up in Boulder, Colorado and currently reside near Seattle, Washington.
                    Before my switch to tech, I raised money for various non-profit arts organizations for four years.
                </StyledText>
                <StyledText>
                    I love music, and am an avid record collector. I can play electric and classical guitar, as well as tenor saxophone.
                    My favorite outdoor activities include fly fishing, biking, hiking, and skiing.
                </StyledText>
            </StyledAboutMe>
        </StyledBackground>
    );
};

const StyledAboutMe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    height: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    border: 1px solid #23d997;
    box-shadow: 0 0 1em gray;
`;

const StyledText = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 1rem 1rem 5rem;
    width: 90%;
`;

const StyledBackground = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
`;

const StyledPic = styled(motion.img)`
    height: 30rem;
    width: 23rem;
    margin: 2rem;
`;

const StyledLogo = styled.img`
    height: 5rem;
    width: 5rem;
    margin-left: 1rem;
`;

const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 32rem;
    margin: 1rem;
`;

const StyledLogoContainers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledTitles = styled.div`
    margin-left: 1.2rem;
`;

export default AboutMeComponent;
