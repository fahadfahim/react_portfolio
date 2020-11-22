import styled from 'styled-components'
export const SwiperBox =styled.div`
width:300px;
height:300px;
background:red;
`;
export const SkillContainer= styled.div`
height:80vh;
background:#F6F6F6;
padding-top:5rem;
text-align:center;

`;
export const ImgBox =styled.img`
width:100%;
height:200px;
border-radius:20px;
z-index:2;

// box-shadow: 0px 25px 42px rgba(0, 0, 0, 0.4);
`;
export const SkillH1 =styled.h1`
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
export const SkillText=styled.div`
padding:20px;
width:80%;
margin:0 auto;
padding-bottom:3rem;
font-family: 'EB Garamond', serif;
// font-family: 'PT Sans', sans-serif;
`;
