import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {Link} from 'react-router-dom'
import mail from '../../images/mail.svg'
export const Background = styled.div`

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:10;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-image: url(${mail});
  background-color:#fff;
  background-position:center;
  background-repeat: no-repeat;
  color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
  position: relative;

  z-index: 10;
  border-radius: 10px;

  @media screen and(max-width:768px){
    width:500px;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  culor:#000;

  @media screen and (max-width:768px){
    position:absolute;
    right:50px;
  }
`;

export const Text =styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`;
export const FormWrap =styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:400px){
    height:80%;
}
`;
export const Icon =styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
color:#fff;
font-weight:700;
font-size:32px;

@media screen and (max-width:480px){
    margin-left:16px;
    margin-top:8px;
}
`;

export const FormContent =styled.div`
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
z-index:5;
@media screen and (max-width:480px){
    padding:10px;
}
`;

export const Form =styled.form`
background:transparent;
color:#000;
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:40px 32px 80px 32px;
border-radius:4px;
// box-shadow:0 1px 3px rgba(0,0,0,0.9);

@media screen and(max-width:400px){
    padding:32px 32px;
}
`;
export const FormH1=styled.h1`
margin-bottom:40px;
color:#6c63ff;
font-family: 'Kalam', cursive;

font-size:30px;
font-weight:900;
text-align:center;

`;

export const FormLabel =styled.label`
margin-bottom: 5px;
font-size: 20px;
color: #6c63ff;
font-weight: 700;
font-family: 'Kalam', cursive;
z-index: 10;
`;

export const FormInput =styled.input`
padding:16px 16px;
margin-bottom : 32px;
border:none;
border-radius:4px;
`;
export const FormButton =styled.button`
background: #ffffff;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    color: #6c63ff;
    font-size: 20px;
    cursor: pointer;
    width: 20%;
    position: absolute;
    bottom: 41px;
    right: 40%;
    font-family: 'Kalam', cursive;
    font-weight:800;

    &:hover{
        background:#6c63ff;
        color:#fff;
    }
`;
