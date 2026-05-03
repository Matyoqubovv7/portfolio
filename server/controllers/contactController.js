import { validationResult } from "express-validator";
import Contact from "../models/Contact.js";
import { isUsingFallback, jsonStore } from "../config/db.js";

/**
 * POST /api/contact
 * Stores a new contact message.
 */
export async function submitContact(req, res, next) {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }

    const { name, email, message } = req.body;
    const ipAddress = req.ip || req.connection?.remoteAddress || "";

    if (isUsingFallback()) {
      const newMsg = {
        _id: String(Date.now()),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        status: "unread",
        ipAddress,
        createdAt: new Date().toISOString(),
      };
      jsonStore.messages.push(newMsg);
      return res.status(201).json({
        success: true,
        message: "Message received! I'll get back to you soon. 🚀",
        data: { id: newMsg._id },
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress,
    });

    res.status(201).json({
      success: true,
      message: "Message received! I'll get back to you soon. 🚀",
      data: { id: contact._id },
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/contact
 * Lists all messages (admin use).
 */
export async function getMessages(req, res, next) {
  try {
    if (isUsingFallback()) {
      return res.json({ success: true, count: jsonStore.messages.length, data: jsonStore.messages });
    }
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
}
