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
    <ThemeProvider>
      <WorkSection className='fs-secondary'>
        <WorkHeading>
          <h1>Work</h1>
        </WorkHeading>
        <ProjectSection />
      </WorkSection>
    </ThemeProvider>
    </>
  )
}

export default Work