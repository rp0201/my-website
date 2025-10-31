import React from 'react'
import ProjectCard from '../ui/ProjectCard'

// {title, date, description, link, stack=[]}

export default function ProjectSection() {
    return (
          <div className="flex flex-col gap-y-6">
            <h2>Projects</h2>
            <ProjectCard
                title="Shopify Restock Monitor"
                date="October 2025"
                description="A Python-based automated stock monitoring tool for select Shopify stores. Continuously tracks product inventory levels and detects stock changes in real-time."
                link="https://github.com/rp0201/shopify-monitor"
                stack={["Python"]}
            />
          </div>  
    )
}