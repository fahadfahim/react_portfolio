import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper
,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'
const Sidebar = ({isOpen,toggle,openModal}) => {

    const clickHandler =() =>{
            
    }
    return (
        
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon  onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink onClick={toggle} to='home'>Home</SidebarLink>
                    <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
                    <SidebarLink onClick={toggle} to='services'>Services</SidebarLink>
                    <SidebarLink onClick={toggle} to='project'>Work</SidebarLink>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={(toggle) ? (openModal) : (toggle)}>Contact</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
