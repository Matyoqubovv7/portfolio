import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle, Loader, Github, Linkedin, Mail, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Telegram",
    href: "https://t.me/matyakub0v",
    color: "#26a5e4",
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.837l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.978.722z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/matyakubovv.7/",
    color: "#e1306c",
    icon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Matyoqubovv7",
    color: "#e2e8f0",
    icon: () => <Github size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/xudayshukur-matyoqubov-3a4201343",
    color: "#0a66c2",
    icon: () => <Linkedin size={18} />,
  },
];

const INFO = [
  { icon: Mail, label: "Email", value: "mxudashkur17@gmail.com" },
  { icon: MapPin, label: "Location", value: "Tashkent, Uzbekistan 🇺🇿" },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full bg-surface border ${
      errors[field] ? "border-red-500/60" : "border-border"
    } rounded-xl px-4 py-3 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors duration-300`;

  return (
    <section id="contact" className="py-32 section-padding max-w-7xl mx-auto" ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            04. Contact
          </span>
          <div className="h-px flex-1 bg-border max-w-[80px]" />
        </div>
        <h2 className="section-title">
          Let's Work Together<span className="text-accent">.</span>
        </h2>
        <p className="text-text-dim mt-4 max-w-xl">
          Have a project in mind or just want to say hello? Drop me a message and I'll
          get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="card space-y-5">
            <div>
              <label className="text-xs font-mono text-muted tracking-wider block mb-2">
                YOUR NAME
              </label>
              <input
                type="text"
                placeholder="Firstname Lastname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-mono text-muted tracking-wider block mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-mono text-muted tracking-wider block mb-2">
                MESSAGE
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader size={15} className="animate-spin relative z-10" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={15} className="relative z-10" />
                </>
              )}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm"
              >
                <CheckCircle size={16} />
                Message sent! I'll reply soon. 🚀
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                <XCircle size={16} />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Right: Info + Social */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Info cards */}
          <div className="space-y-4">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="card flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted tracking-wider">{label.toUpperCase()}</p>
                  <p className="text-sm text-text mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="card">
            <p className="text-xs font-mono text-muted tracking-widest uppercase mb-5">
              Find Me Online
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map(({ label, href, color, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
                  style={{ "--hover-color": color }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ background: `${color}15`, color }}
                  >
                    <Icon />
                  </div>
                  <span className="text-sm text-text-dim group-hover:text-text transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-accent animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-sm font-medium text-text">Currently Available</p>
                <p className="text-xs text-muted">Open to freelance & full-time roles</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
