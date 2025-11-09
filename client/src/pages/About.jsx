import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <section className=" py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
          
          {/* Image (optional placeholder) */}
          <div className="flex justify-center md:justify-start">
            <div className="w-56 h-56 rounded-2xl bg-sky-100 dark:bg-slate-700 flex items-center justify-center">
              <User className="w-24 h-24 text-sky-600 dark:text-sky-300" />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-50 mb-4">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              I’m a front-end developer with a passion for clean design, accessibility, and performance. 
              I enjoy bringing ideas to life through interactive interfaces and love working with tools like 
              React, TailwindCSS, and modern JavaScript.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              When I’m not coding, I’m exploring new design systems, contributing to open source projects, 
              and constantly learning to stay ahead of emerging technologies.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium"
            >
              Learn more about me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
