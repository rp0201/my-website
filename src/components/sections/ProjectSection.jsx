import React from 'react'
import ProjectCard from '../ui/ProjectCard'

// {title, date, description, link, stack=[]}

export default function ProjectSection() {
    return (
          <div className="flex flex-col gap-y-6">
            <h2>Projects</h2>
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