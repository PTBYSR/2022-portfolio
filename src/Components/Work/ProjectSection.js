import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
    ProjectSectionWrapper,
    ImageWrapper,
 } from './ProjectSection.element';
 import TextSection from './TextSection';


 const theme ={
    main: "30px",
 }


function ProjectSection() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <ProjectSectionWrapper className='flex container'>
              <ImageWrapper className='bg-light'></ImageWrapper>
              <TextSection />
          </ProjectSectionWrapper>
        </ThemeProvider>
    </>
  )
}

export default ProjectSection