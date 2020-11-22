import React,{useState} from 'react'
import {Button} from '../ButtonElements'
import Typing from 'react-typing-animation';

import Video from '../../Videos/video.mp4'
import {HeroContainer,HeroBg,HeroH2,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
const Hero = () => {
    const [hover,setHover]=useState(false);

    const onHover=() =>{
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                
                <Typing speed={150} >
                {/* <Typing.Speed ms={200} /> */}
    <HeroH1> <span className='md'>Think</span> Dynamic <span className='md'>Web</span></HeroH1>
                {/* <Typing.Backspace count={20} /> */}
                </Typing>
                
                <Typing speed={600} startDelay={1000} >
                <HeroH2> <span className='md'>I'</span>m Fahad</HeroH2>
                {/* <Typing.Backspace count={11} /> */}
                    </Typing>
                    <Typing speed={150}>
                    {/* <Typing.Speed ms={50} /> */}
                <HeroP>Web Developer, Programmer, Freelancer</HeroP>
                {/* <Typing.Backspace count={37} /> */}

                </Typing>
                <HeroBtnWrapper>
                    <Button
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    activeClass='active' onMouseEnter={onHover} onMouseLeave={onHover}
    >About{hover ? <ArrowForward /> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
