// src/components/Footer.jsx
const NAV_LINKS = ["home", "work", "skills", "credentials", "contact"];

export default function Footer({ isDark, navigateTo }) {
  return (
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
          {NAV_LINKS.map((tab) => (
            <button
              key={tab}
              onClick={() => navigateTo(tab)}
              className={`cursor-pointer capitalize ${
                isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
