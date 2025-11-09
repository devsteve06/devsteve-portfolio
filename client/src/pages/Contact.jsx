// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (You can connect this to your backend later)");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-transparent text-slate-800 dark:text-slate-100 px-6 py-16 md:px-20"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-slate-500 dark:text-slate-400">
          I'd love to hear from you — whether it’s a project, question, or just a hello!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-sky-500" />
            <p>eusteve906@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-sky-500" />
            <p>+254 769 256 484</p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-sky-500" />
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-sky-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
