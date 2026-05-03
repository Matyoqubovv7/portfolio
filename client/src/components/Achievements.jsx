import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Star, Trophy, Zap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    type: "work",
    icon: Briefcase,
    color: "#6ee7b7",
    title: "Middle Full Stack Developer",
    org: "TechCorp Solutions",
    description:
      "Led development of a microservices architecture serving 50k+ daily active users. Improved system performance by 40% through Redis caching and query optimization.",
    tags: ["React", "Node.js", "Docker", "AWS"],
  },
  {
    year: "2024",
    type: "award",
    icon: Trophy,
    color: "#f59e0b",
    title: "Best Developer Award",
    org: "IT Park Uzbekistan",
    description:
      "Recognized as Best Developer of the Year for outstanding contributions to open-source and mentoring junior developers across the region.",
    tags: ["Recognition", "Open Source"],
  },
  {
    year: "2023",
    type: "cert",
    icon: Award,
    color: "#a78bfa",
    title: "AWS Solutions Architect",
    org: "Amazon Web Services",
    description:
      "Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing distributed systems on cloud infrastructure.",
    tags: ["AWS", "Cloud", "Infrastructure"],
  },
  {
    year: "2023",
    type: "work",
    icon: Zap,
    color: "#6ee7b7",
    title: "Full Stack Developer",
    org: "StartupHub Tashkent",
    description:
      "Built 3 production SaaS products from scratch to launch. Worked in agile teams, handled end-to-end development, deployment, and customer feedback loops.",
    tags: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    year: "2022",
    type: "cert",
    icon: GraduationCap,
    color: "#f472b6",
    title: "Meta Frontend Developer Certificate",
    org: "Meta / Coursera",
    description:
      "Completed the official Meta Frontend Developer Professional Certificate, mastering React, advanced JavaScript, and modern CSS techniques.",
    tags: ["React", "JavaScript", "CSS"],
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="achievements" className="py-32 section-padding max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03. Experience
          </span>
          <div className="h-px flex-1 bg-border max-w-[80px]" />
        </div>
        <h2 className="section-title">
          Journey & Achievements<span className="text-accent">.</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-6">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 group"
              >
                {/* Icon dot */}
                <div className="flex-shrink-0 hidden md:block">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      borderColor: `${item.color}30`,
                      color: item.color,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card group-hover:border-border/80 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-text group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-dim mt-0.5">{item.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-mono text-xs text-muted bg-surface border border-border px-2.5 py-1 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
