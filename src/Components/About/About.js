import React from 'react'
import { 
  AboutSection,
  AboutHeading,
  Image,
  ImageSection,
  TextSection,
  AboutMain,
  AboutSecondary,
 } from './About.element'
import { BgWrapper } from '../Globalstyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  main: "100px",
}

function About() {
  return (
    <ThemeProvider theme={theme}>
      <BgWrapper>
        <AboutSection className='flex bg-dark container'>
          <ImageSection className='bg-dark flex'>
            <Image className='bg-light'></Image>
          </ImageSection>
          <TextSection>
          <AboutHeading className='fc-light fs-heading ff-mont flex'>
            <h1>/ ABOUT</h1>
          </AboutHeading>
            <AboutMain className='fs-secondary fc-light'>
              <p>this tis how we are goona do it. from noow on I rule.this tis how we are goona do it. from noow on I rule.this tis how we are goona do it. from noow on I rule.this tis how we are .Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor impedit porro possimus. Possimus amet iste atque blanditiis sunt! Neque.</p>
            </AboutMain>
            <AboutSecondary className='fs-secondary fc-light'>
              <p>this tis how we are goona do it. from noow on I rule.this tis how we are goona do it. from noow on I rule.this tis how we are goona do it. from noow on I rule.this tis how we are .</p>
            </AboutSecondary>
          </TextSection>
        </AboutSection>
      </BgWrapper>
    </ThemeProvider>
  )
}

export default About