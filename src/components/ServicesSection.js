import React from "react";
import stopwatch from "../img/stopwatch.png";
import { StyledAbout, StyledDescription, StyledImage } from '../styles';
import styled from 'styled-components';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices 
      variants={scrollReveal} 
      ref={element}
      // animate={controls} 
      // initial='hidden' 
    >
      <StyledDescription>
        <h2>
          My<span>{` projects`}</span>
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img className="shrink-icon" src={stopwatch} alt="stopwatch"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img className="shrink-icon" src={stopwatch} alt="stopwatch"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img className="shrink-icon" src={stopwatch} alt="stopwatch"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img className="shrink-icon" src={stopwatch} alt="stopwatch"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={stopwatch} alt="stopwatch"/>
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 320px){
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 20rem;
  .shrink-icon{
    width: 2.5rem;
  }
  .icon{
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
