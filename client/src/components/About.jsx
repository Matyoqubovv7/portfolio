import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 92, color: "#6ee7b7" },
  { name: "Node.js / Express", level: 88, color: "#a78bfa" },
  { name: "Python / Django", level: 85, color: "#f472b6" },
  { name: "MongoDB / PostgreSQL", level: 80, color: "#6ee7b7" },
  { name: "TypeScript", level: 78, color: "#a78bfa" },
  { name: "Vue.js / Nuxt", level: 75, color: "#f472b6" },
  { name: "GraphQL / Apollo", level: 70, color: "#6ee7b7" },
  { name: "Docker / DevOps", level: 65, color: "#a78bfa" },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Vue.js", icon: "�" },
  { name: "Next.js", icon: "▲" },
  { name: "Nuxt", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🎸" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Docker", icon: "🐳" },
  { name: "Redis", icon: "🔴" },
  { name: "Git", icon: "🔀" },
  { name: "AWS", icon: "☁️" },
  { name: "Firebase", icon: "�" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

function SkillBar({ name, level, color, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-dim">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 section-padding max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01. About
          </span>
          <div className="h-px flex-1 bg-border max-w-[80px]" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="section-title mb-16"
        >
          Who I Am<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Bio */}
          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  👋
                </div>
                <h3 className="font-display font-semibold text-lg">Hey there!</h3>
              </div>
              <p className="text-text-dim leading-relaxed">
                I'm <span className="text-text font-medium">Xudoyshukur Matyoqubov</span>, 
                a passionate Full Stack Developer based in Uzbekistan. I specialize in 
                crafting scalable web applications with clean, maintainable code and 
                exceptional user experiences.
              </p>
              <p className="text-text-dim leading-relaxed">
                From pixel-perfect frontends with React to robust backend systems with 
                Node.js and MongoDB, I bring ideas to life with a deep love for 
                clean architecture and modern design patterns.
              </p>
              <p className="text-text-dim leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to 
                open-source, or mentoring aspiring developers in my community.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="card text-center py-5">
                  <p className="font-display text-2xl font-bold text-accent mb-1">{value}</p>
                  <p className="text-xs text-muted leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Tech icons */}
            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <p className="text-xs font-mono text-muted tracking-widest uppercase mb-4">
                Tech I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map(({ name, icon }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-text-dim hover:border-accent/40 hover:text-accent transition-all duration-300"
                  >
                    <span>{icon}</span>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <div>
            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="card"
            >
              <p className="font-mono text-xs text-muted tracking-widest uppercase mb-8">
                Skill Proficiency
              </p>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={0.2 + i * 0.1} />
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-xs text-muted">Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-2" />
                  <span className="text-xs text-muted">Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-3" />
                  <span className="text-xs text-muted">Proficient</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
