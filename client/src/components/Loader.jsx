import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-bg flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Logo mark */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <div className="w-16 h-16 rounded-2xl border border-accent/30 flex items-center justify-center relative">
          <span className="font-display text-3xl font-bold text-accent">X</span>
          {/* Spinning ring */}
          <motion.div
            className="absolute inset-[-8px] rounded-[20px] border-t border-accent/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Name */}
      <motion.p
        className="font-display text-sm tracking-[0.3em] text-text-dim uppercase mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Xudoyshukur Matyoqubov
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-[1px] bg-border overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-accent-2 to-accent-3"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
