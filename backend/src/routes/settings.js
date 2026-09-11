const express = require("express");

const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// GET SCROLLING UPDATE
// PUBLIC ROUTE
// ==========================================

router.get("/scrolling-update", async (req, res) => {
  try {
    const [settings] = await db.query(
      "SELECT setting_value FROM website_settings WHERE setting_key = ? LIMIT 1",
      ["scrolling_update"]
    );

    if (settings.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Scrolling update not found",
      });
    }

    res.status(200).json({
      success: true,
      scrolling_update: settings[0].setting_value,
    });
  } catch (error) {
    console.error(
      "Get scrolling update error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch scrolling update",
    });
  }
});

// ==========================================
// UPDATE SCROLLING UPDATE
// ADMIN ONLY
// ==========================================

router.put(
  "/scrolling-update",
  authMiddleware,
  async (req, res) => {
    try {
      const { scrolling_update } = req.body;

      if (
        !scrolling_update ||
        !scrolling_update.trim()
      ) {
        return res.status(400).json({
          success: false,
          message: "Scrolling update is required",
        });
      }

      await db.query(
        `UPDATE website_settings
         SET setting_value = ?
         WHERE setting_key = ?`,
        [
          scrolling_update.trim(),
          "scrolling_update",
        ]
      );

      res.status(200).json({
        success: true,
        message: "Scrolling update updated successfully",
      });
    } catch (error) {
      console.error(
        "Update scrolling update error:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Failed to update scrolling update",
      });
    }
  }
);

module.exports = router;