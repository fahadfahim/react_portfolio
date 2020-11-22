import styled from 'styled-components'
import {FaGithubSquare} from 'react-icons/fa'
export const ProjectContainer =styled.div`
background:#ededed;
height:auto;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:3rem;
`;
export const PrTitle =styled.div`
text-align:center;
padding:20px;
width:80%;
margin:0 auto;
padding-bottom:3rem;
font-family: 'EB Garamond', serif;
`;
export const ProjectGridH1 =styled.h1`
color:black;
font-size:35px;
text-align:center;
font-family:'PT-Sans';
padding: 20px 0;
display:inline-block;
font-family: 'EB Garamond', serif;
// font-family: 'PT Sans', sans-serif;
&::after{
    content:'';
    background-color:red;
    display:block;
    height:2px;
    width:120px;
    margin:0 auto;
    paddin-top:20px;
    z-index:999;
}

`;
export const ProjectWrapper =styled.div`
background:white;
width:90%;
margin:50px auto;
padding:10px;
z-index:2;
display: grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap: 25px;
justify-items: center;
align-items: center;
height:auto;
// position:absolute;
// overflow:hidden;
@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
border-radius:30px;
box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.4);
`;
export const ProjectCard =styled.div`
background:#f2f2f2;
// height:250px;
// width:200px;
transition:  0.4s ease-in-out;
border-radius:15px;
overflow:hidden;
box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.4);
&:hover{

    transform: scale(1.1)
}
`;
export const ProCardBody=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
// position:relative;
`;
export const ProImg =styled.img`
width:100%;
height:150px;
// position:absolute;
//bottom:0;
top:0;
// border-radius:15px 15px 0 0;
//right:0;
`;
export const ProInfo=styled.div`
color:black;
display:flex;
flex-direction:column;
`;
export const ProBody=styled.p`
padding:10px;
font-size:18px;
font-family:'PT Sans', sans-serif;
`;
export const ProTitle =styled.h3`
// text-align:center;
margin:10px auto;
color:black
`;
export const ProButton=styled.div`
display:flex;
justify-content:space-evenly;
font-size:24px;
padding:10px;
`;
export const IconBtn =styled(FaGithubSquare)`
color:black;
// padding:3px;
font-size:34px;
z-index:5;
`