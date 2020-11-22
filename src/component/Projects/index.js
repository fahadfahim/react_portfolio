import React from 'react'
import {ProjectContainer,IconProject,PrTitle,ProjectWrapper,ProjectCard,ProjectGridH1,ProBody,ProImg,ProCardBody,ProTitle,ProInfo,IconBtn,ProButton} from './ProjectsElements'
import img1 from '../../images/ct1.PNG'
import img2 from '../../images/p1.PNG'
import img3 from '../../images/exp1.PNG'
import img4 from '../../images/la1.PNG'
import img5 from '../../images/port.PNG'
import img6 from '../../images/blogger.PNG'
import {FaGithub,FaInternetExplorer} from 'react-icons/fa'
import { Button } from '../ButtonElements'
const Project = () => {
    return (
        <ProjectContainer id='project'>
            <PrTitle>
            <ProjectGridH1>Project Grid</ProjectGridH1>
            </PrTitle>
            
            <ProjectWrapper>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img1}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>This Contact Manager application i made using React , Redux ,React Router for fetch the data from fake api i use axios third party library and this application have fully crud functionality</ProBody>
                    <ProButton>
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject href='https://github.com/fahadfahim/contactmanager_redux' target='_blank'>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img2}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>This website i build using React ,  React Router , React Styled component for re useable component with that it has a sidebar and it is fully responsive for any device </ProBody>
                    <ProButton>
                        
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject href='https://github.com/fahadfahim/pizzaweb_react_styledcomponent' target='_blank'>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
                            
                        
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img3}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>This expense tracker application i build using React , React Context Api .This application all field are fully dynamic and it has add update delete features also.</ProBody>
                    <ProButton>
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject href='https://github.com/fahadfahim/expensetracker_context_api' target='_blank'>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
                            
                        
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img4}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>This wesite i build with React ,React Router and React Styled Component for re-usable component technique and it's also fully responsive for any device.</ProBody>
                    <ProButton>
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject href='https://github.com/fahadfahim/react1stweb_styledcomponent' target='_blank'>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
                        
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img5}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>My Portfolio i build using React,React Router,React Styled Component for animatin i use React Scroll React typing library and React Spring and it's also fully responsive for any device.</ProBody>
                    <ProButton>
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
                        
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>
            <ProjectCard>
                <ProCardBody>
                    <ProImg src={img6}></ProImg>
                    <ProInfo>
                    {/* <ProTitle>Hello</ProTitle> */}
                    <ProBody>This Blogger website i build using HTML CSS and Javascript and it also has Javascript slider library with CSS zoom in zoom out effect and it's also fully responsive for any device.</ProBody>
                    <ProButton>
                        
                    <IconProject>
                        <FaInternetExplorer cursor='pointer'/>
                        </IconProject>
                            <IconProject href='https://github.com/fahadfahim/blogger_website' target='_blank'>
                            <FaGithub cursor='pointer'/>
                        </IconProject> 
                            
                            
                        
    {/* <IconBtn>{FaGithubSquare}</IconBtn> */}
                    </ProButton>
                    </ProInfo>
                </ProCardBody>
            </ProjectCard>

            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project
