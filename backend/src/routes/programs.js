const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ==========================================
// CREATE UPLOAD FOLDER
// ==========================================

const uploadDirectory = path.join(
  __dirname,
  "../../uploads/programs"
);

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, {
    recursive: true,
  });
}

// ==========================================
// MULTER STORAGE
// ==========================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },

  filename: (req, file, cb) => {
    const originalName = path
      .parse(file.originalname)
      .name
      .replace(/[^a-zA-Z0-9-_]/g, "-");

    const extension = path.extname(file.originalname);

    const uniqueName = `${Date.now()}-${originalName}${extension}`;

    cb(null, uniqueName);
  },
});

// ==========================================
// ONLY PDF FILES
// ==========================================

const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    if (extension !== ".pdf") {
      return cb(
        new Error("Only PDF files are allowed")
      );
    }

    cb(null, true);
  },
});

// ==========================================
// GET ALL PROGRAMS
// PUBLIC
// ==========================================

router.get("/", async (req, res) => {
  try {
    const [programs] = await db.query(
      "SELECT * FROM upcoming_programs ORDER BY created_at DESC"
    );

    res.status(200).json({
      success: true,
      count: programs.length,
      programs,
    });
  } catch (error) {
    console.error("Get programs error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch programs",
    });
  }
});

// ==========================================
// GET SINGLE PROGRAM
// PUBLIC
// ==========================================

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [programs] = await db.query(
      "SELECT * FROM upcoming_programs WHERE id = ? LIMIT 1",
      [id]
    );

    if (programs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      program: programs[0],
    });
  } catch (error) {
    console.error("Get program error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch program",
    });
  }
});

// ==========================================
// CREATE PROGRAM
// ADMIN ONLY
// ==========================================

router.post(
  "/",
  authMiddleware,
  upload.single("pdf"),
  async (req, res) => {
    try {
      const { title, payment_url } = req.body;

      if (!title) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }

        return res.status(400).json({
          success: false,
          message: "Program title is required",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "PDF file is required",
        });
      }

      const pdfPath = `/uploads/programs/${req.file.filename}`;

      const [result] = await db.query(
        `INSERT INTO upcoming_programs
        (title, pdf_path, payment_url)
        VALUES (?, ?, ?)`,
        [
          title,
          pdfPath,
          payment_url || null,
        ]
      );

      res.status(201).json({
        success: true,
        message: "Program created successfully",
        programId: result.insertId,
        pdf_path: pdfPath,
      });
    } catch (error) {
      console.error("Create program error:", error);

      if (req.file) {
        try {
          fs.unlinkSync(req.file.path);
        } catch (fileError) {
          console.error(
            "Error deleting uploaded file:",
            fileError
          );
        }
      }

      res.status(500).json({
        success: false,
        message: "Failed to create program",
      });
    }
  }
);

// ==========================================
// UPDATE PROGRAM
// ADMIN ONLY
// ==========================================

router.put(
  "/:id",
  authMiddleware,
  upload.single("pdf"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { title, payment_url } = req.body;

      if (!title) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }

        return res.status(400).json({
          success: false,
          message: "Program title is required",
        });
      }

      const [programs] = await db.query(
        "SELECT * FROM upcoming_programs WHERE id = ? LIMIT 1",
        [id]
      );

      if (programs.length === 0) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }

        return res.status(404).json({
          success: false,
          message: "Program not found",
        });
      }

      const existingProgram = programs[0];

      let pdfPath = existingProgram.pdf_path;

      // If a new PDF was uploaded
      if (req.file) {
        pdfPath = `/uploads/programs/${req.file.filename}`;
      }

      await db.query(
        `UPDATE upcoming_programs
         SET title = ?, pdf_path = ?, payment_url = ?
         WHERE id = ?`,
        [
          title,
          pdfPath,
          payment_url || null,
          id,
        ]
      );

      // Delete old PDF after successful database update
      if (req.file && existingProgram.pdf_path) {
        const oldFileName = path.basename(
          existingProgram.pdf_path
        );

        const oldFilePath = path.join(
          uploadDirectory,
          oldFileName
        );

        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      res.status(200).json({
        success: true,
        message: "Program updated successfully",
      });
    } catch (error) {
      console.error("Update program error:", error);

      if (req.file) {
        try {
          fs.unlinkSync(req.file.path);
        } catch (fileError) {
          console.error(
            "Error deleting uploaded file:",
            fileError
          );
        }
      }

      res.status(500).json({
        success: false,
        message: "Failed to update program",
      });
    }
  }
);

// ==========================================
// DELETE PROGRAM
// ADMIN ONLY
// ==========================================

router.delete(
  "/:id",
  authMiddleware,
  async (req, res) => {
    try {
      const { id } = req.params;

      const [programs] = await db.query(
        "SELECT * FROM upcoming_programs WHERE id = ? LIMIT 1",
        [id]
      );

      if (programs.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Program not found",
        });
      }

      const program = programs[0];

      // Delete database record
      await db.query(
        "DELETE FROM upcoming_programs WHERE id = ?",
        [id]
      );

      // Delete actual PDF file
      if (program.pdf_path) {
        const fileName = path.basename(
          program.pdf_path
        );

        const filePath = path.join(
          uploadDirectory,
          fileName
        );

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      res.status(200).json({
        success: true,
        message: "Program and PDF deleted successfully",
      });
    } catch (error) {
      console.error("Delete program error:", error);

      res.status(500).json({
        success: false,
        message: "Failed to delete program",
      });
    }
  }
);

module.exports = router;