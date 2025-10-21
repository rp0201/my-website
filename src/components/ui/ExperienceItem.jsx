import React from 'react'

export default function ExperienceItem({title, date,description, location}) {
    return(
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                    <h3 className="text-[#666666]">{title}</h3>
                    <h3 className="text-[#B2B2B2]">{date}</h3>
                </div>
                <div className="flex flex-row gap-x-1.5">
                  <p>{location}</p>
                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}