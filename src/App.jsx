// src/App.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectModal from "./components/projectModal";

import ContactTab from "./tabs/ContactTab";
import CredentialsTab from "./tabs/CredentialsTab";
import HomeTab from "./tabs/HomeTab";
import SkillsTab from "./tabs/SkillsTab";
import WorkTab from "./tabs/WorkTab";

const TAB_ORDER = ["home", "work", "skills", "credentials", "contact"];

// Longer, silky-smooth horizontal slide variants
const pageVariants = {
  initial: (dir) => ({
    opacity: 0,
    x: dir > 0 ? 120 : -120,
    filter: "blur(4px)",
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // Apple-style smooth deceleration
    },
  },
  exit: (dir) => ({
    opacity: 0,
    x: dir > 0 ? -120 : 120,
    filter: "blur(4px)",
    transition: {
      duration: 0.32,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [direction, setDirection] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const activeTabRef = useRef("home");

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

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
    setDirection(nextIdx > currentIdx ? 1 : -1);
    activeTabRef.current = tab;
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        fontFamily:
          "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-[#0B192C] text-slate-100" : "bg-[#F8F9FA] text-[#0B192C]"
      }`}
    >
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        activeTab={activeTab}
        navigateTo={navigateTo}
      />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 min-h-[calc(100vh-160px)] flex flex-col overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {activeTab === "home" && (
              <HomeTab isDark={isDark} navigateTo={navigateTo} />
            )}
            {activeTab === "work" && (
              <WorkTab isDark={isDark} onSelectProject={setSelectedProject} />
            )}
            {activeTab === "skills" && <SkillsTab isDark={isDark} />}
            {activeTab === "credentials" && <CredentialsTab isDark={isDark} />}
            {activeTab === "contact" && <ContactTab isDark={isDark} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <ProjectModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />

      <Footer isDark={isDark} navigateTo={navigateTo} />
    </div>
  );
}
