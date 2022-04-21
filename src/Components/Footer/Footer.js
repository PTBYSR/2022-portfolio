import React from 'react'
import { 
    FooterSection,
    TitleSection,
    FooterWaterMark,
 } from './Footer.element'

function Footer() {
  return (
    <>
        <FooterSection className="flex">
            <TitleSection className='ff-mont fs-secondary fc-dark'>PAUL EMECHEBE</TitleSection>
            <TitleSection className='ff-mont fs-secondary fc-dark'>FRONTEND DEVELOPER</TitleSection>
            <TitleSection className='ff-mont fs-secondary fc-dark'>PORTFOLIO</TitleSection>
        <FooterWaterMark className="ff-mont fc-dark">
          &copy; 2022Copyright
        </FooterWaterMark>
        </FooterSection>
    </>
  )
}

export default Footer