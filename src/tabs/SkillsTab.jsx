// src/tabs/SkillsTab.jsx
import { SKILL_DOMAINS } from "../data";

export default function SkillsTab({ isDark }) {
  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0B192C]"
          }`}
        >
          Skills & Capabilities
        </h1>
        <p
          className={`text-sm mt-1 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Focused on technical support, PC hardware exploration, documentation,
          UI/UX, and Unity.
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
                  className={`p-2.5 rounded-xl ${
                    isDark
                      ? "bg-[#0B192C] text-[#C8B594]"
                      : "bg-slate-100 text-[#0B192C]"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3
                    className={`text-base font-bold ${
                      isDark ? "text-white" : "text-[#0B192C]"
                    }`}
                  >
                    {domain.title}
                  </h3>
                  <p
                    className={`text-[11px] ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
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
                      className={`text-[10px] font-mono font-medium ${
                        isDark ? "text-[#C8B594]" : "text-[#7C663D]"
                      }`}
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
    </div>
  );
}
