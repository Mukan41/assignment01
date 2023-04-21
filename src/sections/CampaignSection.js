import * as React from 'react';
import styled from "styled-components"

const Maindiv = styled.div`
width:100%;
background-color:#272759;
padding-top:1rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
`;
const Heading = styled.h1`
font-size:3rem;
text-align:center;
color:#00d563;

`;
const Image = styled.img`
margin:auto;
margin-top:2rem;
max-width:78%;
height:auto;
position:relative;
`;
const SideCampaignHeading = styled.h2`
font-size: calc(12px + 2vw);
font-weight: 700;
transform: rotate(270deg);
position: absolute;
left: -110px;
bottom:30%;
translate:middle;
color:white;
`;
export default function CampaignSection() {
    return (
        <Maindiv>
            <Heading>Campaign Process</Heading>
            <Image src="./assets/images/Group 39.svg" alt="campaign"></Image>
            <SideCampaignHeading>
                👨 Best Campaign setup
            </SideCampaignHeading>
        </Maindiv>
    );
};