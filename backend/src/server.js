const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();

const db = require("./db");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const enquiryRoutes = require("./routes/enquiries");
const programRoutes = require("./routes/programs");
const settingsRoutes = require("./routes/settings");

const app = express();

// ==========================================
// SECURITY
// ==========================================

app.use(helmet());

// ==========================================
// CORS
// ==========================================

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());

// ==========================================
// SERVE UPLOADED PDF FILES
// ==========================================

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "../uploads")
  )
);

// ==========================================
// API ROUTES
// ==========================================

// Authentication routes
app.use("/api/auth", authRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

// Enquiries routes
app.use("/api/enquiries", enquiryRoutes);

// Programs routes
app.use("/api/programs", programRoutes);

// Settings routes
app.use("/api/settings", settingsRoutes);

// ==========================================
// BACKEND HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running successfully!",
  });
});

// ==========================================
// MYSQL CONNECTION TEST
// ==========================================

app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT 1 AS connected"
    );

    res.status(200).json({
      success: true,
      message: "MySQL connected successfully!",
      result: rows,
    });
  } catch (error) {
    console.error(
      "Database connection error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// ==========================================
// 404 HANDLER
// ==========================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found",
  });
});

// ==========================================
// ERROR HANDLER
// ==========================================

app.use((error, req, res, next) => {
  console.error("Server error:", error);

  if (error.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS policy blocked this request",
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// ==========================================
// START SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});