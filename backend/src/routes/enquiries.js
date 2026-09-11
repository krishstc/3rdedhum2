const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// CREATE ENQUIRY
// PUBLIC ROUTE
// ==========================================
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      organization,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const [result] = await db.query(
      `INSERT INTO enquiries
      (name, email, phone, organization, message)
      VALUES (?, ?, ?, ?, ?)`,
      [
        name,
        email,
        phone || null,
        organization || null,
        message,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      enquiryId: result.insertId,
    });
  } catch (error) {
    console.error("Create enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
    });
  }
});

// ==========================================
// GET ALL ENQUIRIES
// ADMIN PROTECTED ROUTE
// ==========================================
router.get("/", authMiddleware, async (req, res) => {
  try {
    const [enquiries] = await db.query(
      "SELECT * FROM enquiries ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      count: enquiries.length,
      enquiries,
    });
  } catch (error) {
    console.error("Get enquiries error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });
  }
});

// ==========================================
// GET SINGLE ENQUIRY
// ADMIN PROTECTED ROUTE
// ==========================================
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const [enquiries] = await db.query(
      "SELECT * FROM enquiries WHERE id = ? LIMIT 1",
      [id]
    );

    if (enquiries.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      enquiry: enquiries[0],
    });
  } catch (error) {
    console.error("Get enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
    });
  }
});

// ==========================================
// UPDATE ENQUIRY STATUS
// ADMIN PROTECTED ROUTE
// ==========================================
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "contacted",
      "closed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid enquiry status",
      });
    }

    const [result] = await db.query(
      "UPDATE enquiries SET status = ? WHERE id = ?",
      [status, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully",
    });
  } catch (error) {
    console.error("Update enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update enquiry",
    });
  }
});

// ==========================================
// DELETE ENQUIRY
// ADMIN PROTECTED ROUTE
// ==========================================
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      "DELETE FROM enquiries WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
    });
  }
});

module.exports = router;