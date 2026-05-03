import { Github, Linkedin, Heart } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Matyoqubovv7",
    icon: () => <Github size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xudayshukur-matyoqubov-3a4201343",
    icon: () => <Linkedin size={16} />,
  },
  {
    label: "Telegram",
    href: "https://t.me/matyakub0v",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.837l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.722z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/matyakubovv.7/",
    icon: () => (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const NAV = ["About", "Projects", "Achievements", "Contact"];

export default function Footer() {
  const scrollTo = (id) =>
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border section-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg border border-accent/40 flex items-center justify-center">
                <span className="font-display font-bold text-accent">X</span>
              </div>
              <span className="font-display font-semibold text-text">
                Xudoyshukur<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Full Stack Developer building modern, responsive, and powerful web applications.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono text-muted tracking-widest uppercase mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(label)}
                    className="text-sm text-text-dim hover:text-accent transition-colors duration-300"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-muted tracking-widest uppercase mb-4">
              Social
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Xudoyshukur Matyoqubov. All rights reserved.
          </p>
          <p className="text-xs text-muted flex items-center gap-1.5">
            Built with <Heart size={11} className="text-accent-3 fill-accent-3" /> using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}
