// src/tabs/ContactTab.jsx
import { CheckCircle, Copy, Mail, Send } from "lucide-react";
import { useState } from "react";

export default function ContactTab({ isDark }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("lheegabriel.hosena@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xljbblgb", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setSubmitError(data.errors.map((err) => err.message).join(", "));
        } else {
          setSubmitError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setSubmitError("Network error. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1
          className={`text-3xl sm:text-4xl font-black tracking-tight ${
            isDark ? "text-white" : "text-[#0B192C]"
          }`}
        >
          Get in Touch
        </h1>
        <p
          className={`text-sm mt-1 ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Have a question, tech support inquiry, project documentation task, or
          development opportunity? Let's talk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-4 lg:col-span-1">
          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-[#11223A] border-[#1E3656]"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`p-2.5 rounded-xl ${
                  isDark
                    ? "bg-[#0B192C] text-[#C8B594]"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
              >
                <Mail size={18} />
              </div>
              <div>
                <p
                  className={`text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}
                >
                  Direct Email
                </p>
                <p
                  className={`text-xs font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
                >
                  lheegabriel.hosena@gmail.com
                </p>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className={`w-full mt-2 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                copied
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : isDark
                    ? "bg-[#0B192C] border-[#1E3656] text-[#C8B594] hover:bg-[#152a48]"
                    : "bg-slate-50 border-slate-200 text-[#0B192C] hover:bg-slate-100"
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle size={14} /> Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Email Address
                </>
              )}
            </button>
          </div>

          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-[#11223A] border-[#1E3656]"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <h4
              className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                isDark ? "text-[#C8B594]" : "text-[#856D43]"
              }`}
            >
              Availability
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Accepting hardware consultation, technical writing / documentation
              assignments, and React/Unity projects.
            </p>
          </div>
        </div>

        <div
          className={`p-6 md:p-8 rounded-2xl border lg:col-span-2 ${
            isDark
              ? "bg-[#11223A] border-[#1E3656]"
              : "bg-white border-slate-200 shadow-sm"
          }`}
        >
          {formSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle size={28} />
              </div>
              <h3
                className={`text-lg font-bold ${isDark ? "text-white" : "text-[#0B192C]"}`}
              >
                Message Received!
              </h3>
              <p
                className={`text-xs max-w-sm mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}
              >
                Thank you for reaching out. I will respond to your message
                promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className={`mt-4 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer ${
                  isDark
                    ? "bg-[#1E3656] text-white"
                    : "bg-slate-100 text-[#0B192C]"
                }`}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {submitError && (
                <div className="p-3 rounded-xl text-xs bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  {submitError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter your name here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                      isDark
                        ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                        : "bg-slate-50 border-slate-200 text-[#0B192C]"
                    }`}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                  >
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                      isDark
                        ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                        : "bg-slate-50 border-slate-200 text-[#0B192C]"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  Topic / Inquiry
                </label>
                <select
                  name="topic"
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none cursor-pointer ${
                    isDark
                      ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                      : "bg-slate-50 border-slate-200 text-[#0B192C]"
                  }`}
                >
                  <option>Hardware Support & Diagnostics</option>
                  <option>Project Documentation Management</option>
                  <option>Frontend & UI/UX Design</option>
                  <option>Unity 2D / 3D Development</option>
                  <option>General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  className={`text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  name="message"
                  placeholder="Tell me a bit about your project or what you need assistance with..."
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none resize-none ${
                    isDark
                      ? "bg-[#0B192C] border-[#1E3656] text-white focus:border-[#C8B594]"
                      : "bg-slate-50 border-slate-200 text-[#0B192C]"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  isDark
                    ? "bg-[#C8B594] text-[#0B192C] hover:bg-[#d8c7a8]"
                    : "bg-[#0B192C] text-white hover:bg-[#162a45]"
                } ${isSubmitting ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <Send size={14} />
                {isSubmitting ? "Sending message..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
