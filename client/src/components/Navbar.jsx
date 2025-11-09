import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Sync theme with system preference
  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      localStorage.getItem("theme") === "dark"
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const links = [
    { name: "Home", to: "/" },
    {name:"About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Resume", to: "/resume" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-sky-600 dark:text-sky-400 tracking-tight"
        >
          Steve.dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`transition font-medium ${
                location.pathname === link.to
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-sky-400" />
            ) : (
              <Moon className="w-5 h-5 text-sky-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-slate-200 dark:bg-slate-800"
        >
          {open ? (
            <X className="w-6 h-6 text-sky-500" />
          ) : (
            <Menu className="w-6 h-6 text-sky-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`block text-lg font-medium transition ${
                location.pathname === link.to
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-600"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-800"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-sky-400" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-sky-600" /> Dark Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
