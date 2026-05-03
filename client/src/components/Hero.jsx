import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

const ROLES = [
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

function useTyping(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const word = words[wordIdx];
      if (!deleting) {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1));
          timerRef.current = setTimeout(tick, speed);
        } else {
          timerRef.current = setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
          timerRef.current = setTimeout(tick, speed / 2);
        } else {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    };
    timerRef.current = setTimeout(tick, speed);
    return () => clearTimeout(timerRef.current);
  }, [displayed, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const role = useTyping(ROLES);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding max-w-7xl mx-auto pt-24"
    >



      <motion.div
        className="max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Greeting badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-accent"
                style={{ opacity: 1 - i * 0.25 }}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Hello, World!
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-4"
        >
          <span className="text-text">Xudoyshukur</span>
          <br />
          <span className="gradient-text">Matyoqubov</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-muted font-mono text-sm">~/</span>
          <h2 className="font-display text-xl md:text-2xl text-text-dim font-medium">
            {role}
            <span className="typing-cursor text-accent ml-0.5">|</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-text-dim text-lg md:text-xl leading-relaxed max-w-xl mb-10"
        >
          I build{" "}
          <span className="text-accent">modern, responsive</span>, and{" "}
          <span className="text-accent-2">powerful</span> web applications that
          deliver exceptional user experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary group"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-outline"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social row */}
        <motion.div variants={item} className="flex items-center gap-6 mt-12">
          <span className="text-xs text-muted font-mono tracking-wider">FIND ME ON</span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          {[
            { icon: Github, href: "https://github.com/Matyoqubovv7", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/xudayshukur-matyoqubov-3a4201343", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="https://t.me/matyakub0v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Telegram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.837l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.722z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/matyakubovv.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-mono text-muted tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: "top" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
