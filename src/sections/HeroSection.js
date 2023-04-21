// @flow
// import { hover } from '@testing-library/user-event/dist/hover';
import * as React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
position:relative;
`;
const Image=styled.img`
max-width:100%;
height:auto;
`;
const Rightdiv = styled.div`
position:absolute;
top:0;
right:0;
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
margin-right:3rem;
`;
const Contentdiv = styled.div`
// margin-top:30%;
// margin-bottom:30%;
`;
const Heading = styled.h1`
font-size:3.5em;
color:white;
font-weight:500;
font-family: 'Poppins', sans-serif;
line-height: 3rem;
transform: scale(1,1.37);
`;
const P = styled.p`
font-size:16px;
color:white;
margin-bottom:25px;
font-family: 'Poppins', sans-serif;
`;
const Span = styled.span`
color:#00D563;
`;
const Button = styled.button`
padding:10px;
color:white;
background-color:transparent;
border:1px solid #00D563;
font-family: 'Poppins', sans-serif;
&:hover {
  color: black;
  background-color:#00D563; 
}
&:active{
  background-color:#00D56399;
  box-shadow:0 0 2px black;
  border:1px solid white;
  color:white;
}
@media (max-width:768px){
  padding:15px;
}
`;

export default function HeroSection() {

  return (
    <Maindiv>
      <Image src='../assets/images/Group 21.svg' alt='digital marketing'></Image>
      <Rightdiv>
        <Contentdiv>
          <Heading><Span>DIGITAL</Span><br />MARKETING</Heading>
          <P>UAE'S VISION COMBINED WITH GERMAN PRECISION—THE GOLD STANDARD TO GROW BUSINESS.</P>
          <Button>REQUEST A FREE QUOTE</Button>
        </Contentdiv>
      </Rightdiv>
    </Maindiv>
  );

};