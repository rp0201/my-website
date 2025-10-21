import React from 'react';

export default function ContactSection() {
    return(
        <div className="flex flex-col gap-y-3">
            <h2>Find me here</h2>
            <div className="flex flex-col gap-y-3">
                <ul className="flex gap-x-3">
                <a href="mailto:rsokhan@proton.me" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5">
                    <li>Email</li>
                    <img src="/Frame.svg" width={14} height={14} alt="Email address"/>
                </a>
                <a href="https://www.linkedin.com/in/rithihs/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5">
                    <li>LinkedIn</li>
                    <img src="/Frame.svg" width={14} height={14} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/rp0201" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5">
                    <li>Github</li>
                    <img src="/Frame.svg" width={14} height={14} alt="LinkedIn"/>
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5">
                    <li>Resume</li>
                    <img src="/Frame.svg" width={14} height={14} alt="LinkedIn"/>
                </a>
                </ul>
            </div>
        </div>
    )
}