import React from 'react';
import ExperienceItem from '../ui/ExperienceItem';

export default function ExperienceSection() {
    return (
          <div className="flex flex-col gap-y-6">
            <h2>Experience</h2>
            <ExperienceItem
                title="CSE007 Grader"
                date="August 2025 - Present"
                description="Graded student exam/assignments and aided in weekly lab sessions."
                location="Bethlehem, PA"
            />
          </div>
    )
}