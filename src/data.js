import { FileText, Gamepad2, Layout, Palette, Wrench } from "lucide-react";

export const PROJECTS = [
  {
    id: "asl-app",
    title: "SignSnap: Real-time ASL Gesture Recognition",
    category: "systems",
    categoryLabel: "Capstone & Systems",
    description:
      "An assistive real-time vision application translating American Sign Language gestures to text and speech.",
    longDescription:
      "Served as Data & Documentation Lead for this Capstone Project. Responsible for collecting, cleaning, annotating, and structuring custom ASL image/video datasets to train the gesture recognition model. Authored comprehensive capstone documentation including the Software Requirements Specifications (SRS), dataset dictionaries, QA test matrices, and end-user setup manuals.",
    tags: [
      "Dataset Curation",
      "Data Preprocessing",
      "Capstone Documentation",
      "Python",
      "QA Testing",
    ],
    impact:
      "Curated 10,000+ verified gesture samples enabling 94% recognition accuracy and complete capstone compliance.",
  },
  {
    id: "vr-museum",
    title: "Louvre 3D VR Museum",
    category: "unity",
    categoryLabel: "Unity 3D & Gameplay Logic",
    description:
      "An interactive virtual exhibition featuring custom C# game backend logic, exhibit state management, and thorough QA testing.",
    longDescription:
      "Served as Gameplay Programmer & Lead QA Tester. Programmed core backend systems and interactive exhibit logic in C#, managed state controllers, user interaction events, and scene transitions. Executed comprehensive functional QA playtesting, bug tracking, edge-case diagnostics, and performance profiling to ensure smooth, stable execution across target hardware.",
    tags: [
      "Unity 3D",
      "C# Backend Logic",
      "System Architecture",
      "QA Playtesting",
      "Bug Diagnostics",
    ],
    impact:
      "Engineered core C# backend systems and resolved 100+ edge-case bugs through structured QA testing to maintain stable performance.",
  },
  {
    id: "masskmania",
    title: "MasskMania",
    category: "multimedia",
    categoryLabel: "Game Development & Interactive Media",
    description:
      "Retro pixel-art mobile arcade collection celebrating Bacolod's MassKara Festival through two interactive mini-games, Float Frenzy and MaskaRush.",
    longDescription:
      "Engineered the frontend game physics, collision detection, progressive speed scaling, and sprite animations for both Float Frenzy (top-down float steering) and MaskaRush (tap and double-tap endless runner). Built responsive retro arcade UI interactions, bilingual English/Filipino dialogue screens, and smooth frame-rate performance for mobile gameplay.",
    tags: ["Game Physics", "2D Animations", "Frontend Dev", "Mobile Gaming"],
    impact:
      "Delivered two playable arcade modes with bilingual cultural storytelling",
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
      { name: "React Component Architecture", level: "Advanced" },
      { name: "Tailwind CSS Styling & Theming", level: "Expert" },
      { name: "Responsive Mobile-First Interfaces", level: "Expert" },
      { name: "Framer Motion & Smooth UI Transitions", level: "Advanced" },
      { name: "Cross-Browser Compatibility & Testing", level: "Advanced" },
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
    subtitle: "Backend C# logic, system architecture & QA testing",
    icon: Gamepad2,
    skills: [
      { name: "C# Game Logic & State Architecture", level: "Advanced" },
      { name: "QA Playtesting & Systematic Debugging", level: "Expert" },
      { name: "Unity 2D & 3D Environment Design", level: "Advanced" },
      { name: "In-Engine UI/HUD System Construction", level: "Advanced" },
      { name: "Performance Optimization & Profiling", level: "Intermediate" },
      { name: "Bug Tracking, Diagnostics & Tuning", level: "Expert" },
    ],
  },
];

export const CREDENTIALS_DATA = [
  {
    category: "Work & Technical Experience",
    items: [
      {
        role: "Technical Support & Systems Specialist",
        organization: "Enterprise IT & Client Services",
        description:
          "Diagnosed and resolved hardware issues, assembled custom computing rigs, deployed software stacks, and wrote user guides reducing recurring support tickets by 40%.",
      },
      {
        role: "Frontend & UI/UX Developer",
        organization: "Independent / Digital Agency",
        description:
          "Built intuitive web interfaces in React and Tailwind CSS, translated Figma concepts into responsive components, and maintained detailed documentation.",
      },
      {
        role: "Interactive Unity Developer & QA",
        organization: "Creative Tech Lab",
        description:
          "Programmed backend C# interactive logic in Unity 2D/3D, conducted extensive playtesting and bug diagnostics, and authored QA runbooks.",
      },
    ],
  },
  ,
  {
    category: "Education & Certifications",
    items: [
      {
        role: "Bachelor of Science in Information Technology",
        organization: "College of Information and Communications Technology",
        period: "Graduated",
        description:
          "Specialization in Systems Administration, Interactive Media, and Software Engineering.",
      },
      {
        role: "PC Hardware Diagnostics & Assembly Certification",
        organization: "Hardware Technical Guild",
        period: "Verified",
        description:
          "Certified in component selection, motherboard architecture, BIOS configuration, and preventative maintenance.",
      },
      {
        role: "Technical Documentation & Systems QA Specialist",
        organization: "Software Documentation Standard Institute",
        period: "Verified",
        description:
          "Trained in SRS authoring, user-centric handbook design, and structured QA testing frameworks.",
      },
    ],
  },
];
