import React from "react";
import {
  GraduationCap,
  Award,
  Brain,
  Users,
  MessageCircle,
  Lightbulb,
  Clock,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

const Github = (props) => React.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
  React.createElement("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
  React.createElement("path", { d: "M9 18c-4.51 2-5-2-7-2" })
);

const Linkedin = (props) => React.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
  React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
  React.createElement("rect", { width: "4", height: "12", x: "2", y: "9" }),
  React.createElement("circle", { cx: "4", cy: "4", r: "2" })
);

const Youtube = (props) => React.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
  React.createElement("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
  React.createElement("polygon", { points: "10 15 15 12 10 9", fill: "currentColor" })
);

const Instagram = (props) => React.createElement(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props
  },
  React.createElement("rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }),
  React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
  React.createElement("line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" })
);

export const aboutData = {
  // =========================================
  // PERSONAL INFO
  // =========================================
  personalInfo: {
    name: "Sujoy Garai",
    role: "Full Stack Python Developer",
    tagline:
      "Building scalable full-stack web applications with clean UI and powerful backend systems.",
    description:
      "I am a passionate Full Stack Developer and Computer Science Engineering student who enjoys building modern web applications, solving real-world problems, and learning new technologies.",
    image: "/images/profile.png",
    location: "Durgapur, West Bengal, India",
    email: "sujoygarai89@gmail.com",
    phone: "+91 6294178990",
    freelanceStatus: "Available for Freelance",
  },

  // =========================================
  // ABOUT SECTION
  // =========================================
  about: {
    title: "About Me",
    paragraphs: [
      "I started my development journey with frontend technologies and later moved into backend and full-stack development.",
      "I enjoy building modern applications including AI platforms, chat systems, portfolio websites, and management systems.",
      "I continuously improve my development and problem-solving skills by working on real-world projects and learning new technologies.",
      "My goal is to become an expert full-stack developer and create impactful software products.",
    ],
  },

  // =========================================
  // EDUCATION
  // =========================================
  education: [
    {
      id: 1,
      institute: "Dr. B. C. Roy Engineering College",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 - 2027",
      description:
        "Currently pursuing Bachelor of Technology in Computer Science and Engineering.",
      icon: GraduationCap,
    },
    {
      id: 2,
      institute: "Sonamukhi B. J. High School",
      degree: "Higher Secondary Education (Science)",
      duration: "2020 - 2022",
      description:
        "Completed Higher Secondary education with Science background.",
      icon: GraduationCap,
    },
  ],

  // =========================================
  // EXPERIENCE
  // =========================================
  experience: [
    {
      id: 1,
      company: "Freelance",
      role: "Full Stack Web Developer",
      duration: "2023 - Present",
      description:
        "Developing modern websites and backend systems for clients and personal projects.",
      icon: Briefcase,
    },
  ],

  // =========================================
  // SOFT SKILLS
  // =========================================
  softSkills: [
    {
      id: 1,
      title: "Problem Solving",
      icon: Brain,
    },
    {
      id: 2,
      title: "Communication",
      icon: MessageCircle,
    },
    {
      id: 3,
      title: "Team Work",
      icon: Users,
    },
    {
      id: 4,
      title: "Creative Thinking",
      icon: Lightbulb,
    },
    {
      id: 5,
      title: "Time Management",
      icon: Clock,
    },
  ],

  // =========================================
  // ACHIEVEMENTS
  // =========================================
  achievements: [
    {
      id: 1,
      title: "CODEVOX-2024 Hackathon",
      description:
        "Won 2nd place by solving complex problems using DSA and Python logic.",
      icon: Award,
    },
    {
      id: 2,
      title: "Freelance Web Development",
      description:
        "Worked on multiple frontend and full-stack freelance projects.",
      icon: Award,
    },
  ],

  // =========================================
  // STATS
  // =========================================
  stats: [
    {
      id: 1,
      number: "20+",
      label: "Projects Completed",
    },
    {
      id: 2,
      number: "2+",
      label: "Years Learning",
    },
    {
      id: 3,
      number: "3",
      label: "Freelance Projects",
    },
    {
      id: 4,
      number: "10+",
      label: "Technologies Learned",
    },
  ],

  // =========================================
  // HOBBIES
  // =========================================
  hobbies: [
    "Coding",
    "Problem Solving",
    "Learning New Technologies",
    "Watching Tech Content",
    "Building Side Projects",
  ],

  // =========================================
  // FAVORITES
  // =========================================
  favorites: {
    favoriteLanguage: "Python",
    favoriteWords: ["coffee", "repeat"],
  },

  // =========================================
  // SOCIAL LINKS
  // =========================================
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      icon: Github,
      link: "https://github.com/Sujoy0001",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sujoygarai/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/_sujoygarai_?igsh=Nmx0YjVwZXV6M3Bv",
    },
    {
      id: 4,
      name: "Portfolio",
      icon: Globe,
      link: "https://sujoygarai.in",
    },
  ],

  // =========================================
  // CONTACT INFO
  // =========================================
  contactInfo: [
    {
      id: 1,
      title: "Location",
      value: "Durgapur, West Bengal, India",
      icon: MapPin,
    },
    {
      id: 2,
      title: "Email",
      value: "sujoygarai89@gmail.com",
      icon: Mail,
    },
    {
      id: 3,
      title: "Phone",
      value: "+91 6294178990",
      icon: Phone,
    },
  ],
};

export default aboutData;
