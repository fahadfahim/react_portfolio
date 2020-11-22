import React, { useState } from 'react'
import About from '../component/About';
import Footer from '../component/Footer';

import Hero from '../component/HeroSection';
import Modal from '../component/Modal';
import Navbar from '../component/Navbar'
import Project from '../component/Projects';
import Sidebar from '../component/Sidebar'
import Skill from '../component/Skill';
import {AllContent} from './PagesElements'
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    const toggle =() =>{
        setIsOpen(!isOpen)
    }
    const [showModal,setShowModal] =useState(false);
    const openModal = () => {
       setShowModal(prev => !prev);
     };
    return (
        <>
        
        <Sidebar openModal={openModal} isOpen={isOpen} toggle={toggle} /> 
           <Navbar toggle={toggle} openModal={openModal} />
           <Modal showModal={showModal} setShowModal={setShowModal} />
           <Hero />
           <About />
           <Skill />
           <Project />
            <Footer />

     
        </>
    )
}

export default Home
