import { Laptop, Cake, MapPinned, Clock, BriefcaseBusiness } from "lucide-react";
import React from "react";

type ProfileTabProps = {
  handleTabChange: (tab: string) => void;
};

export default function ProfileTab({ handleTabChange }: ProfileTabProps) {
  return (
    <div className="text-white flex flex-row justify-evenly z-10">
      <div id="profile" className="md:w-7/12 w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
        <div>
          <h1 className="text-4xl font-bold">
            Hi, I'm <span className="text-red-400">Ian Hoogstrate</span>
          </h1>
          <div className="mt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPinned className="w-5 h-5 text-red-400" />
              <span>Based in Växjö, Sweden</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cake className="w-5 h-5 text-red-400" />
              <span>22 Years Old</span>
            </div>
            <div className="flex items-center space-x-2">
              <Laptop className="w-5 h-5 text-red-400" />
              <span>Data Scientist/ AI Engineer/ Full Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2">
              <BriefcaseBusiness className="w-5 h-5 text-red-400" />
              <span>0 Years of Relevant Work Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span>2 Years of Sales Work Experience</span>
            </div>
          </div>
          <p className="mt-6 text-gray-300">
            I'm in love with AI and data, constantly exploring how intelligent systems can drive smarter decisions. I also enjoy building full stack applications on the side, turning ideas into polished, functional products.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="mailto:ianhoogstrate@gmail.com" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Get in Touch
            </a>
            <button onClick={() => handleTabChange("Projects")} className="border border-gray-600 hover:border-white text-white py-2 px-4 rounded">
              View Projects
            </button>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["Python", "R", "Machine Learning", "TypeScript", "Next.js", "TailwindCSS", "C#", "Java", "PHP"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Projects I'm most proud of</h2>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2"><span className="text-red-400">→</span><a href="https://wage-predictor-app.vercel.app/">Wage Predictor App</a></li>
                <li className="flex items-center space-x-2"><span className="text-red-400">→</span><a href="https://bachelor-thesis-iota.vercel.app/">CFA Companion</a></li>
                <li className="flex items-center space-x-2"><span className="text-red-400">→</span><a href="https://ianhoogstrate.itch.io/collect-the-coin">My first ever coding project</a></li>
                <li className="flex items-center space-x-2"><span className="text-red-400">→</span><a href="https://vcoa.tmcplatform.be/">Competition Platform for my school</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

