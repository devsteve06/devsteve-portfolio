
import { Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
   <>
    {/* Hero Section */}
      <section className="min-h-screen  flex flex-col items-center justify-center text-center px-6">
        <div className="p-4 bg-sky-100 dark:bg-sky-800 rounded-full mb-6">
          <Code2 className="w-12 h-12 text-sky-600 dark:text-sky-300" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-50 mb-4">
          Hi, I'm <span className="text-sky-500">Steve Eugene</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
          A passionate front-end developer who loves crafting beautiful, responsive, and user-friendly web experiences.
        </p>

        <Link
          to="/portfolio"
          className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full hover:bg-sky-600 transition duration-300"
        >
          View My Work <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
   </>
  );
}
