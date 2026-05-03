import mongoose from "mongoose";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

// ── Fallback JSON data store (used when MongoDB is not available) ──────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let useJsonFallback = false;
export const jsonStore = { messages: [], projects: [] };

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri === "your_mongodb_uri_here") {
    console.warn("⚠️  No MongoDB URI provided. Using JSON fallback storage.");
    useJsonFallback = true;
    loadSeedData();
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ MongoDB connected successfully");
    loadSeedData();
  } catch (err) {
    console.warn("⚠️  MongoDB connection failed. Using JSON fallback storage.");
    console.warn("   Error:", err.message);
    useJsonFallback = true;
    loadSeedData();
  }
}

export function isUsingFallback() {
  return useJsonFallback;
}

function loadSeedData() {
  // Seed projects into in-memory store (also used for MongoDB seed)
  jsonStore.projects = getSeedProjects();
}

function getSeedProjects() {
  return [
    {
      _id: "1",
      title: "DevFlow — Project Management SaaS",
      description:
        "A full-featured project management platform with real-time collaboration, Kanban boards, sprint planning, and team analytics. Built for remote engineering teams.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Tailwind CSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/YOUR_USERNAME",
      githubUrl: "https://github.com/YOUR_USERNAME",
      featured: true,
      order: 1,
    },
    {
      _id: "2",
      title: "CryptoSense — Real-Time Trading Dashboard",
      description:
        "A high-performance cryptocurrency trading dashboard with live price feeds, portfolio tracking, technical indicators, and smart alerts via Telegram.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      techStack: ["React", "WebSockets", "Chart.js", "Express", "MongoDB"],
      category: "Frontend",
      liveUrl: "https://github.com/YOUR_USERNAME",
      githubUrl: "https://github.com/YOUR_USERNAME",
      featured: true,
      order: 2,
    },
    {
      _id: "3",
      title: "ShopSphere — E-Commerce Platform",
      description:
        "Modern e-commerce platform with AI-powered product recommendations, multi-vendor support, Stripe payments, and a fully-featured admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      techStack: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
      category: "Full Stack",
      liveUrl: "https://github.com/YOUR_USERNAME",
      githubUrl: "https://github.com/YOUR_USERNAME",
      featured: true,
      order: 3,
    },
    {
      _id: "4",
      title: "AuraChat — AI Messaging App",
      description:
        "An intelligent messaging app with GPT-4 integration, voice-to-text, smart replies, end-to-end encryption, and support for group conversations.",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
      techStack: ["React Native", "OpenAI API", "Firebase", "Node.js"],
      category: "Mobile",
      liveUrl: "https://github.com/YOUR_USERNAME",
      githubUrl: "https://github.com/YOUR_USERNAME",
      featured: false,
      order: 4,
    },
    {
      _id: "5",
      title: "CodeAtlas — Developer Portfolio Builder",
      description:
        "A drag-and-drop portfolio builder for developers. Pulls GitHub stats, auto-generates project cards, and deploys to a custom domain in one click.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      techStack: ["React", "GitHub API", "Node.js", "Vercel API", "MongoDB"],
      category: "Full Stack",
      liveUrl: "https://github.com/YOUR_USERNAME",
      githubUrl: "https://github.com/YOUR_USERNAME",
      featured: false,
      order: 5,
    },
  ];
}
