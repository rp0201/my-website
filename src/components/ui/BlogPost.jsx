import React from 'react';

export default function BlogPost({title, date, description, link, stack=[]}) {
    return (
        <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-1.5 items-center justify-between">
            <div className="flex flex-row gap-x-1.5">
                <h3 className="text-[#666666]">{title}</h3>
                <h3 className="text-[#B2B2B2]">{date}</h3>
            </div>
            <div className="flex flex-row gap-x-1.5">
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5 items-center">
                    Read
                    <img src="/Frame.svg" width={14} height={14} alt="Project link repo"/>
                </a>
            </div>
            </div>
            <p>{description}</p>
        </div>
    )
}