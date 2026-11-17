import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, isDark, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`relative z-10 w-full max-w-xl p-6 sm:p-8 rounded-2xl border shadow-2xl ${
              isDark
                ? "bg-[#11223A] border-[#1E3656] text-white"
                : "bg-white border-slate-200 text-[#0B192C]"
            }`}
          >
            <button
              onClick={onClose}
              className={`absolute top-5 right-5 p-2 rounded-full cursor-pointer ${
                isDark
                  ? "bg-[#0B192C] text-slate-400 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:text-black"
              }`}
            >
              <X size={16} />
            </button>

            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                isDark
                  ? "bg-[#0B192C] text-[#C8B594] border-[#1E3656]"
                  : "bg-slate-100 text-[#7C663D] border-slate-200"
              }`}
            >
              {project.categoryLabel}
            </span>

            <h2 className="text-2xl font-bold mt-3 mb-2">{project.title}</h2>

            <p
              className={`text-xs leading-relaxed mb-5 ${isDark ? "text-slate-300" : "text-slate-600"}`}
            >
              {project.longDescription}
            </p>

            <div
              className={`p-4 rounded-xl mb-5 border ${
                isDark
                  ? "bg-[#0B192C] border-[#1E3656]"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <p
                className={`text-xs font-mono ${isDark ? "text-[#C8B594]" : "text-[#7C663D]"}`}
              >
                <strong>Key Result:</strong> {project.impact}
              </p>
            </div>

            <div className="space-y-2">
              <p
                className={`text-xs font-semibold ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                Technologies Used:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded font-mono ${
                      isDark
                        ? "bg-[#0B192C] text-slate-200"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className={`px-5 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                  isDark
                    ? "bg-[#C8B594] text-[#0B192C]"
                    : "bg-[#0B192C] text-white"
                }`}
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
