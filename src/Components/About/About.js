import React from 'react'
import { 
  AboutSection,
 } from './About.element'
import { BgWrapper } from '../Globalstyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  main: "30px"
}

function About() {
  return (
    <ThemeProvider theme={{theme}}>
      <BgWrapper>
        <AboutSection className='bg-dark container'>
          <AboutHeading>
            <h1>/ ABOUT</h1>
          </AboutHeading>
        </AboutSection>
      </BgWrapper>
    </ThemeProvider>
  )
}

export default About