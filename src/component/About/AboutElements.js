
import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const AboutContainer =styled.div`
background:#FFFFFF;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;

`;
export const AboutCard=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
position:relative;
@media screen and (max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows:1fr 1fr;
}
`;
export const AboutImg=styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#fff;
padding:40px;

@media screen and (max-width:768px){
    padding:0;
}
`;
export const MyImg=styled.div`
// padding:40px;
// background:gray;
margin:0 auto;
// width:90%;
position:relative;


`;
export const Img =styled.img`
height:645px;
width:433px;
margin:0 auto;
// padding:40px;
-o-object-fit:cover;
object-fit:cover;
border: 1px solid #ddd;
border-radius: 4px;
// padding: 5px;
// position:absolute;
box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.4);

@media screen and (max-width:768px){
    width:100%;
    padding: 0 5px;
}
`;
export const AboutInfo=styled.div`
display:flex;
color:black;
// background:yellow;
align-items:center;
justify-content:center;
position:relative;

`;
export const AboutInfoText=styled.div`
padding:40px;
background:#FFFFFF;
width:715px;
height:556px;
position:absolute;
right:-6rem;
color:black;
box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.4);

@media screen and (max-width:768px){
    height:auto;
    width:99%;
    margin:0 auto;
    right:0rem;
    padding:0;
    top:-8rem;
}
`;
export const AboutTitle =styled.h1`
// color:#fff;
text-align:center;
padding:20px 0;
`;
export const AboutP=styled.p`
// color:#fff;
// text-align:center;
padding-top:20px;
font-family: 'PT Sans', sans-serif;
font-size:20px;

@media screen and (max-width:768px){
    padding:20px;
}
`;
export const Icon =styled.a`
display:block;
padding-right:20px;
transition:0.5s ease-in-out;
&:hover{
    transform: scale(1.3)
}
`;
export const AboutIcon =styled.div`
margin-top:3rem;
color:#4064AC;
font-size:2rem;
z-index:2;
padding-right:10px;
display:flex;
justify-content:center;
cursor:pointer;
padding:5px;

@media screen and (max-width:768px){
    margin-top:1rem;
}
`;
// export const FaFacebookIcon =styled(FaFacebook)`
// color:black;
// `

// export const Facebook =styled(FaFacebook)`
// color:black;
// font-size:3rem;

// `