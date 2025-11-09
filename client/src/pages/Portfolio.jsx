import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Design Projects"];

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading projects:", err);
        setLoading(false);
      });
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-transparent text-slate-800 dark:text-slate-100 px-6 py-16 md:px-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
        <p className="text-slate-500 dark:text-slate-600">
          A showcase of projects that highlight my design and development work.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
              selectedCategory === category
                ? "bg-sky-600 text-white border-sky-600"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-sky-600 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid or Skeletons */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <AnimatePresence>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl shadow-md animate-pulse"
                >
                  <div className="h-40 bg-slate-200 dark:bg-slate-700 rounded-xl mb-4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mb-4"></div>
                </motion.div>
              ))
            : filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="rounded-xl mb-4 w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>

      {/* Modal (same as before) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-6 max-w-xl w-full relative shadow-lg"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 text-slate-500 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                loading="lazy"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-bold mb-2">
                {activeProject.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {activeProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {activeProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-600 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
