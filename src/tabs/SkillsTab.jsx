// src/tabs/SkillsTab.jsx
import { SKILL_DOMAINS } from "../data";

export default function SkillsTab({ isDark }) {
  return (
    <div className="space-y-10">
      <div>
        <h1
          className={`text-4xl sm:text-5xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0B192C]"
          }`}
        >
          Skills & Capabilities
        </h1>
        <p
          className={`text-base mt-1 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Focused on technical support, PC hardware exploration, documentation,
          UI/UX, and Unity.
        </p>
      </div>

      {/* Vertically Stacked Skill Domains */}
      <div className="flex flex-col gap-6">
        {SKILL_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.id}
              className={`p-6 md:p-7 rounded-2xl border transition-all ${
                isDark
                  ? "bg-[#11223A] border-[#1E3656] hover:border-[#1E3656]/80"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {/* Domain Header */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-700/20 dark:border-[#1E3656]">
                <div
                  className={`p-2.5 rounded-xl ${
                    isDark
                      ? "bg-[#0B192C] text-[#C8B594]"
                      : "bg-slate-100 text-[#0B192C]"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3
                    className={`text-lg md:text-xl font-bold ${
                      isDark ? "text-white" : "text-[#0B192C]"
                    }`}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {domain.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Grid (2-column inside full-width card for a clean spec-sheet look) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {domain.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between text-sm p-3 rounded-xl transition-colors ${
                      isDark
                        ? "bg-[#0B192C]/60 text-slate-200 hover:bg-[#0B192C]"
                        : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8B594]" />
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs font-mono font-medium px-2 py-0.5 rounded ${
                        isDark
                          ? "bg-[#11223A] text-[#C8B594] border border-[#1E3656]"
                          : "bg-white text-[#7C663D] border border-slate-200"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
