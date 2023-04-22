import * as React from 'react';
import styled from "styled-components";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



const Maindiv = styled.div`
width:100%;
background-color:#00d563;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Contentdiv = styled.div`
width:50%;
padding-top:3rem;
padding-bottom:3rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Heading = styled.h2`
font-size: calc(20px + 2vw);
font-weight: 700;
color: #272759;
margin-top: 0;
margin-bottom: 0.5rem;
line-height: 1.2;
text-align:center;
`;
const Image = styled.img`
max-width:100%;
height:auto;
`;
const Paragraph = styled.p`
font-size: calc(11px + .5vw);
color: #272759;
text-align:center;
`;
export default function ContactUsSection() {

    const mobileRef = useRef(null);

    useEffect(() => {
  
      gsap.from(mobileRef.current, {
        autoAlpha: 0,
      }, {
        duration:1,
        autoAlpha:1,
        ease:'none',
        scrollTrigger:{
            id:'mobileRef'
        }
      }
      );
  
    }, [])
    

    return (
        <Maindiv>
            <Contentdiv>
                <Heading>Drive Results,<br />
                    Maximize your ROI</Heading>
                <Paragraph>Strategizing, Designing, Optimizing and Managing
                    digital ad campaigns for businesses who wish
                    to thrive
                    in today’s market</Paragraph>
            </Contentdiv>
            <Image src="./assets/images/Group 37.svg" alt="contact us"  ref={mobileRef} v></Image>
        </Maindiv>
    );
};