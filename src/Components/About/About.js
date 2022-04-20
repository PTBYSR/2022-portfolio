import React from 'react'
import { 
  AboutSection,
  AboutHeading,
  Image,
  TextSection,
  AboutMain,
  AboutSecondary,
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
          <Image></Image>
          <TextSection>
            <AboutMain></AboutMain>
            <AboutSecondary></AboutSecondary>
          </TextSection>
        </AboutSection>
      </BgWrapper>
    </ThemeProvider>
  )
}

export default About