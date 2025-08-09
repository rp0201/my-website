import Image from "next/image";
import HoverVideoDisplay from "../components/HoverVideoDisplay";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-[90px]">
        <div className="flex flex-col gap-y-6 max-w-[560px] w-full">
          <h1>Rithi Hem-Sokhan</h1>
          <p>Hello—I’m a 19 year old from Pennsylvania currently majoring in Computer Science and Business at <HoverVideoDisplay videoSrc="/videos/lehighu.mp4">Lehigh University</HoverVideoDisplay>.</p>
          <p>I’m an aspiring full-stack developer who has an emphasis on frontend design and development. I enjoy designing <HoverVideoDisplay videoSrc="/videos/gojoo.mp4">good looking</HoverVideoDisplay> experiences and building end-to-end.</p>
          <div className="flex flex-col gap-y-6">
            <h2>Projects</h2>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                  <h3 className="text-[#666666]">Oncourse - Conquor Class Registry</h3>
                  <h3 className="text-[#B2B2B2]">September 2025</h3>
                </div>
                <div className="flex flex-row gap-x-1.5">
                  <a href="https://github/rp0201" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5 items-center">
                    Link
                    <img src="/Frame.svg" width={14} height={14} alt="Auxel Github Repo"/>
                  </a>
                </div>
              </div>
              <p>Automated class registry desktop application that allows users to register for classes ahead of time using Puppeteer (for educational purposes). Users can also plan their courses more effectively using in-house scheduling tools and unlock insights on classes/professors.</p>
              <ul className="flex gap-x-3">
                <li>Vite</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Puppeteer</li>
                <li>Electron</li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-1.5 items-center justify-between">
                <div className="flex flex-row gap-x-1.5">
                  <h3 className="text-[#666666]">Auxel - Proxy Tester Application</h3>
                  <h3 className="text-[#B2B2B2]">In progress</h3>
                </div>
                <div className="flex flex-row gap-x-1.5">
                  <a href="https://github/rp0201" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-x-1.5 items-center">
                    Link
                    <img src="/Frame.svg" width={14} height={14} alt="Auxel Github Repo"/>
                  </a>
                </div>
              </div>
              <p>A fast, open-source proxy tester that checks thousands of residential & ISP proxies at once. Includes real-time status, speed metrics, filtering tools, and bulk actions for efficient proxy management.</p>
              <ul className="flex gap-x-3">
                <li>CSS</li>
                <li>Javascript</li>
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
