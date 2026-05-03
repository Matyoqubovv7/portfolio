import { Router } from "express";
import { body } from "express-validator";
import { submitContact, getMessages } from "../controllers/contactController.js";

const router = Router();

// Validation rules for contact form
const contactValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 2, max: 100 }).withMessage("Name must be 2–100 characters"),
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Please provide a valid email address"),
  body("message")
    .trim()
    .notEmpty().withMessage("Message is required")
    .isLength({ min: 10, max: 2000 }).withMessage("Message must be 10–2000 characters"),
];

// POST /api/contact          — submit contact form
router.post("/", contactValidation, submitContact);

// GET  /api/contact          — list all messages (admin)
router.get("/", getMessages);

export default router;
