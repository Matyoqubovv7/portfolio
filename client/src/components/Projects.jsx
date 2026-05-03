import { useState, useEffect, forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend",];

const FALLBACK_PROJECTS = [
  {
    _id: "1",
    title: "DevFlow",
    description:
      "Advanced project management platform with real-time collaboration, intelligent Kanban boards, automated sprint planning, and comprehensive team analytics dashboard. Built for modern remote engineering teams.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Tailwind CSS"],
    category: "Full Stack",
    liveUrl: "https://github.com/Matyoqubovv7/devFlow",
    githubUrl: "https://github.com/Matyoqubovv7/devFlow",
    featured: true,
  },
  {
    _id: "2",
    title: "CryptoSense",
    description:
      "Professional cryptocurrency trading dashboard featuring real-time market data feeds, advanced portfolio tracking algorithms, technical analysis indicators, and intelligent Telegram-based alert system for traders.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    techStack: ["React", "WebSockets", "Chart.js", "Express", "MongoDB", "Trading APIs"],
    category: "Full Stack",
    liveUrl: "https://github.com/Matyoqubovv7/CryptoSense",
    githubUrl: "https://github.com/Matyoqubovv7/CryptoSense",
    featured: true,
  },
  {
    _id: "3",
    title: "ShopSphere",
    description:
      "Next-generation e-commerce platform powered by AI-driven product recommendations, multi-vendor marketplace infrastructure, secure Stripe payment processing, and comprehensive admin analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    techStack: ["React", "Node.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS", "Redis"],
    category: "Full Stack",
    liveUrl: "https://github.com/Matyoqubovv7/ShopSphere-main",
    githubUrl: "https://github.com/Matyoqubovv7/ShopSphere-main",
    featured: true,
  },
  {
    _id: "4",
    title: "AuraChat",
    description:
      "Intelligent messaging application integrating GPT-4 AI capabilities, advanced voice-to-text processing, smart reply suggestions, military-grade end-to-end encryption, and seamless group conversation management.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    techStack: ["React Native", "OpenAI API", "Firebase", "Node.js", "Socket.io", "WebRTC"],
    category: "Mobile",
    liveUrl: "https://github.com/Matyoqubovv7/AuraChat-main",
    githubUrl: "https://github.com/Matyoqubovv7/AuraChat-main",
    featured: true,
  },
];

const ProjectCard = forwardRef(({ project, index }, ref) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const setRefs = (element) => {
    if (ref) ref.current = element;
    inViewRef(element);
  };

  return (
    <motion.div
      ref={setRefs}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      layout
      className="group card p-0 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider bg-bg/80 border border-border text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Action links */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-bg/90 border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent transition-colors backdrop-blur-sm pointer-events-auto"
              style={{ pointerEvents: 'auto' }}
            >
              <Github size={13} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-bg/90 border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-accent transition-colors backdrop-blur-sm pointer-events-auto"
              style={{ pointerEvents: 'auto' }}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-text mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-text-dim leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-muted">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (data.data?.length) setProjects(data.data);
        }
      } catch {
        // Silently use fallback
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <section id="projects" className="py-32 section-padding max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            02. Projects
          </span>
          <div className="h-px flex-1 bg-border max-w-[80px]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="section-title">
            Things I've Built<span className="text-accent">.</span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-300 ${
                  category === cat
                    ? "bg-accent text-bg font-semibold"
                    : "border border-border text-text-dim hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Layers className="mx-auto text-border mb-4" size={40} />
          <p className="text-muted text-sm">No projects in this category yet.</p>
        </div>
      )}
    </section>
  );
}
