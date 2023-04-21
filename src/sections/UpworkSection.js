import * as React from 'react';
import styled from "styled-components";

const MainDiv = styled.div`
width:100%;
max-height:100vh;
// height:7000px;
// background-color:red;
// display:flex:
// justify-content:center;
// align-items:center;
position:relative;
`;
const Contentdiv = styled.div`
width:40%;
margin:auto;
padding:170px;
text-align:center;
`;
const Button = styled.button`
padding:10px;
color:black;
background-color:transparent;
border:1px solid #00D563;
&:hover {
  color: black;
  background-color:#00D563; 
}
&:active{
//   background-color:#00D56399;
  box-shadow:0 0 1px black;
  color:black;
}
`;
const HelloBoxFirst=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
top: 10%;
left: 18%;
&:hover::after{
    content: "Hello";
    color: black;
    padding: 1px 35px;
    background-color: #00d563;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    top: 100%;
    right: 100%;
}
`;
const HelloBoxSecond=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
top: 10%;
right: 18%;
&:hover::after{
    content: "مرحبًا";
    color: black;
    padding: 1px 35px;
    background-color: #00D563;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    top: 100%;
    right: 100%;
}
`;
const HelloBoxThird=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
top: 30%;
left: 10%;
&:hover::after{
    content: "hola.";
    color: black;
    padding: 1px 35px;
    background-color: #00d563;
    border-radius: 0 15px 15px 15px;
    position: absolute;
    top: 100%;
    left: 100%;
}
`;
const HelloBoxForth=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
top: 30%;
right: 10%;
&:hover::after{
    content: "bonjour.";
    color: black;
    padding: 1px 35px;
    background-color: #00d563;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    top: 100%;
    right: 100%;
}
`;
const HelloBoxFifth=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
bottom: 27%;
left: 23%;
&:hover::after{
    content: "Hello";
    color: #d9d9d9;
    padding: 1px 35px;
    background-color: #d9d9d9;
    border-radius: 0 15px 15px 15px;
    position: absolute;
    top: 100%;
    left: 100%;
}
`;
const HelloBoxSix=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
bottom: 27%;
right: 23%;
&:hover::after{
    content: "Hello";
    color: #d9d9d9;
    padding: 1px 35px;
    background-color: #d9d9d9;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    top: 100%;
    right: 100%;
}
`;
const HelloBoxSeven=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
bottom: 10%;
left: 8%;
&:hover::after{
    content: "nǐnhǎo.";
    color: black;
    padding: 1px 15px;
    background-color: #00d563;
    border-radius: 0 15px 15px 15px;
    position: absolute;
    top: 100%;
    left: 100%;
}
`;
const HelloBoxEight=styled.div`
position:absolute;
width: 55px;
height: 55px;
border-radius: 50%;
background-color: #d9d9d9;
bottom: 10%;
right: 8%;
&:hover::after{
    content: "gutentag";
    color: black;
    padding: 1px 25px;
    background-color: #00d563;
    border-radius: 15px 0 15px 15px;
    position: absolute;
    top: 100%;
    right: 100%;
}
`;
export default function UpworkSection() {
    return (
        <MainDiv>
            <Contentdiv>
            <img src="./assets/images/trophy 1 (Traced).svg" alt="" />
            <h2>I Am Very Happy to Say that<br />
            I am Top Rated on <span>Upwork</span> </h2>
            <p>I’m really excited to work on so many more projects and deliver amazing
            work consistently!
            But I also
            want to keep my feet on the ground and try to maintain my score.</p>
            <Button>Visit My Upwork Profile</Button>
        </Contentdiv>
        <HelloBoxFirst></HelloBoxFirst>
        <HelloBoxSecond></HelloBoxSecond>
        <HelloBoxThird></HelloBoxThird>
        <HelloBoxForth></HelloBoxForth>
        <HelloBoxFifth></HelloBoxFifth>
        <HelloBoxSix></HelloBoxSix>
        <HelloBoxSeven></HelloBoxSeven>
        <HelloBoxEight></HelloBoxEight>
        </MainDiv>
    );
}