import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialIcons,SocialIconLink,SocialLogo,WebsiteRights} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {
    const toggleHome= () => {
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo onClick={toggleHome} to='/'>Home</SocialLogo>
    <WebsiteRights>React Portfolio <span>&copy;</span> {new Date().getFullYear()} All Right Reserve <br/> by Md Ohidujjaman Fahad</WebsiteRights>
    <SocialIcons>
        <SocialIconLink  href='//www.facebook.com/fahad.fahim.334/' target='_blank' aria-label='Facebook'>
            <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href='//www.github.com/fahadfahim' target='_blank' aria-label='Instagram'>
            <FaGithub />
        </SocialIconLink>
       
        <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='LinkedIn'>
            <FaLinkedin />
        </SocialIconLink>
        <SocialIconLink href='//www.twitter.com/Fahad06618591' target='_blank' aria-label='Twitter'>
            <FaTwitter />
        </SocialIconLink>
    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
