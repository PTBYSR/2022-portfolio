import React from 'react'
import ProjectSection from './ProjectSection';
import {
  WorkHeading, 
  WorkSection,
} from '../Work/Work.element'
import { ThemeProvider } from "styled-components";


const theme = {
  main: "30px"
}

function Work() {
  return (
    <>
    <ThemeProvider theme={{theme}}>
      <WorkSection className='container-dark bg-dark'>
        <WorkHeading className='flex fs-heading ff-mont fw-semibold fc-light'>
          <h1>/ WORK</h1>
        </WorkHeading>
        <ProjectSection />
      </WorkSection>
    </ThemeProvider>
    </>
  )
}

export default Work