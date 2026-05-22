import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/sujoy.png';
import { 
  ArrowUpRight, 
  Sparkles,  
  Heart, 
  MapPin, 
  Mail, 
  Terminal as TerminalIcon,
  GraduationCap as EduIcon,
  Briefcase as WorkIcon,
  Award as AwardIcon,
  Smile
} from 'lucide-react';
import aboutData from '../constants/aboutData';

export default function AboutPage() {
  const { personalInfo, about, education, experience, softSkills, achievements, stats, hobbies, favorites, socialLinks } = aboutData;

  // Animation variants for staggered list animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="w-full pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 bg-[#f5f5f3] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen text-left transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto space-y-24">
        
        {/* =========================================
            1. HERO / SPLIT PROFILE SECTION
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Intro copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {personalInfo.freelanceStatus}
            </div>

            {/* Headline / Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
                {personalInfo.role}
              </h2>
            </div>

            {/* Tagline & Description */}
            <p className="text-zinc-800 dark:text-zinc-200 text-lg sm:text-xl font-bold leading-relaxed">
              {personalInfo.tagline}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-medium">
              {personalInfo.description}
            </p>

            {/* Contact details pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-650 dark:text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.location}
              </div>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-650 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.email}
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-900/60 w-fit">
              <span className="text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mr-2">Connect:</span>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-9 w-9 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-850 hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300 hover:scale-[1.08] shadow-2xs"
                      title={social.name}
                    >
                      <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Portrait Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-900 shadow-sm p-3">
              <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-zinc-100 dark:bg-zinc-950">
                <img 
                  src={personalInfo.image || "/designer_portrait.png"} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700" 
                  onError={(e) => {
                    e.target.src = "/designer_portrait.png";
                  }}
                />
                {/* Visual Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Decorative Accent Ring */}
              <div className="absolute -inset-1 border border-emerald-500/20 rounded-[36px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>

    

        {/* =========================================
            3. DETAILED ABOUT / PHILOSOPHY NARRATIVE
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-900">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              <Sparkles className="w-4 h-4 text-emerald-500" /> {about.title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none">
              Philosophy & Journey
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
              A brief narrative highlighting how I think, write modules, and approach technical development.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-2xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              {about.paragraphs.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-zinc-650 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-medium first-letter:text-2xl first-letter:font-black first-letter:text-emerald-500"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            4. TIMELINES GRID (EDUCATION & EXPERIENCE)
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-900">
          
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800">
                <EduIcon className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Academic Pathway</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-zinc-200/80 dark:border-zinc-900 pl-6 sm:pl-8 ml-4">
              {education.map((edu) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[24px] p-6 space-y-4 hover:shadow-2xs transition-all duration-300 group"
                  >
                    {/* Timeline Node Icon Overlay */}
                    <div className="absolute -left-[45px] top-6 h-8 w-8 rounded-full bg-[#f5f5f3] dark:bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 tracking-wide uppercase">{edu.duration}</span>
                      <h4 className="text-lg font-extrabold text-zinc-950 dark:text-white leading-tight">{edu.degree}</h4>
                      <h5 className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{edu.institute}</h5>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                      {edu.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800">
                <WorkIcon className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Work Experience</h3>
            </div>

            <div className="space-y-6 relative border-l-2 border-zinc-200/80 dark:border-zinc-900 pl-6 sm:pl-8 ml-4">
              {experience.map((exp) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[24px] p-6 space-y-4 hover:shadow-2xs transition-all duration-300 group"
                  >
                    {/* Timeline Node Icon Overlay */}
                    <div className="absolute -left-[45px] top-6 h-8 w-8 rounded-full bg-[#f5f5f3] dark:bg-zinc-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-450 tracking-wide uppercase">{exp.duration}</span>
                      <h4 className="text-lg font-extrabold text-zinc-950 dark:text-white leading-tight">{exp.role}</h4>
                      <h5 className="text-sm font-bold text-zinc-500 dark:text-zinc-400">{exp.company}</h5>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                      {exp.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* =========================================
            5. SOFT SKILLS MATRIX GRID
            ========================================= */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              <Smile className="w-4 h-4 text-emerald-500" /> Dynamic Talents
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none">
              Soft Skills
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium max-w-xl">
              Professional and collaborative habits that help me thrive inside cross-functional environments.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-3xs hover:shadow-2xs dark:hover:border-zinc-800 transition-all duration-300 group"
                >
                  <div className="h-11 w-11 rounded-2xl bg-zinc-55 dark:bg-zinc-800/80 flex items-center justify-center text-zinc-800 dark:text-white mb-4 border border-zinc-100 dark:border-zinc-700/60 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 shadow-3xs transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-extrabold text-zinc-900 dark:text-white leading-tight">
                    {skill.title}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* =========================================
            6. ACHIEVEMENTS & PERSONAL PILLS (FAVORITES / HOBBIES)
            ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-zinc-200 dark:border-zinc-900">
          
          {/* Achievements Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800">
                <AwardIcon className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Key Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={ach.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[28px] p-6 flex gap-5 items-start shadow-3xs transition-all duration-300"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-extrabold text-zinc-950 dark:text-white leading-snug">{ach.title}</h4>
                      <p className="text-zinc-555 dark:text-zinc-400 text-[13px] leading-relaxed font-medium">{ach.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Personal Hobbies & Favorites Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800">
                <Heart className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Personal Deck</h3>
            </div>

            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-3xs">
              {/* Hobbies pills */}
              <div className="space-y-3">
                <h4 className="text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">My Hobbies</h4>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-850 rounded-xl text-zinc-650 dark:text-zinc-350 shadow-3xs"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Terminal Card for Favorites */}
              <div className="space-y-3 border-t border-zinc-100 dark:border-zinc-850 pt-5">
                <h4 className="text-xs font-black tracking-widest text-zinc-400 dark:text-zinc-500 uppercase flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-500" /> Favorites Matrix
                </h4>
                
                {/* Terminal design */}
                <div className="w-full rounded-2xl bg-zinc-950 border border-zinc-850 overflow-hidden font-mono text-xs text-left shadow-md">
                  {/* Title bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-850">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-bold select-none">python -m sujoy</span>
                  </div>
                  {/* Console body */}
                  <div className="p-4 space-y-2.5 select-none text-[11px] leading-relaxed">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">&gt;&gt;&gt;</span>
                      <span className="text-zinc-300">favorite_language</span>
                    </div>
                    <div className="text-zinc-400 pl-5">
                      "{favorites.favoriteLanguage}"
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">&gt;&gt;&gt;</span>
                      <span className="text-zinc-300">daily_loop</span>
                    </div>
                    <div className="text-zinc-450 pl-5">
                      {JSON.stringify(favorites.favoriteWords)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-emerald-500">&gt;&gt;&gt;</span>
                      <span className="text-zinc-300">is_coffee_empty</span>
                    </div>
                    <div className="text-zinc-400 pl-5">
                      False <span className="text-zinc-600"># Keep refilling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            7. GLOBAL CTA BANNER
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-900 rounded-[40px] p-8 md:p-12 text-center text-zinc-900 dark:text-white space-y-6 relative overflow-hidden shadow-2xs"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 px-4 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-450 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Open to Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-zinc-950 dark:text-white">
              Looking for B.Tech internships or contracts?
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-lg">
              Let's connect! I am ready to deploy scalable systems, write secure API modules, and design beautiful full-stack projects alongside engineering teams.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-8 py-4 font-bold text-sm sm:text-base transition-all duration-300 hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:scale-[1.02] cursor-pointer"
              >
                Let's Discuss
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
