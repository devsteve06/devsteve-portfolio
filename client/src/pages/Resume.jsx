// src/pages/Resume.jsx
import { motion } from "framer-motion";
import { FileText, Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-6 py-16 md:px-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <FileText className="w-10 h-10 text-sky-600 dark:text-sky-400" />
        </div>
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
        <p className="text-slate-500 dark:text-slate-400">My journey, experience, and education</p>
      </div>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-sky-500" /> Experience
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Front-End Developer — WebDevOpen</h3>
            <p className="text-slate-500 dark:text-slate-400">Jan 2024 – Present</p>
            <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300">
              <li>Developed responsive React components using TailwindCSS.</li>
              <li>Collaborated with designers to improve UI/UX consistency.</li>
              <li>Optimized front-end performance and accessibility.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-sky-500" /> Education
        </h2>

        <div>
          <h3 className="text-xl font-bold">B.Sc. in Computer Science</h3>
          <p className="text-slate-500 dark:text-slate-400">University of the People — 2023–Present</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
        >
          Download Resume (PDF)
        </a>
      </div>
    </motion.section>
  );
}
