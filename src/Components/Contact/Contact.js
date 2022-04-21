import React from 'react';
import {  
    ContactSection,
    SayHi,
    Email,
    EmailWrapper,
    EmailLink,
} from './Contact.element'
import { BgWrapper } from '../Globalstyles'
import { motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

// function copy(that){
//     var inp =document.createElement('input');
//     document.body.appendChild(inp);
//     inp.value =that.textContent
//     inp.select();
//     document.execCommand('copy',false);
//     inp.remove();
//     }


function Contact() {
  return (
        <ThemeProvider>
            <BgWrapper>
                <ContactSection className='flex bg-dark'>
                    <SayHi className='fc-light fs-heading flex'>
                        <h1>Say <br/> Hi</h1>
                    </SayHi>
                    <Email className='flex fc-light fs-secondary'>
                        <EmailWrapper className='flex'>
                            <motion.EmailLink
                                className="fc-light"
                                whileHover={{ scale: 1.1 }}
                                onClick={() => null}
                                >
                                paul.emechebe@gmail.com
                            </motion.EmailLink>
                            <a
                                className="fc-light"
                                href={"https://github.com/PTBYSR"}
                                target={'_blank'}
                                >
                                <motion.p
                                    className='link-icon'
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => null}
                                    >Github
                                </motion.p>
                            </a>
                            <a
                                className="fc-light"
                                href={"https://www.linkedin.com/in/paul-simon-emechebe-860221206/"}
                                target={"_blank"}
                                >
                                <motion.p
                                    className='link-icon'
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => null}
                                    >LinkedIn
                                </motion.p>
                            </a>
                        </EmailWrapper>
                    </Email>
                </ContactSection>
            </BgWrapper>
        </ThemeProvider>   
  )
}

export default Contact;