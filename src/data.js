import { FileText, Gamepad2, Layout, Palette, Wrench } from "lucide-react";

export const PROJECTS = [
  {
    id: "asl-app",
    title: "SignSnap: Real-time ASL Translator",
    category: "systems",
    categoryLabel: "Mobile & Systems",
    description:
      "An assistive mobile vision application translating American Sign Language gestures to text and speech in real-time.",
    longDescription:
      "Engineered a real-time gesture recognition pipeline utilizing lightweight neural network models. Managed comprehensive technical documentation including software requirements specifications (SRS), edge-case test matrices, and end-user setup guides.",
    tags: ["Flutter", "TensorFlow Lite", "Python", "Tech Docs"],
    impact: "94% gesture accuracy with under 80ms on-device latency",
  },
  {
    id: "vr-museum",
    title: "Louvre 3D VR Museum",
    category: "unity",
    categoryLabel: "Unity 3D",
    description:
      "An interactive virtual reality art exhibition with real-time lighting, spatial audio, and immersive physics-based interactions.",
    longDescription:
      "Created 3D architectural environments, custom C# interaction scripts for exhibits, and dynamic user interfaces for VR headsets. Conducted extensive performance profiling to maintain 90 FPS rendering on target hardware.",
    tags: ["Unity 3D", "C# Scripting", "Blender", "Spatial UI"],
    impact: "Optimized batching and lighting for stable 90 FPS VR",
  },
  {
    id: "nfc-campus",
    title: "OmniPass NFC Campus System",
    category: "systems",
    categoryLabel: "Hardware & Systems",
    description:
      "Smart campus access card system bridging physical NFC readers with a responsive administrative dashboard.",
    longDescription:
      "Assembled, tested, and configured hardware readers and embedded controllers. Authored hardware troubleshooting runbooks, deployment guides, and client-facing administration manuals.",
    tags: ["React", "NFC Hardware", "Node.js", "Hardware Setup"],
    impact: "Reduced campus registration verification time by 65%",
  },
  {
    id: "vanguard-canvas",
    title: "Vanguard Canvas UI Suite",
    category: "frontend",
    categoryLabel: "Frontend & UI/UX",
    description:
      "A component design system and workspace tailored for creative agencies, featuring fluid micro-interactions and dark mode.",
    longDescription:
      "Designed from wireframes to high-fidelity Figma components, then implemented in React with clean CSS architectures. Created interactive component documentation and accessibility audit reports.",
    tags: ["React", "Tailwind CSS", "Figma", "UI/UX Design"],
    impact: "100% WCAG AA compliance score across all components",
  },
];

export const SKILL_DOMAINS = [
  {
    id: "tech-support",
    title: "Tech Support & Hardware",
    subtitle: "PC assembly, diagnostics, OS tuning & tool mastery",
    icon: Wrench,
    skills: [
      { name: "Exploring PC Hardware Components", level: "Advanced" },
      { name: "Custom Hardware Assembly & Upgrades", level: "Advanced" },
      { name: "Hardware Diagnostics & Troubleshooting", level: "Advanced" },
      { name: "Software Installation & Environment Setup", level: "Expert" },
      { name: "Mastering Software Programs & Tools", level: "Expert" },
      { name: "OS Maintenance (Windows, Linux, macOS)", level: "Advanced" },
      { name: "Peripheral, Driver & BIOS Configuration", level: "Advanced" },
      { name: "System Performance Optimization", level: "Advanced" },
    ],
  },
  {
    id: "documentation",
    title: "Project Documentation",
    subtitle: "Clear, structured technical writing & QA records",
    icon: FileText,
    skills: [
      { name: "Technical Documentation & Specifications", level: "Expert" },
      { name: "End-User Manuals & Step-by-Step Guides", level: "Expert" },
      { name: "Requirements Gathering & Scope Specs", level: "Advanced" },
      { name: "Test Cases & QA Inspection Reports", level: "Advanced" },
      { name: "Project Wikis & Knowledge Base Management", level: "Expert" },
      { name: "Hardware Runbooks & Troubleshooting SOPs", level: "Advanced" },
      { name: "Release Notes & Changelog Tracking", level: "Expert" },
      { name: "Meeting Minutes & Action Item Follow-up", level: "Advanced" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Fast, responsive, and clean web interfaces",
    icon: Layout,
    skills: [
      { name: "HTML5, Modern CSS & JavaScript (ES6+)", level: "Advanced" },
      { name: "React Component Architecture", level: "Beginner" },
      { name: "Tailwind CSS Styling & Theming", level: "Beginner" },
      { name: "Responsive Mobile-First Interfaces", level: "Advanced" },
      { name: "Framer Motion & Smooth UI Transitions", level: "Advanced" },
      { name: "Cross-Browser Compatibility & Testing", level: "Expert" },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "User flows, wireframing & component systems",
    icon: Palette,
    skills: [
      {
        name: "Figma Wireframing & Interactive Prototyping",
        level: "Advanced",
      },
      { name: "User Journey Mapping & Intuitive Flows", level: "Advanced" },
      { name: "Visual Hierarchy, Typography & Layouts", level: "Advanced" },
      { name: "Design Systems & Reusable Tokens", level: "Intermediate" },
      { name: "Usability Testing & Feedback Synthesis", level: "Advanced" },
    ],
  },
  {
    id: "unity",
    title: "Unity 2D & 3D Interactive",
    subtitle: "Game logic, physics, scenes & interactive menus",
    icon: Gamepad2,
    skills: [
      { name: "Unity 2D & 3D Environment Design", level: "Advanced" },
      { name: "C# Object Scripting & Gameplay Logic", level: "Advanced" },
      { name: "In-Engine UI/HUD System Construction", level: "Advanced" },
      { name: "Lighting, Shaders & Scene Optimization", level: "Intermediate" },
      { name: "Playtesting, Bug Tracking & Tuning", level: "Expert" },
    ],
  },
];

export const CREDENTIALS_DATA = [
  {
    category: "Technical Experience",
    items: [
      {
        role: "Technical Support & Systems Specialist",
        description:
          "Diagnosed and resolved hardware issues, assembled custom computing rigs, deployed software stacks, and wrote user guides reducing recurring support tickets by 40%.",
      },
      {
        role: "Frontend & UI/UX Developer",
        description:
          "Built intuitive web interfaces in React and Tailwind CSS, translated Figma concepts into responsive components, and maintained detailed documentation.",
      },
      {
        role: "Interactive Unity Developer & QA",
        description:
          "Created C# interactive mechanics in Unity 2D/3D, conducted functional QA, and authored test cases and user manuals for interactive demos.",
      },
    ],
  },
  {
    category: "Education & Certifications",
    items: [
      {
        role: "Bachelor of Science in Information Technology",
        organization: "College of Information and Communications Technology",
        period: "2023 - 2027",
        description:
          "Specialization in Systems Administration, Interactive Media, and Software Engineering.",
      },
      {
        role: "PMI Project Management Ready Certificate",
        organization: "Project management Institute",
        period: "Verified",
        description:
          "Certified in component selection, motherboard architecture, BIOS configuration, and preventative maintenance.",
      },
      {
        role: "Unity Creative Core, VR Development, and Game Development Badge",
        organization: "Unity Technologies",
        period: "Verified",
        description:
          "Trained in SRS authoring, user-centric handbook design, and structured QA testing frameworks.",
      },
    ],
  },
];
