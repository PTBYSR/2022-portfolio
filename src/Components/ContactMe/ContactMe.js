import React from 'react'
import {
    ContactMeSection,
    SayHi,
    Email,
    EmailWrapper,
  } from "./ContactMe.element";
  import { BgWrapper } from "../Globalstyles";
  import { motion } from "framer-motion";
  import { ThemeProvider } from "styled-components";

function ContactMe() {
  return (
    <ContactMeSection className="flex bg-dark">
        <SayHi className="fc-light fs-heading flex">
            <h1>
              Say <br /> Hi
            </h1>
          </SayHi>
          <Email className="flex fc-light fs-secondary">
            <EmailWrapper className="flex">
              <a
                className="fc-light"
                href={"https://github.com/PTBYSR"}
                target={"_blank"}
              >
                <motion.p
                  className="link-icon"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => null}
                >
                  Github
                </motion.p>
              </a>
              <a
                className="fc-light"
                href={
                  "https://www.linkedin.com/in/paul-simon-emechebe-860221206/"
                }
                target={"_blank"}
              >
                <motion.p
                  className="link-icon"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => null}
                >
                  LinkedIn
                </motion.p>
              </a>
            </EmailWrapper>
          </Email>
    </ContactMeSection>
  )
}

export default ContactMe