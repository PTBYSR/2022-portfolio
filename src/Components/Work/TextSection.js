import React from 'react'
import { 
  TextSectionWrapper,
  Text,
  Skill,
  SkillLi,
  TextMain,
 } from './TextSection.element'

function TextSection() {
  return (
    <TextSectionWrapper >
      <Text className='fc-light'>
        <TextMain className='fs-heading'>Webscraped blog</TextMain>
        <TextMain>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor impedit porro possimus. Possimus amet iste atque blanditiis sunt! Neque.</TextMain>
        <br></br>     
        <br></br>     
        <br></br>     
        <br></br>     
        <br></br>     
        <br></br>     
        <a>VISIT SITE</a>
      </Text>
      <Skill className='flex'>
        <SkillLi><p>hi</p></SkillLi>
        <SkillLi></SkillLi>
        <SkillLi></SkillLi>
        <SkillLi></SkillLi>
      </Skill>
    </TextSectionWrapper>
  )
}

export default TextSection