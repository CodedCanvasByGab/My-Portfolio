// src/tabs/CredentialsTab.jsx
import { Award, Briefcase } from "lucide-react";
import { CREDENTIALS_DATA } from "../data";

export default function CredentialsTab({ isDark }) {
  return (
    <div className="space-y-10">
      <div>
        <h1
          className={`text-4xl sm:text-5xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0B192C]"
          }`}
        >
          Credentials & Experience
        </h1>
        <p
          className={`text-base mt-1 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          My technical background, milestones, and qualifications.
        </p>
      </div>

      {/* Vertically stacked sections */}
      <div className="flex flex-col gap-12">
        {CREDENTIALS_DATA.map((section, idx) => (
          <div key={idx} className="space-y-5">
            <h2
              className={`text-base md:text-lg font-bold uppercase tracking-wider flex items-center gap-2.5 pb-2.5 border-b ${
                isDark
                  ? "text-[#C8B594] border-[#1E3656]"
                  : "text-[#856D43] border-slate-200"
              }`}
            >
              {idx === 0 ? <Briefcase size={20} /> : <Award size={20} />}
              {section.category}
            </h2>

            {/* Vertically stacked cards */}
            <div className="flex flex-col gap-4">
              {section.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className={`p-6 md:p-7 rounded-2xl border transition-all ${
                    isDark
                      ? "bg-[#11223A] border-[#1E3656] hover:border-[#1E3656]/80"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3
                      className={`text-lg md:text-xl font-bold ${
                        isDark ? "text-white" : "text-[#0B192C]"
                      }`}
                    >
                      {item.role}
                    </h3>
                    {item.period && (
                      <span
                        className={`text-xs font-mono px-3 py-0.5 rounded-full ${
                          isDark
                            ? "bg-[#0B192C] text-[#C8B594] border border-[#1E3656]"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      isDark ? "text-[#C8B594]" : "text-[#7C663D]"
                    }`}
                  >
                    {item.organization}
                  </p>
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
