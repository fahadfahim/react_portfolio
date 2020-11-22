import React,{useEffect, useState} from 'react'
import {Nav,NavContainer,NavLogo,MobileIcon,NavMenu,NavItem
,NavLinks,NavBtn,NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import Modal from '../Modal';
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle,openModal}) => {
  
    const [scrollNav,setScrollNav]=useState(false);
const changeNav = () => {
    if(window.scrollY >= 800){
        // console.log(window.scrollY);
        setScrollNav(true)
    }else{
        setScrollNav(false)
    }
}
useEffect(() =>{
    window.addEventListener('scroll',changeNav)
},[])

//toggle home
const toggleHome =() =>{
    scroll.scrollToTop()
}
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Fahad
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass='active'
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass='active'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass='active'
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            activeClass='active'
                            >Work</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink scrollNav={scrollNav} onClick={openModal} >Contact</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
