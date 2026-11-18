// src/components/Header.jsx
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Layers, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Header({ isDark, setIsDark, activeTab, navigateTo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (tabId) => {
    navigateTo(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="sticky top-0 z-40 flex flex-col items-center justify-center w-full pointer-events-none"
      animate={{
        paddingTop: isScrolled ? 14 : 0,
        paddingLeft: isScrolled ? 16 : 0,
        paddingRight: isScrolled ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 26,
        mass: 0.8,
      }}
    >
      <motion.div
        layout
        className={`pointer-events-auto relative flex items-center justify-between w-full transition-colors duration-500 ${
          isScrolled
            ? isDark
              ? "bg-[#0B192C]/75 border-white/[0.12] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.7)]"
              : "bg-white/80 border-black/[0.08] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.12)]"
            : isDark
              ? "bg-[#0B192C] border-[#1E3656] shadow-none"
              : "bg-white border-slate-200 shadow-sm"
        }`}
        animate={{
          maxWidth: isScrolled ? "56rem" : "100%",
          height: isScrolled ? 60 : 76,
          borderRadius: isScrolled ? 9999 : 0,
          borderWidth: 1,
          paddingLeft: isScrolled ? 20 : 28,
          paddingRight: isScrolled ? 20 : 28,
          backdropFilter: isScrolled
            ? "blur(24px) saturate(180%)"
            : "blur(0px) saturate(100%)",
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 26,
          mass: 0.8,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 text-left cursor-pointer focus:outline-none"
        >
          <span
            className={`font-black tracking-tight transition-all duration-300 ${
              isScrolled ? "text-lg md:text-xl" : "text-xl"
            } ${isDark ? "text-white" : "text-[#0B192C]"}`}
          >
            GAB<span className="text-[#C8B594]">.DEV</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_ITEMS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}
                className={`relative py-1.5 text-xs md:text-sm font-medium transition-all rounded-full cursor-pointer ${
                  isScrolled ? "px-3.5" : "px-4"
                } ${
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
                    className={`absolute inset-0 rounded-full ${
                      isDark ? "bg-[#1E3656]" : "bg-slate-200"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className={`rounded-full border transition-all cursor-pointer ${
              isScrolled ? "p-2" : "p-2.5"
            } ${
              isDark
                ? "bg-[#11223A]/80 border-[#1E3656] text-[#C8B594] hover:bg-[#193254]"
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm"
            }`}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide transition-all shadow cursor-pointer ${
              isScrolled ? "px-4 py-2 text-[11px]" : "px-5 py-2.5 text-xs"
            } ${
              isDark
                ? "bg-[#C8B594] text-[#0B192C] hover:bg-[#d8c7a8]"
                : "bg-[#0B192C] text-white hover:bg-[#162a45]"
            }`}
          >
            Get in touch
            <ChevronRight size={13} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden rounded-lg border transition-all ${
              isScrolled ? "p-2" : "p-2.5"
            } ${
              isDark
                ? "bg-[#11223A] border-[#1E3656] text-white"
                : "bg-white border-slate-200 text-[#0B192C]"
            }`}
          >
            {mobileMenuOpen ? <X size={17} /> : <Layers size={17} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`pointer-events-auto md:hidden mt-2 w-[92%] max-w-sm rounded-2xl border p-3 flex flex-col gap-1.5 shadow-xl backdrop-blur-2xl ${
              isDark
                ? "bg-[#0B192C]/95 border-white/[0.12] text-slate-200"
                : "bg-white/95 border-slate-200 text-[#0B192C]"
            }`}
          >
            {NAV_ITEMS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleNavClick(tab.id)}
                className={`py-2 px-3 text-left rounded-xl text-xs font-semibold capitalize transition-all ${
                  activeTab === tab.id
                    ? isDark
                      ? "bg-[#1E3656] text-[#C8B594]"
                      : "bg-slate-100 text-[#0B192C]"
                    : isDark
                      ? "text-slate-300 hover:bg-[#11223A]"
                      : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
