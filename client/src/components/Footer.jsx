
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/devsteve06",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://linkedin.con/eugene-eua525b",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      link: "mailto:eusteve906@gmail.com",
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-4">
          Let’s Connect
        </h2>
        <div className="flex justify-center gap-5 mb-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} Steve Eugene. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
