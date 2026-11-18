// src/tabs/CredentialsTab.jsx
import { Award, Briefcase } from "lucide-react";
import { CREDENTIALS_DATA } from "../data";

export default function CredentialsTab({ isDark }) {
  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0B192C]"
          }`}
        >
          Credentials & Experience
        </h1>
        <p
          className={`text-sm mt-1 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
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
              {idx === 0 ? <Briefcase size={16} /> : <Award size={16} />}
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
                      className={`text-base font-bold ${
                        isDark ? "text-white" : "text-[#0B192C]"
                      }`}
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
                    className={`text-xs font-medium mb-3 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {item.organization}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
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
