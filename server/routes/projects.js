import { Router } from "express";
import { getProjects, getProjectById } from "../controllers/projectController.js";

const router = Router();

// GET /api/projects          — fetch all projects (supports ?category=&featured=)
router.get("/", getProjects);

// GET /api/projects/:id      — fetch a single project
router.get("/:id", getProjectById);

export default router;
