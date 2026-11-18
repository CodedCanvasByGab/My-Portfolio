import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  Gamepad2,
  Layers,
  Layout,
  Mail,
  Moon,
  Send,
  Sun,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CREDENTIALS_DATA, PROJECTS, SKILL_DOMAINS } from "./data";
import ProjectModal from "./projectModal";

const TAB_ORDER = ["home", "work", "skills", "credentials", "contact"];

// Directional slide variants:
// direction > 0: Moving forward (Rightward in navbar) -> Slide content to the left
// direction < 0: Moving backward (Leftward in navbar) -> Slide content to the right
const pageVariants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.25, ease: "easeOut" },
    },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.18, ease: "easeIn" },
    },
  }),
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [direction, setDirection] = useState(1);
  const activeTabRef = useRef("home");

  const [workFilter, setWorkFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync ref with current tab state
  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  // Handle browser back/forward buttons without breaking direction
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (TAB_ORDER.includes(hash) && hash !== activeTabRef.current) {
        const prevIdx = TAB_ORDER.indexOf(activeTabRef.current);
        const nextIdx = TAB_ORDER.indexOf(hash);
        setDirection(nextIdx > prevIdx ? 1 : -1);
        activeTabRef.current = hash;
        setActiveTab(hash);
      }
    };

    const initialHash = window.location.hash.replace("#", "");
    if (TAB_ORDER.includes(initialHash)) {
      activeTabRef.current = initialHash;
      setActiveTab(initialHash);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (tab) => {
    if (tab === activeTabRef.current) return;
    const currentIdx = TAB_ORDER.indexOf(activeTabRef.current);
    const nextIdx = TAB_ORDER.indexOf(tab);
    const newDir = nextIdx > currentIdx ? 1 : -1;

    setDirection(newDir);
    activeTabRef.current = tab;
    setActiveTab(tab);
    window.location.hash = tab;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("lheegabriel.hosena@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xljbblgb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setSubmitError(data.errors.map((err) => err.message).join(", "));
        } else {
          setSubmitError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setSubmitError("Network error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProjects =
    workFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === workFilter);

  return (
    <div
      style={{
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isDark ? "bg-[#0B192C] text-slate-100" : "bg-[#F8F9FA] text-[#0B192C]"
      }`}
    >
      {/* HEADER / NAVIGATION BAR (Frosted Glass) */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl backdrop-saturate-180 border-b transition-all duration-300 ${
          isDark
            ? "bg-[#0B192C]/55 border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
            : "bg-white/65 border-black/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
          >
            <span
              className={`text-xl font-black tracking-tight ${isDark ? "text-white" : "text-[#0B192C]"}`}
            >
              GAB<span className="text-[#C8B594]">.DEV</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { id: "home", label: "Home" },
              { id: "work", label: "Work" },
              { id: "skills", label: "Skills" },
              { id: "credentials", label: "Credentials" },
              { id: "contact", label: "Contact" },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => navigateTo(tab.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full cursor-pointer ${
                    isActive
                      ? isDark
                        ? "text-white"
                        : "text-[#0B192C]"
                      : isDark
                        ? "text-slate-400 hover:text-slate-200"
                        : "text-slate-600 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                      className={`absolute inset-0 rounded-full ${isDark ? "bg-[#1E3656]" : "bg-slate-200"}`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Theme"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isDark
                  ? "bg-[#11223A]/80 border-[#1E3656] text-[#C8B594] hover:bg-[#193254]"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => navigateTo("contact")}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all shadow cursor-pointer ${
                isDark
                  ? "bg-[#C8B594] text-[#0B192C] hover:bg-[#d8c7a8]"
                  : "bg-[#0B192C] text-white hover:bg-[#162a45]"
              }`}
            >
              Get in touch
              <ChevronRight size={14} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-lg border ${
                isDark
                  ? "bg-[#11223A] border-[#1E3656] text-white"
                  : "bg-white border-slate-200 text-[#0B192C]"
              }`}
            >
              <Layers size={18} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-t px-6 py-4 flex flex-col gap-2 ${
              isDark
                ? "bg-[#0B192C]/85 backdrop-blur-xl border-white/[0.08]"
                : "bg-white/85 backdrop-blur-xl border-black/[0.06]"
            }`}
          >
            {["home", "work", "skills", "credentials", "contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => navigateTo(tab)}
                className={`py-2 px-3 text-left rounded-lg text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? isDark
                      ? "bg-[#1E3656] text-[#C8B594]"
                      : "bg-slate-100 text-[#0B192C] font-semibold"
                    : isDark
                      ? "text-slate-300"
                      : "text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 min-h-[calc(100vh-160px)] flex flex-col overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {/* TAB 1: HOME */}
          {activeTab === "home" && (
            <motion.div
              key="home"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-16"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-4">
                <div className="space-y-6 max-w-2xl">
                  <div
                    className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border ${
                      isDark
                        ? "bg-[#11223A] border-[#1E3656] text-[#C8B594]"
                        : "bg-white border-slate-200 text-[#7C663D] shadow-sm"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Tech Support & Projects
                  </div>

                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] ${
                      isDark ? "text-white" : "text-[#0B192C]"
                    }`}
                  >
                    Building interfaces. <br />
                    <span className="text-[#C8B594]">
                      Mastering hardware.
                    </span>{" "}
                    <br />
                    Documenting systems.
                  </h1>

                  <p
                    className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                  >
                    Hi, I'm{" "}
                    <strong
                      className={isDark ? "text-white" : "text-[#0B192C]"}
                    >
                      Gab
                    </strong>
                    . I combine hands-on{" "}
                    <strong>tech support & PC hardware exploration</strong>,
                    thorough <strong>project documentation management</strong>,
                    and creative{" "}
                    <strong>Frontend, UI/UX & Unity development</strong> into
                    seamless user experiences.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => navigateTo("work")}
                      className={`px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                        isDark
                          ? "bg-[#C8B594] text-[#0B192C] hover:bg-[#d8c7a8]"
                          : "bg-[#0B192C] text-white hover:bg-[#162a45]"
                      }`}
                    >
                      Explore My Work <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => navigateTo("skills")}
                      className={`px-6 py-3 rounded-full text-sm font-medium border transition-all cursor-pointer ${
                        isDark
                          ? "border-[#1E3656] bg-[#11223A] text-slate-200 hover:bg-[#193254]"
                          : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      View Capabilities
                    </button>
                  </div>
                </div>

                <div
                  className={`w-full lg:w-96 p-6 rounded-2xl border transition-all ${
                    isDark
                      ? "bg-[#11223A] border-[#1E3656]"
                      : "bg-white border-slate-200 shadow-md"
                  }`}
                >
                  <h3
                    className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? "text-[#C8B594]" : "text-[#856D43]"}`}
                  >
                    Core Competencies
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg mt-0.5 ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                      >
                        <Cpu size={16} />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                        >
                          Hardware Exploration
                        </p>
                        <p
                          className={
                            isDark
                              ? "text-slate-400 text-xs"
                              : "text-slate-500 text-xs"
                          }
                        >
                          PC assembly, diagnostics & OS configuration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg mt-0.5 ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                      >
                        <FileText size={16} />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                        >
                          Documentation Mgmt
                        </p>
                        <p
                          className={
                            isDark
                              ? "text-slate-400 text-xs"
                              : "text-slate-500 text-xs"
                          }
                        >
                          User guides, SRS, QA test runs & wikis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg mt-0.5 ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                      >
                        <Layout size={16} />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                        >
                          Frontend & UI/UX
                        </p>
                        <p
                          className={
                            isDark
                              ? "text-slate-400 text-xs"
                              : "text-slate-500 text-xs"
                          }
                        >
                          React, Tailwind CSS & Figma prototyping
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg mt-0.5 ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                      >
                        <Gamepad2 size={16} />
                      </div>
                      <div>
                        <p
                          className={`font-semibold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                        >
                          Unity 2D / 3D
                        </p>
                        <p
                          className={
                            isDark
                              ? "text-slate-400 text-xs"
                              : "text-slate-500 text-xs"
                          }
                        >
                          C# mechanics, interactive VR & environments
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border ${
                  isDark
                    ? "bg-[#11223A] border-[#1E3656]"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">
                    100%
                  </p>
                  <p
                    className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Documentation Precision
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">
                    50+
                  </p>
                  <p
                    className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Hardware Builds & Diagnostics
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">
                    Unity & React
                  </p>
                  <p
                    className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Interactive UI Development
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">
                    Fast
                  </p>
                  <p
                    className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    Turnaround & Support
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: WORK */}
          {activeTab === "work" && (
            <motion.div
              key="work"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1
                    className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-[#0B192C]"}`}
                  >
                    Projects & Case Studies
                  </h1>
                  <p
                    className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                  >
                    Interactive applications, gameplay mechanics, and technical
                    system implementations.
                  </p>
                </div>

                <div
                  className={`inline-flex p-1 rounded-full border self-start ${
                    isDark
                      ? "bg-[#11223A] border-[#1E3656]"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {[
                    { id: "all", label: "All" },
                    { id: "systems", label: "Capstone & Systems" },
                    { id: "unity", label: "Unity 3D" },
                    { id: "multimedia", label: "Game Dev & Interactive" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setWorkFilter(filter.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        workFilter === filter.id
                          ? isDark
                            ? "bg-[#C8B594] text-[#0B192C] font-semibold"
                            : "bg-[#0B192C] text-white"
                          : isDark
                            ? "text-slate-400 hover:text-white"
                            : "text-slate-600 hover:text-black"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#11223A] border-[#1E3656] hover:border-[#C8B594]"
                        : "bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                            isDark
                              ? "bg-[#0B192C] text-[#C8B594] border-[#1E3656]"
                              : "bg-slate-100 text-[#7C663D] border-slate-200"
                          }`}
                        >
                          {project.categoryLabel}
                        </span>
                        <div
                          className={`p-1.5 rounded-full ${isDark ? "bg-[#0B192C] text-slate-400" : "bg-slate-100 text-slate-600"}`}
                        >
                          <ExternalLink size={13} />
                        </div>
                      </div>
                      <h3
                        className={`text-xl font-bold mb-2 group-hover:text-[#C8B594] transition-colors ${
                          isDark ? "text-white" : "text-[#0B192C]"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-700/20 dark:border-[#1E3656] space-y-3">
                      <p className="text-[11px] font-mono text-[#C8B594]">
                        • {project.impact}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                              isDark
                                ? "bg-[#0B192C] text-slate-300"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: SKILLS */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div>
                <h1
                  className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-[#0B192C]"}`}
                >
                  Skills & Capabilities
                </h1>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  Focused on technical support, PC hardware exploration,
                  documentation, UI/UX, and Unity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_DOMAINS.map((domain) => {
                  const Icon = domain.icon;
                  return (
                    <div
                      key={domain.id}
                      className={`p-6 rounded-2xl border transition-all ${
                        isDark
                          ? "bg-[#11223A] border-[#1E3656]"
                          : "bg-white border-slate-200 shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-2.5 rounded-xl ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3
                            className={`text-base font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                          >
                            {domain.title}
                          </h3>
                          <p
                            className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}
                          >
                            {domain.subtitle}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 pt-2">
                        {domain.skills.map((skill, index) => (
                          <li
                            key={index}
                            className={`flex items-center justify-between text-xs p-2 rounded-lg ${
                              isDark
                                ? "bg-[#0B192C]/60 text-slate-200"
                                : "bg-slate-50 text-slate-800"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C8B594]" />
                              {skill.name}
                            </span>
                            <span
                              className={`text-[10px] font-mono font-medium ${isDark ? "text-[#C8B594]" : "text-[#7C663D]"}`}
                            >
                              {skill.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 4: CREDENTIALS */}
          {activeTab === "credentials" && (
            <motion.div
              key="credentials"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div>
                <h1
                  className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-[#0B192C]"}`}
                >
                  Credentials & Experience
                </h1>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  My technical background, milestones, and qualifications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {CREDENTIALS_DATA.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2
                      className={`text-base font-bold uppercase tracking-wider flex items-center gap-2 ${
                        isDark ? "text-[#C8B594]" : "text-[#856D43]"
                      }`}
                    >
                      {idx === 0 ? (
                        <Briefcase size={16} />
                      ) : (
                        <Award size={16} />
                      )}
                      {section.category}
                    </h2>

                    <div className="space-y-4">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className={`p-6 rounded-2xl border transition-all ${
                            isDark
                              ? "bg-[#11223A] border-[#1E3656]"
                              : "bg-white border-slate-200 shadow-sm"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3
                              className={`text-base font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                            >
                              {item.role}
                            </h3>
                            {item.period && (
                              <span
                                className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                                  isDark
                                    ? "bg-[#0B192C] text-[#C8B594]"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {item.period}
                              </span>
                            )}
                          </div>
                          <p
                            className={`text-xs font-medium mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                          >
                            {item.organization}
                          </p>
                          <p
                            className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                          >
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 5: CONTACT */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-8"
            >
              <div>
                <h1
                  className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-[#0B192C]"}`}
                >
                  Get in Touch
                </h1>
                <p
                  className={`text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}
                >
                  Have a question, tech support inquiry, project documentation
                  task, or development opportunity? Let's talk.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-4 lg:col-span-1">
                  <div
                    className={`p-6 rounded-2xl border ${
                      isDark
                        ? "bg-[#11223A] border-[#1E3656]"
                        : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2.5 rounded-xl ${isDark ? "bg-[#0B192C] text-[#C8B594]" : "bg-slate-100 text-[#0B192C]"}`}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <p
                          className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}
                        >
                          Direct Email
                        </p>
                        <p
                          className={`text-xs font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                        >
                          lheegabriel.hosena@gmail.com
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={copyEmail}
                      className={`w-full mt-2 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        copied
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : isDark
                            ? "bg-[#0B192C] border-[#1E3656] text-[#C8B594] hover:bg-[#152a48]"
                            : "bg-slate-50 border-slate-200 text-[#0B192C] hover:bg-slate-100"
                      }`}
                    >
                      {copied ? (
                        <>
                          <CheckCircle size={14} /> Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Email Address
                        </>
                      )}
                    </button>
                  </div>

                  <div
                    className={`p-6 rounded-2xl border ${
                      isDark
                        ? "bg-[#11223A] border-[#1E3656]"
                        : "bg-white border-slate-200 shadow-sm"
                    }`}
                  >
                    <h4
                      className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-[#C8B594]" : "text-[#856D43]"}`}
                    >
                      Availability
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}
                    >
                      Accepting hardware consultation, technical writing /
                      documentation assignments, and React/Unity projects.
                    </p>
                  </div>
                </div>

                <div
                  className={`p-6 md:p-8 rounded-2xl border lg:col-span-2 ${
                    isDark
                      ? "bg-[#11223A] border-[#1E3656]"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  {formSubmitted ? (
                    <div className="py-12 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                        <CheckCircle size={28} />
                      </div>
                      <h3
                        className={`text-lg font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                      >
                        Message Received!
                      </h3>
                      <p
                        className={`text-xs max-w-sm mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Thank you for reaching out. I will respond to your
                        message promptly.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className={`mt-4 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                          isDark
                            ? "bg-[#1E3656] text-white"
                            : "bg-slate-100 text-[#0B192C]"
                        }`}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {submitError && (
                        <div className="p-3 rounded-xl text-xs bg-rose-500/10 border border-rose-500/30 text-rose-400">
                          {submitError}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label
                            className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                          >
                            Your Name
                          </label>
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="Alex Morgan"
                            className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                              isDark
                                ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                                : "bg-slate-50 border-slate-200 text-[#0B192C]"
                            }`}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label
                            className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                          >
                            Email Address
                          </label>
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="alex@example.com"
                            className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                              isDark
                                ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                                : "bg-slate-50 border-slate-200 text-[#0B192C]"
                            }`}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          Topic / Inquiry
                        </label>
                        <select
                          name="topic"
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none cursor-pointer ${
                            isDark
                              ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                              : "bg-slate-50 border-slate-200 text-[#0B192C]"
                          }`}
                        >
                          <option>Hardware Support & Diagnostics</option>
                          <option>Project Documentation Management</option>
                          <option>Frontend & UI/UX Design</option>
                          <option>Unity 2D / 3D Development</option>
                          <option>General Collaboration</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label
                          className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          name="message"
                          placeholder="Tell me a bit about your project or what you need assistance with..."
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none resize-none ${
                            isDark
                              ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                              : "bg-slate-50 border-slate-200 text-[#0B192C]"
                          }`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                          isDark
                            ? "bg-[#C8B594] text-[#0B192C] hover:bg-[#d8c7a8]"
                            : "bg-[#0B192C] text-white hover:bg-[#162a45]"
                        } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
                      >
                        <Send size={14} />{" "}
                        {isSubmitting ? "Sending message..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />

      {/* FOOTER */}
      <footer
        className={`border-t py-8 transition-colors ${
          isDark
            ? "border-[#1E3656] bg-[#07111E]"
            : "border-slate-200 bg-slate-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={isDark ? "text-slate-400" : "text-slate-600"}>
            © {new Date().getFullYear()}{" "}
            <strong className={isDark ? "text-white" : "text-black"}>
              GAB.DEV
            </strong>{" "}
            (Gabriel). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["home", "work", "skills", "credentials", "contact"].map((t) => (
              <button
                key={t}
                onClick={() => navigateTo(t)}
                className={`cursor-pointer capitalize ${isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-black"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
