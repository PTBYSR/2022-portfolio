import React from 'react';
import { ReactComponent as linkicon } from '../assets/linkicon.svg'
import {  
    ContactSection,
    SayHi,
    Email,
} from './Contact.element'
import { BgWrapper } from '../Globalstyles'

function Contact() {
  return (
    <>
        <BgWrapper>
            <ContactSection className='flex bg-dark'>
                <SayHi className='fc-light fs-heading flex'>
                    <h1>Say <br/> Hi</h1>
                </SayHi>
                <Email className='flex fc-light fs-secondary'>
                    <div>
                        <linkicon />
                        <li>paul.emechebe@gmail.com</li>
                        <p>LinkedIn</p>
                        <p>Github</p>
                    </div>
                </Email>
            </ContactSection>
        </BgWrapper>   
    </>
  )
}

export default Contact