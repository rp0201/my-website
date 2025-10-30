import ProjectSection from '../components/sections/ProjectSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-[90px] px-4">
        <div className="flex flex-col gap-y-6 max-w-[560px] w-full">
          <div className="flex flex-row justify-between">
              <h1>Rithi Hem-Sokhan</h1>
              <nav className="flex gap-x-3">
                <a href="/" className="text-blue-500 hover:underline">About</a>
              </nav>
            </div>
          <p>Hi! I'm a computer science and business student at Lehigh University. I love building useful, cool things and lately, I've been really into reading.</p>
          <ExperienceSection/>
          <ProjectSection/>
          <ContactSection/>
        </div>
      </div>
    </div>
  );
}
