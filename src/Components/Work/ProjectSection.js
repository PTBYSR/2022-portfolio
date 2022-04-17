import React from 'react';
import { 
    ProjectSectionWrapper,
    ImageWrapper,
    TextWrapper
 } from './ProjectSection.element';


function ProjectSection() {
  return (
    <>
        <ProjectSectionWrapper className='flex'>
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