import Project from "../models/Project.js";
import { isUsingFallback, jsonStore } from "../config/db.js";

/**
 * GET /api/projects
 * Returns all projects, sorted by order field.
 */
export async function getProjects(req, res, next) {
  try {
    const { category, featured } = req.query;

    if (isUsingFallback()) {
      let projects = [...jsonStore.projects];
      if (category && category !== "All") {
        projects = projects.filter((p) => p.category === category);
      }
      if (featured === "true") {
        projects = projects.filter((p) => p.featured);
      }
      return res.json({ success: true, count: projects.length, data: projects });
    }

    // Build MongoDB query
    const query = {};
    if (category && category !== "All") query.category = category;
    if (featured === "true") query.featured = true;

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/projects/:id
 * Returns a single project by ID.
 */
export async function getProjectById(req, res, next) {
  try {
    const { id } = req.params;

    if (isUsingFallback()) {
      const project = jsonStore.projects.find((p) => p._id === id);
      if (!project) return res.status(404).json({ success: false, message: "Project not found" });
      return res.json({ success: true, data: project });
    }

    const project = await Project.findById(id);
    if (!project) return res.status(404).json({ success: false, message: "Project not found" });
    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}
