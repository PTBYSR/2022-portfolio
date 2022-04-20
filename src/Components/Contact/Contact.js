import React from 'react';
// import { ReactComponent as Linkicon } from '../assets/linkicon.svg'
import {  
    ContactSection,
    SayHi,
    Email,
    EmailWrapper,
} from './Contact.element'
import { BgWrapper } from '../Globalstyles'

function Contact() {
  return (
        <BgWrapper>
            <ContactSection className='flex bg-dark'>
                <SayHi className='fc-light fs-heading flex'>
                    <h1>Say <br/> Hi</h1>
                </SayHi>
                <Email className='flex fc-light fs-secondary'>
                    <EmailWrapper>
                        <li>paul.emechebe@gmail.com</li>
                        <p className='link-icon'>LinkedIn</p>
                        <p className='link-icon'>Github</p>
                    <EmailWrapper>
                </Email>
            </ContactSection>
        </BgWrapper>   
  )
}

export default Contact