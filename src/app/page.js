import Image from "next/image";
import HoverVideoDisplay from "../components/HoverVideoDisplay";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-[90px]">
        <div className="flex flex-col gap-y-6 max-w-[560px] w-full">
          <h1>Rithi Hem-Sokhan</h1>
          <p>Hi! I'm a computer science and business student at <HoverVideoDisplay videoSrc="/videos/lehighu.mp4">Lehigh University</HoverVideoDisplay>. I love building useful, cool things and lately, I've been really into <HoverVideoDisplay videoSrc="/videos/lehighu.mp4">reading</HoverVideoDisplay>.</p>
<div className="flex flex-col gap-y-6">
            <h2>Experience</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                  <h3 className="text-[#666666]">CSE007 Grader</h3>
                  <h3 className="text-[#B2B2B2]">August 2025 - Present</h3>
                </div>
              </div>
              <p>Assisting students with coding concepts during weekly labs and grading assignments and exams in an introductory programming course.</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h2>Projects</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                  <h3 className="text-[#666666]">AI-Assisted Visual Automation</h3>
                  <h3 className="text-[#B2B2B2]">October 2025</h3>
                </div>
                <div className="flex flex-row gap-x-1.5">
                  <a href="https://github/rp0201" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5 items-center">
                    Link
                    <img src="/Frame.svg" width={14} height={14} alt="Auxel Github Repo"/>
                  </a>
                </div>
              </div>
              <p>Integrated YoloV8 + CLIPSeg with Selenium to automate visual tasks on complex web interfaces.</p>
              <ul className="flex gap-x-3">
                <li>Python</li>
                <li>PyTorch</li>
                <li>YoloV8</li>
                <li>CLIPSeg</li>
                <li>Selenium</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                  <h3 className="text-[#666666]">Proxy Tester Application</h3>
                  <h3 className="text-[#B2B2B2]">In progress</h3>
                </div>
                <div className="flex flex-row gap-x-1.5">
                  <a href="https://github/rp0201" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5 items-center">
                    Link
                    <img src="/Frame.svg" width={14} height={14} alt="Auxel Github Repo"/>
                  </a>
                </div>
              </div>
              <p>A fast, open-source proxy tester that checks thousands of residential & ISP proxies at once with filtering and management features</p>
              <ul className="flex gap-x-3">
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
