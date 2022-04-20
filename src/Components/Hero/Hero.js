import React from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "../Navbar/Navbar";
// import { Nav } from '../Navbar/Navbar.elements'
import { ReactComponent as ArrowDown } from "./arrow-down.svg";
import {
  Landing,
  LandingCardOne,
  LandingCardTwo,
  LandingCardThree,
  NameLabel
} from "./Hero.element";

const theme = {
  main: "30px",
};

function Hero() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Landing className="bg-light flex container">
          <LandingCardOne className="">
            <h1 className="ff-mont fw-semibold fs-secondary">DESIGNER,</h1>
            <h1 className="ff-mont fw-semibold fs-heading">DEVELOPER</h1>
            <p className="ff-cabin">
              I am a{" "}
              <span className="fw-semibold text-accent-dark">
                creative developer
              </span>
              ,<br />
              i build breathe-taking
              <br />
              interfaces with front-end technologies.
            </p>
            {/* <ArrowDown /> */}
          </LandingCardOne>
          <LandingCardTwo />
          <LandingCardThree className="flex">
            <NavBar />
            <NameLabel>
              <h1 className="ff-mont fw-semibold fs-heading">
                PAUL-SIMON
                <br />
                EMECHEBE
              </h1>
            </NameLabel>
          </LandingCardThree>
        </Landing>
      </ThemeProvider>
    </>
  );
}

export default Hero;
