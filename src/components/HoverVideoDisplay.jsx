'use client';

import { useState } from 'react';

export default function HoverVideoDisplay({children, videoSrc}){
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0});

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY});
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <>
            <span
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
            >
                {children}
            </span>

            {isHovering && (
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    className="pointer-events-none fixed w-48 h-29"
                    style={{top: mousePos.y + 10,
                            left: mousePos.x + 10,
                    }}

                />
            )}
        </>
    )
}