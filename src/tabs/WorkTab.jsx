// src/tabs/WorkTab.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "../data";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "systems", label: "Capstone & Systems" },
  { id: "unity", label: "Unity 3D" },
  { id: "multimedia", label: "Game Dev & Interactive" },
];

export default function WorkTab({ isDark, onSelectProject }) {
  const [workFilter, setWorkFilter] = useState("all");

  const filteredProjects =
    workFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === workFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1
            className={`text-3xl sm:text-4xl font-black tracking-tight ${
              isDark ? "text-white" : "text-[#0B192C]"
            }`}
          >
            Projects & Case Studies
          </h1>
          <p
            className={`text-sm mt-1 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Interactive applications, gameplay mechanics, and technical system
            implementations.
          </p>
        </div>

        <div
          className={`inline-flex p-1 rounded-full border self-start ${
            isDark
              ? "bg-[#11223A] border-[#1E3656]"
              : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          {FILTERS.map((filter) => (
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
            onClick={() => onSelectProject(project)}
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
                  className={`p-1.5 rounded-full ${
                    isDark
                      ? "bg-[#0B192C] text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
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
                className={`text-xs leading-relaxed mb-4 ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
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
    </div>
  );
}
