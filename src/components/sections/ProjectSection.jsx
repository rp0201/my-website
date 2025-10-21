import React from 'react'
import ProjectCard from '../ui/ProjectCard'

// {title, date, description, link, stack=[]}

export default function ProjectSection() {
    return (
          <div className="flex flex-col gap-y-6">
            <h2>Projects</h2>
            <ProjectCard
                title="AI Visual Web Automation"
                date="October 2028"
                description="Developed a program that utilizes YOLOv8 and CLIPSeg to handle complex visual web interface prompts."
                link="https://github.com/"
                stack={["Python", "YOLOv8", "CLIPSeg", "OpenCV"]}
            />
            <ProjectCard
                title="Lorem"
                date="..."
                description="Lorem ipsum."
                link="https://github.com/"
                stack={["X", "Y", "Z", "C"]}
            />
            <ProjectCard
                title="Lorem"
                date="..."
                description="Lorem ipsum."
                link="https://github.com/"
                stack={["X", "Y", "Z", "C"]}
            />
          </div>  
    )
}