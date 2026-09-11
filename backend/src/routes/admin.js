const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// ADMIN PROFILE
// Protected Route
// ==========================================
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Admin authentication successful",
    admin: req.admin,
  });
});

module.exports = router;