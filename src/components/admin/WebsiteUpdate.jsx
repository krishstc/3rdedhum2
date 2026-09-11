import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaBullhorn,
  FaSave,
  FaSyncAlt,
} from "react-icons/fa";

import { adminFetch } from "./adminApi";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function WebsiteUpdate({ onBack }) {
  const [scrollingUpdate, setScrollingUpdate] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // FETCH CURRENT UPDATE
  // ==========================================

  const fetchUpdate = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await fetch(
        `${API_BASE_URL}/api/settings/scrolling-update`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to fetch website update"
        );
      }

      setScrollingUpdate(data.scrolling_update || "");
    } catch (error) {
      console.error(
        "Fetch website update error:",
        error
      );

      setError(
        error.message || "Unable to load website update."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdate();
  }, []);

  // ==========================================
  // SAVE UPDATE
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!scrollingUpdate.trim()) {
      setError(
        "Please enter a website announcement."
      );
      return;
    }

    try {
      setSaving(true);

      const response = await adminFetch(
        "/api/settings/scrolling-update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            scrolling_update:
              scrollingUpdate.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to update announcement"
        );
      }

      setSuccess(
        "Website announcement updated successfully."
      );
    } catch (error) {
      console.error(
        "Update website announcement error:",
        error
      );

      setError(
        error.message ||
          "Unable to update website announcement."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="border-b border-gray-200 bg-white">
        <div className="flex min-h-[72px] items-center px-5 sm:px-8">

          <button
            type="button"
            onClick={onBack}
            className="mr-4 flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#28725c] hover:bg-[#E8F4EF] hover:text-[#28725c]"
            aria-label="Back to dashboard"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <div>
            <h1 className="text-xl font-semibold text-[#043329] sm:text-2xl">
              Website Update
            </h1>

            <p className="text-xs text-gray-500 sm:text-sm">
              Manage the homepage scrolling announcement
            </p>
          </div>

        </div>
      </header>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <main className="mx-auto max-w-[900px] px-5 py-8 sm:px-8 lg:py-10">

        {/* SUCCESS */}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4">
            <p className="text-sm text-green-700">
              {success}
            </p>
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* CARD */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7 flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#E8F4EF]">
              <FaBullhorn className="text-lg text-[#28725c]" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173D35]">
                Homepage Scrolling Update
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                This message appears in the announcement bar on the homepage.
              </p>
            </div>

          </div>

          {loading ? (
            <div className="flex min-h-[180px] items-center justify-center">

              <div className="text-center">

                <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#28725c] border-t-transparent" />

                <p className="text-sm text-gray-500">
                  Loading current update...
                </p>

              </div>

            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* TEXT */}

              <div>
                <label
                  htmlFor="scrolling-update"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Announcement Text
                </label>

                <textarea
                  id="scrolling-update"
                  value={scrollingUpdate}
                  onChange={(e) =>
                    setScrollingUpdate(
                      e.target.value
                    )
                  }
                  rows={5}
                  maxLength={500}
                  placeholder="Enter homepage announcement..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 text-gray-800 outline-none transition focus:border-[#28725c] focus:ring-2 focus:ring-[#28725c]/10"
                />

                <div className="mt-2 flex justify-between">

                  <p className="text-xs text-gray-400">
                    This text will be shown on the homepage.
                  </p>

                  <p className="text-xs text-gray-400">
                    {scrollingUpdate.length}/500
                  </p>

                </div>
              </div>

              {/* PREVIEW */}

              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">
                  Preview
                </p>

                <div className="overflow-hidden rounded-xl bg-[#043329] px-4 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#28725c]">
                      <FaBullhorn className="text-xs text-white" />
                    </div>

                    <p className="truncate text-sm font-medium text-white">
                      {scrollingUpdate ||
                        "Your announcement will appear here"}
                    </p>

                  </div>

                </div>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={fetchUpdate}
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FaSyncAlt />
                  Reload
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#28725c] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d5b48] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FaSave />

                  {saving
                    ? "Saving..."
                    : "Save Update"}
                </button>

              </div>

            </form>
          )}

        </div>

      </main>
    </div>
  );
}

export default WebsiteUpdate;