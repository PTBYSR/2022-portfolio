import React from 'react';
import { 
    ProjectSectionWrapper,
    ImageWrapper,
    TextWrapper,
    ProjectDescription,
    SkillsDescription
 } from './ProjectSection.element';


function ProjectSection() {
  return (
    <>
        <ProjectSectionWrapper className='flex container'>
            <ImageWrapper></ImageWrapper>
            <TextWrapper>
                <ProjectDescription>

                </ProjectDescription>
                <SkillsDescription>

                </SkillsDescription>
            </TextWrapper>
        </ProjectSectionWrapper>
    </>
  )
}

export default ProjectSection