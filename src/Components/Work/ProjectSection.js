import React from 'react';
import { 
    ProjectSectionWrapper,
    ImageWrapper,
    TextWrapper
 } from './ProjectSection.element';


function ProjectSection() {
  return (
    <>
        <ProjectSectionWrapper className='flex container'>
            <ImageWrapper></ImageWrapper>
            <TextWrapper>
                <ProjectDescriptoin>

                </ProjectDescriptoin>
                <SkillsDescription>

                </SkillsDescription>
            </TextWrapper>
        </ProjectSectionWrapper>
    </>
  )
}

export default ProjectSection