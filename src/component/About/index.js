import React from 'react'
import me from '../../images/me.jpg'
import { FaFacebook,FaTwitter,FaGithub,FaLinkedin } from 'react-icons/fa';

import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AboutContainer,AboutIcon,Icon,AboutCard,AboutImg,Img,AboutInfo,AboutP,AboutInfoText,AboutTitle,MyImg} from './AboutElements'
const About = () => {
    return (
        <AboutContainer id="about">
            <AboutCard>
                <AboutImg>
                    <MyImg>
                    <Img src={me} type='me/jpg'/>
                    </MyImg>
                </AboutImg>
                <AboutInfo>
                    <AboutInfoText>
                        
                        <AboutP>I am a self taught front end developer currently located in Dhaka Bangladesh, I am pursuing the opportunity to being my career in web development industry. I am passionate about it , along with that i study in B.Sc in C.S.E . I love programming developing website.
                        </AboutP>
                        <AboutP>Using modern technology Building such a modern pixel perfect fully
responsive website and application is truly a passion of mine and I am confident that I would be the perfect candidate that you are looking for .I actively seek out new technologies and stay up to date on industry trends and advancements and I want to take my skill to the next level while working with you team.</AboutP>
                        <AboutIcon>
                        <Icon href='//www.github.com/fahadfahim' target='_blank'>
                    <FaGithub />
                    </Icon>
                            <Icon href='//www.facebook.com/fahad.fahim.334/' target='_blank'>
                            <FaFacebook  />
                            </Icon>
                    <Icon href='//www.twitter.com/Fahad06618591' target='_blank'>
                    <FaTwitter />
                    </Icon>
                  
                    <Icon href='//www.linkedin.com/in/ohidujjaman-fahad-6bb013181/' target='_blank'>
                    <FaLinkedin />
                    </Icon>
                    
                    </AboutIcon>
                    </AboutInfoText>
                    
                </AboutInfo>
            </AboutCard>
        </AboutContainer>
    )
}

export default About
