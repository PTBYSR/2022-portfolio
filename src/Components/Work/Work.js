import React from 'react'
import ProjectSection from './ProjectSection';
import {
  WorkHeading, 
  WorkSection,
  BgWrapper
} from '../Work/Work.element'
import { ThemeProvider } from "styled-components";


const theme = {
  main: "30px"
}

function Work() {
  return (
    <>
    <ThemeProvider theme={{theme}}>
      <BgWrapper className='bg-dark'>
        <WorkSection className='container bg-dark'>
          <WorkHeading className='flex fs-heading ff-mont fw-semibold fc-light'>
            <h1>/ WORK</h1>
          </WorkHeading>
        </WorkSection>
          <ProjectSection className='container bg-dark'/>
          <ProjectSection className='container bg-dark'/>
          <ProjectSection className='container bg-dark'/>
      </BgWrapper>
    </ThemeProvider>
    </>
  )
}

export default Work