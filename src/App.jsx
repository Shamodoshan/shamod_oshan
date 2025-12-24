import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMoon, HiSun, HiOutlineChevronDown, HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaLayerGroup } from 'react-icons/fa';

// --- Components ---

const Navbar = ({ darkMode, toggleTheme }) => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
    <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 border border-gray-200 dark:border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg">
      <a href="#home" className="text-xl font-bold tracking-tighter dark:text-white">
        SHAMOD  OSHAN<span className="text-purple-500">.</span>
      </a>
      <div className="hidden md:flex gap-8 text-sm font-medium dark:text-gray-300">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors">
            {item}
          </a>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all"
      >
        {darkMode ? <HiSun className="text-yellow-400 text-xl" /> : <HiMoon className="text-gray-600 text-xl" />}
      </button>
    </div>
  </nav>
);

const Section = ({ id, children, className }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`min-h-screen w-full flex flex-col justify-center items-center px-6 py-20 ${className}`}
  >
    {children}
  </motion.section>
);
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
    >
      <div className={`h-64 bg-gradient-to-tr ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>

        {/* The Animated "Screenshot" mockup */}
        <motion.div
          className="absolute -bottom-10 left-10 right-10 h-full bg-white dark:bg-slate-800 rounded-t-xl shadow-2xl p-4"
          initial={{ y: 40 }}
          whileHover={{ y: 16 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 text-sm">
            App Screenshot
          </div>
        </motion.div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold dark:text-white group-hover:text-purple-500 transition">{project.title}</h3>
          <div className="flex gap-3 text-gray-400">
            <a href="#" className="hover:text-purple-500 transition"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-purple-500 transition"><HiExternalLink size={22} /></a>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="bg-gray-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-300 transition-colors duration-500 font-sans selection:bg-purple-500 selection:text-white">

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 hidden dark:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      </div>

      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />

      {/* Hero Section */}
      <Section id="home" className="relative text-center">

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight dark:text-white">
          Building digital <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">experiences</span> that matter.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          I'm a Full Stack Developer specializing in building exceptional, human-centered products.
        </p>
        <div className="mt-10 flex gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-full font-bold">
            View Work
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 border border-gray-300 dark:border-white/10 rounded-full font-medium">
            Contact Me
          </motion.button>
        </div>
        <div className="absolute bottom-10 animate-bounce text-2xl"><HiOutlineChevronDown /></div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">About Me</h2>
            <div className="h-1 w-20 bg-purple-500 rounded-full mb-8"></div>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              I’m a passionate Full Stack Developer focused on building clean, user-friendly applications.
              <br />
              I love modern stacks like React, Node.js, Tailwind, and cloud platforms.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl text-white shadow-2xl">
            <div className="text-5xl font-bold mb-2">10+</div>
            <div className="uppercase tracking-widest text-sm opacity-80 mb-8">Projects Completed</div>
            <div className="h-px bg-white/20 mb-8" />
            <div className="text-5xl font-bold mb-2">1+</div>
            <div className="uppercase tracking-widest text-sm opacity-80">Years Experience</div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gray-100/50 dark:bg-white/5">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 dark:text-white">My Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            { title: 'Frontend', icon: <FaCode />, skills: ['Html', 'Css', 'Java script', 'React', 'Tailwind', 'boostrap'], color: 'text-blue-400' },
            { title: 'Backend', icon: <FaServer />, skills: ['Node.js', 'PostgreSQL', 'Mysql', 'Python'], color: 'text-green-400' },
            { title: 'DevOps', icon: <FaLayerGroup />, skills: ['Figma', 'Git', 'Github'], color: 'text-purple-400' }
          ].map((stack, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/5 shadow-xl"
            >
              <div className={`text-3xl mb-6 ${stack.color}`}>{stack.icon}</div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{stack.title}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map(s => <span key={s} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-sm">{s}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">Featured Work</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">A selection of projects that showcase my passion for design and coding.</p>
            </div>
            <a href="#" className="text-purple-500 font-semibold hover:text-purple-400 transition flex items-center gap-2 mb-2">
              View All Projects <HiExternalLink />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard project={{
              title: "portfolio website",
              description: "A comprehensive dashboard for monitoring business metrics with real-time data visualization.",
              tags: ["React", "Tailwind"],
              gradient: "from-blue-500 to-purple-500",
            }} />

            <ProjectCard project={{
              title: "E-Commerce System",
              description: "Full-featured shopping platform with Stripe integration, admin dashboard, and inventory management.",
              tags: ["Next.js", "Stripe", "Node.js"],
              gradient: "from-emerald-500 to-teal-900",
            }} />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-4xl w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Let's build something <span className="text-purple-500">amazing</span></h2>
          <p className="mb-12 text-gray-500">Currently open for new opportunities and interesting projects.</p>
          <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Name" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-purple-500 transition" />
            <input type="email" placeholder="Email" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-purple-500 transition" />
            <textarea placeholder="Message" rows="4" className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 outline-none focus:border-purple-500 transition" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/20"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </Section>

      <footer className="py-10 text-center opacity-50 text-sm">
        © 2025 Shamod Oshan.
      </footer>
    </div>
  );
}
