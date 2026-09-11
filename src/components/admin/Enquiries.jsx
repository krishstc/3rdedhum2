import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaTrash,
  FaSyncAlt,
} from "react-icons/fa";

import { adminFetch } from "./adminApi";

function Enquiries({ onBack }) {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==========================================
  // FETCH ENQUIRIES
  // ==========================================

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await adminFetch(
        "/api/enquiries"
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to fetch enquiries"
        );
      }

      setEnquiries(data.enquiries || []);
    } catch (error) {
      console.error(
        "Fetch enquiries error:",
        error
      );

      setError(
        error.message ||
          "Unable to load enquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  // ==========================================
  // UPDATE STATUS
  // ==========================================

  const updateStatus = async (id, status) => {
    try {
      setUpdatingId(id);
      setError("");
      setSuccess("");

      const response = await adminFetch(
        `/api/enquiries/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to update enquiry"
        );
      }

      setEnquiries((previous) =>
        previous.map((enquiry) =>
          enquiry.id === id
            ? {
                ...enquiry,
                status,
              }
            : enquiry
        )
      );

      setSuccess(
        "Enquiry status updated successfully."
      );
    } catch (error) {
      console.error(
        "Update enquiry error:",
        error
      );

      setError(
        error.message ||
          "Unable to update enquiry."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // ==========================================
  // DELETE ENQUIRY
  // ==========================================

  const deleteEnquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      setError("");
      setSuccess("");

      const response = await adminFetch(
        `/api/enquiries/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to delete enquiry"
        );
      }

      setEnquiries((previous) =>
        previous.filter(
          (enquiry) => enquiry.id !== id
        )
      );

      setSuccess(
        "Enquiry deleted successfully."
      );
    } catch (error) {
      console.error(
        "Delete enquiry error:",
        error
      );

      setError(
        error.message ||
          "Unable to delete enquiry."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // COUNTS
  // ==========================================

  const totalCount = enquiries.length;

  const newCount = enquiries.filter(
    (enquiry) =>
      enquiry.status === "new"
  ).length;

  const contactedCount = enquiries.filter(
    (enquiry) =>
      enquiry.status === "contacted"
  ).length;

  const closedCount = enquiries.filter(
    (enquiry) =>
      enquiry.status === "closed"
  ).length;

  // ==========================================
  // STATUS STYLING
  // ==========================================

  const getStatusClass = (status) => {
    if (status === "new") {
      return "bg-blue-50 text-blue-600 border-blue-200";
    }

    if (status === "contacted") {
      return "bg-yellow-50 text-yellow-600 border-yellow-200";
    }

    if (status === "closed") {
      return "bg-green-50 text-green-600 border-green-200";
    }

    return "bg-gray-50 text-gray-600 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="border-b border-gray-200 bg-white">
        <div className="flex min-h-[72px] items-center justify-between px-5 sm:px-8">

          <div className="flex items-center gap-4">

            <button
              type="button"
              onClick={onBack}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#28725c] hover:bg-[#E8F4EF] hover:text-[#28725c]"
              aria-label="Back to dashboard"
            >
              <FaArrowLeft className="text-sm" />
            </button>

            <div>
              <h1 className="text-xl font-semibold text-[#043329] sm:text-2xl">
                Enquiries
              </h1>

              <p className="text-xs text-gray-500 sm:text-sm">
                View and manage website enquiries
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={fetchEnquiries}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-[#28725c] hover:bg-[#E8F4EF] hover:text-[#28725c] disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
          >
            <FaSyncAlt
              className={
                loading
                  ? "animate-spin"
                  : ""
              }
            />
            Refresh
          </button>

        </div>
      </header>

      {/* ==========================================
          MAIN CONTENT
      ========================================== */}

      <main className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:py-10">

        {/* ==========================================
            SUCCESS
        ========================================== */}

        {success && (
          <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4">
            <p className="text-sm text-green-700">
              {success}
            </p>
          </div>
        )}

        {/* ==========================================
            ERROR
        ========================================== */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
            <p className="text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* ==========================================
            STATISTICS
        ========================================== */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Enquiries
            </p>

            <p className="mt-2 text-3xl font-semibold text-[#173D35]">
              {totalCount}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              New
            </p>

            <p className="mt-2 text-3xl font-semibold text-blue-600">
              {newCount}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Contacted
            </p>

            <p className="mt-2 text-3xl font-semibold text-yellow-600">
              {contactedCount}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">
              Closed
            </p>

            <p className="mt-2 text-3xl font-semibold text-green-600">
              {closedCount}
            </p>
          </div>

        </div>

        {/* ==========================================
            LOADING
        ========================================== */}

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-gray-200 bg-white">

            <div className="text-center">

              <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#28725c] border-t-transparent" />

              <p className="text-sm text-gray-500">
                Loading enquiries...
              </p>

            </div>

          </div>
        )}

        {/* ==========================================
            EMPTY STATE
        ========================================== */}

        {!loading &&
          enquiries.length === 0 && (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 text-center">

              <FaEnvelope className="mb-4 text-4xl text-[#28725c]" />

              <h3 className="text-lg font-semibold text-[#173D35]">
                No enquiries found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Website enquiries will appear here.
              </p>

            </div>
          )}

        {/* ==========================================
            DESKTOP TABLE
        ========================================== */}

        {!loading &&
          enquiries.length > 0 && (
            <div className="hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:block">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[1050px]">

                  <thead className="bg-[#F8FAF9]">
                    <tr>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Contact
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Organization
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Message
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Date
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Status
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Action
                      </th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    {enquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="transition hover:bg-[#F8FAF9]"
                      >

                        <td className="px-5 py-5">

                          <p className="font-semibold text-[#173D35]">
                            {enquiry.name}
                          </p>

                          <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                            <FaEnvelope />
                            {enquiry.email}
                          </p>

                          {enquiry.phone && (
                            <p className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                              <FaPhone />
                              {enquiry.phone}
                            </p>
                          )}

                        </td>

                        <td className="px-5 py-5">

                          {enquiry.organization ? (
                            <p className="flex items-center gap-2 text-sm text-gray-600">
                              <FaBuilding className="text-[#28725c]" />
                              {enquiry.organization}
                            </p>
                          ) : (
                            <span className="text-sm text-gray-400">
                              Not provided
                            </span>
                          )}

                        </td>

                        <td className="max-w-[300px] px-5 py-5">

                          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                            {enquiry.message}
                          </p>

                        </td>

                        <td className="whitespace-nowrap px-5 py-5 text-sm text-gray-500">
                          {enquiry.created_at
                            ? new Date(
                                enquiry.created_at
                              ).toLocaleString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }
                              )
                            : "-"}
                        </td>

                        <td className="px-5 py-5">

                          <select
                            value={
                              enquiry.status
                            }
                            disabled={
                              updatingId ===
                              enquiry.id
                            }
                            onChange={(e) =>
                              updateStatus(
                                enquiry.id,
                                e.target.value
                              )
                            }
                            className={`rounded-lg border px-3 py-2 text-xs font-medium outline-none ${getStatusClass(
                              enquiry.status
                            )}`}
                          >
                            <option value="new">
                              New
                            </option>

                            <option value="contacted">
                              Contacted
                            </option>

                            <option value="closed">
                              Closed
                            </option>
                          </select>

                        </td>

                        <td className="px-5 py-5 text-right">

                          <button
                            type="button"
                            onClick={() =>
                              deleteEnquiry(
                                enquiry.id
                              )
                            }
                            disabled={
                              deletingId ===
                              enquiry.id
                            }
                            className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <FaTrash />

                            {deletingId ===
                            enquiry.id
                              ? "Deleting..."
                              : "Delete"}
                          </button>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>
          )}

        {/* ==========================================
            MOBILE CARDS
        ========================================== */}

        {!loading &&
          enquiries.length > 0 && (
            <div className="space-y-4 lg:hidden">

              {enquiries.map((enquiry) => (
                <div
                  key={enquiry.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-semibold text-[#173D35]">
                        {enquiry.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {enquiry.email}
                      </p>
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-medium capitalize ${getStatusClass(
                        enquiry.status
                      )}`}
                    >
                      {enquiry.status}
                    </span>

                  </div>

                  {enquiry.phone && (
                    <p className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                      <FaPhone className="text-[#28725c]" />
                      {enquiry.phone}
                    </p>
                  )}

                  {enquiry.organization && (
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                      <FaBuilding className="text-[#28725c]" />
                      {enquiry.organization}
                    </p>
                  )}

                  <div className="mt-4 rounded-xl bg-[#F8FAF9] p-4">

                    <p className="text-xs font-medium text-gray-500">
                      Message
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {enquiry.message}
                    </p>

                  </div>

                  <p className="mt-4 text-xs text-gray-400">
                    {enquiry.created_at
                      ? new Date(
                          enquiry.created_at
                        ).toLocaleString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )
                      : "-"}
                  </p>

                  <div className="mt-4 flex flex-col gap-2">

                    <select
                      value={enquiry.status}
                      disabled={
                        updatingId ===
                        enquiry.id
                      }
                      onChange={(e) =>
                        updateStatus(
                          enquiry.id,
                          e.target.value
                        )
                      }
                      className={`w-full rounded-lg border px-3 py-2.5 text-xs font-medium outline-none ${getStatusClass(
                        enquiry.status
                      )}`}
                    >
                      <option value="new">
                        New
                      </option>

                      <option value="contacted">
                        Contacted
                      </option>

                      <option value="closed">
                        Closed
                      </option>
                    </select>

                    <button
                      type="button"
                      onClick={() =>
                        deleteEnquiry(
                          enquiry.id
                        )
                      }
                      disabled={
                        deletingId ===
                        enquiry.id
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 px-3 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <FaTrash />

                      {deletingId ===
                      enquiry.id
                        ? "Deleting..."
                        : "Delete Enquiry"}
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

export default Enquiries;