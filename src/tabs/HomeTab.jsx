// src/tabs/HomeTab.jsx
import { ArrowRight, Cpu, FileText, Gamepad2, Layout } from "lucide-react";

export default function HomeTab({ isDark, navigateTo }) {
  return (
    <div className="space-y-16">
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
            <span className="text-[#C8B594]">Mastering hardware.</span> <br />
            Documenting systems.
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Hi, I'm{" "}
            <strong className={isDark ? "text-white" : "text-[#0B192C]"}>
              Gab
            </strong>
            . I combine hands-on{" "}
            <strong>tech support & PC hardware exploration</strong>, thorough{" "}
            <strong>project documentation management</strong>, and creative{" "}
            <strong>Frontend, UI/UX & Unity development</strong> into seamless
            user experiences.
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
            className={`text-xs font-bold uppercase tracking-wider mb-4 ${
              isDark ? "text-[#C8B594]" : "text-[#856D43]"
            }`}
          >
            Core Competencies
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg mt-0.5 ${
                  isDark
                    ? "bg-[#0B192C] text-[#C8B594]"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
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
                    isDark ? "text-slate-400 text-xs" : "text-slate-500 text-xs"
                  }
                >
                  PC assembly, diagnostics & OS configuration
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg mt-0.5 ${
                  isDark
                    ? "bg-[#0B192C] text-[#C8B594]"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
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
                    isDark ? "text-slate-400 text-xs" : "text-slate-500 text-xs"
                  }
                >
                  User guides, SRS, QA test runs & wikis
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg mt-0.5 ${
                  isDark
                    ? "bg-[#0B192C] text-[#C8B594]"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
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
                    isDark ? "text-slate-400 text-xs" : "text-slate-500 text-xs"
                  }
                >
                  React, Tailwind CSS & Figma prototyping
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className={`p-2 rounded-lg mt-0.5 ${
                  isDark
                    ? "bg-[#0B192C] text-[#C8B594]"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
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
                    isDark ? "text-slate-400 text-xs" : "text-slate-500 text-xs"
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
          <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">100%</p>
          <p
            className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            Documentation Precision
          </p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">50+</p>
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
          <p className="text-2xl sm:text-3xl font-black text-[#C8B594]">Fast</p>
          <p
            className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}
          >
            Turnaround & Support
          </p>
        </div>
      </div>
    </div>
  );
}
