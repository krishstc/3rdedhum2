import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaPlus,
  FaEdit,
  FaTrash,
  FaFilePdf,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

import { adminFetch } from "./adminApi";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Programs({ onBack }) {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);

  const [title, setTitle] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");
  const [pdf, setPdf] = useState(null);

  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // FETCH PROGRAMS
  // ==========================================

  const fetchPrograms = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${API_BASE_URL}/api/programs`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to fetch programs"
        );
      }

      setPrograms(data.programs || []);
    } catch (error) {
      console.error("Fetch programs error:", error);

      setError(
        error.message || "Unable to load upcoming programs."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // ==========================================
  // RESET FORM
  // ==========================================

  const resetForm = () => {
    setTitle("");
    setPaymentUrl("");
    setPdf(null);
    setEditingProgram(null);
    setShowForm(false);
  };

  // ==========================================
  // ADD PROGRAM
  // ==========================================

  const handleAddProgram = () => {
    setSuccess("");
    setError("");

    setTitle("");
    setPaymentUrl("");
    setPdf(null);
    setEditingProgram(null);

    setShowForm(true);
  };

  // ==========================================
  // EDIT PROGRAM
  // ==========================================

  const handleEditProgram = (program) => {
    setSuccess("");
    setError("");

    setEditingProgram(program);

    setTitle(program.title || "");
    setPaymentUrl(program.payment_url || "");
    setPdf(null);

    setShowForm(true);
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!title.trim()) {
      setError("Program title is required.");
      return;
    }

    if (!editingProgram && !pdf) {
      setError("Please select a PDF file.");
      return;
    }

    if (pdf) {
      if (
        pdf.type !== "application/pdf" &&
        !pdf.name.toLowerCase().endsWith(".pdf")
      ) {
        setError("Only PDF files are allowed.");
        return;
      }

      if (pdf.size > 10 * 1024 * 1024) {
        setError("PDF file must be smaller than 10 MB.");
        return;
      }
    }

    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("title", title.trim());
      formData.append("payment_url", paymentUrl.trim());

      if (pdf) {
        formData.append("pdf", pdf);
      }

      const endpoint = editingProgram
        ? `/api/programs/${editingProgram.id}`
        : "/api/programs";

      const response = await adminFetch(endpoint, {
        method: editingProgram ? "PUT" : "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to save program"
        );
      }

      setSuccess(
        editingProgram
          ? "Program updated successfully."
          : "Program added successfully."
      );

      resetForm();

      await fetchPrograms();
    } catch (error) {
      console.error("Save program error:", error);

      setError(
        error.message || "Unable to save program."
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this program? The uploaded PDF will also be deleted."
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");
      setSuccess("");

      const response = await adminFetch(
        `/api/programs/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to delete program"
        );
      }

      setPrograms((previous) =>
        previous.filter(
          (program) => program.id !== id
        )
      );

      setSuccess("Program deleted successfully.");
    } catch (error) {
      console.error("Delete program error:", error);

      setError(
        error.message || "Unable to delete program."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // OPEN PDF
  // ==========================================

  const openPdf = (pdfPath) => {
    if (!pdfPath) return;

    window.open(
      `${API_BASE_URL}${pdfPath}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // OPEN PAYMENT
  // ==========================================

  const openPayment = (paymentUrl) => {
    if (!paymentUrl) return;

    window.open(
      paymentUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">

      {/* HEADER */}

      <header className="border-b border-gray-200 bg-white">
        <div className="flex min-h-[72px] items-center justify-between px-5 sm:px-8">

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={onBack}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#28725c] hover:bg-[#E8F4EF] hover:text-[#28725c]"
              aria-label="Back to dashboard"
            >
              <FaArrowLeft />
            </button>

            <div>
              <h1 className="text-xl font-semibold text-[#043329] sm:text-2xl">
                Upcoming Programs
              </h1>

              <p className="text-xs text-gray-500 sm:text-sm">
                Manage program PDFs and registration links
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={handleAddProgram}
            className="flex items-center gap-2 rounded-lg bg-[#28725c] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#1d5b48] sm:px-4 sm:text-sm"
          >
            <FaPlus />
            Add Program
          </button>

        </div>
      </header>

      {/* CONTENT */}

      <main className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:py-10">

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4">
            <p className="text-sm text-green-700">
              {success}
            </p>
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* FORM */}

        {showForm && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <div className="mb-6 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-semibold text-[#173D35]">
                  {editingProgram
                    ? "Edit Program"
                    : "Add New Program"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {editingProgram
                    ? "Update program details or replace the PDF."
                    : "Add a new upcoming program."}
                </p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100"
              >
                <FaTimes />
              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* TITLE */}

              <div>
                <label
                  htmlFor="program-title"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Program Title
                </label>

                <input
                  id="program-title"
                  type="text"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  placeholder="Enter program title"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#28725c] focus:ring-2 focus:ring-[#28725c]/10"
                />
              </div>

              {/* PAYMENT URL */}

              <div>
                <label
                  htmlFor="payment-url"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Payment / Registration URL
                </label>

                <input
                  id="payment-url"
                  type="url"
                  value={paymentUrl}
                  onChange={(e) =>
                    setPaymentUrl(e.target.value)
                  }
                  placeholder="https://example.com/register"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#28725c] focus:ring-2 focus:ring-[#28725c]/10"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Optional.
                </p>
              </div>

              {/* PDF */}

              <div>
                <label
                  htmlFor="program-pdf"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Program PDF
                </label>

                <div className="rounded-xl border-2 border-dashed border-gray-200 bg-[#F8FAF9] p-5">

                  <input
                    id="program-pdf"
                    type="file"
                    accept="application/pdf,.pdf"
                    onChange={(e) =>
                      setPdf(
                        e.target.files?.[0] || null
                      )
                    }
                    className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#28725c] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#1d5b48]"
                  />

                  <p className="mt-3 text-xs text-gray-400">
                    PDF only. Maximum size: 10 MB.
                  </p>

                  {editingProgram && !pdf && (
                    <p className="mt-2 text-xs text-[#28725c]">
                      Existing PDF will remain unchanged.
                    </p>
                  )}

                  {pdf && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                      <FaFilePdf className="text-red-500" />

                      <span className="break-all">
                        {pdf.name}
                      </span>
                    </div>
                  )}

                </div>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={resetForm}
                  disabled={saving}
                  className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-[#28725c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d5b48] disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingProgram
                    ? "Update Program"
                    : "Add Program"}
                </button>

              </div>

            </form>

          </div>
        )}

        {/* LOADING */}

        {loading && (
          <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-gray-200 bg-white">

            <div className="text-center">

              <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#28725c] border-t-transparent" />

              <p className="text-sm text-gray-500">
                Loading programs...
              </p>

            </div>

          </div>
        )}

        {/* EMPTY */}

        {!loading && programs.length === 0 && (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-center">

            <FaFilePdf className="mb-4 text-4xl text-[#28725c]" />

            <h3 className="text-lg font-semibold text-[#173D35]">
              No programs available
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Add your first upcoming program.
            </p>

            <button
              type="button"
              onClick={handleAddProgram}
              className="mt-5 flex items-center gap-2 rounded-lg bg-[#28725c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d5b48]"
            >
              <FaPlus />
              Add Program
            </button>

          </div>
        )}

        {/* PROGRAMS */}

        {!loading && programs.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {programs.map((program) => (
              <div
                key={program.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F4EF]">
                  <FaFilePdf className="text-lg text-[#28725c]" />
                </div>

                <h3 className="min-h-[48px] text-lg font-semibold leading-6 text-[#173D35]">
                  {program.title}
                </h3>

                {program.created_at && (
                  <p className="mt-2 text-xs text-gray-400">
                    Added{" "}
                    {new Date(
                      program.created_at
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() =>
                    openPdf(program.pdf_path)
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#28725c] px-4 py-2.5 text-sm font-medium text-[#28725c] transition hover:bg-[#28725c] hover:text-white"
                >
                  <FaFilePdf />
                  Open PDF
                </button>

                {program.payment_url && (
                  <button
                    type="button"
                    onClick={() =>
                      openPayment(
                        program.payment_url
                      )
                    }
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-[#28725c] hover:bg-[#E8F4EF] hover:text-[#28725c]"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Registration Link
                  </button>
                )}

                <div className="mt-4 flex gap-2 border-t border-gray-100 pt-4">

                  <button
                    type="button"
                    onClick={() =>
                      handleEditProgram(program)
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E8F4EF] px-3 py-2.5 text-xs font-medium text-[#28725c] transition hover:bg-[#28725c] hover:text-white"
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(program.id)
                    }
                    disabled={
                      deletingId === program.id
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-100 px-3 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                  >
                    <FaTrash />

                    {deletingId === program.id
                      ? "Deleting..."
                      : "Delete"}
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
}

export default Programs;