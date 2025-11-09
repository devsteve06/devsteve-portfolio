// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Code, Palette, MonitorSmartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-sky-500" />,
      title: "Web Development",
      description:
        "I build fast, responsive, and accessible websites using modern frameworks like React and TailwindCSS.",
    },
    {
      icon: <Palette className="w-8 h-8 text-sky-500" />,
      title: "UI/UX Design",
      description:
        "I design intuitive, user-centered interfaces that focus on simplicity, clarity, and performance.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-sky-500" />,
      title: "Responsive Design",
      description:
        "Every project I build adapts seamlessly across all screen sizes — from mobile to desktop.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-transparent text-slate-800 dark:text-slate-100 px-6 py-16 md:px-20"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Services</h1>
        <p className="text-slate-500 dark:text-slate-400">
          What I offer to help you create outstanding digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
