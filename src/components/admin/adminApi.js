const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function adminFetch(endpoint, options = {}) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    localStorage.removeItem("adminData");
    window.location.href = "/admin/login";

    throw new Error("Admin login is required.");
  }

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");

    window.location.href = "/admin/login";

    throw new Error(
      "Your admin session has expired. Please login again."
    );
  }

  return response;
}