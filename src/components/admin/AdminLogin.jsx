import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
  FaEnvelope,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import logo1 from "../../assets/images/logo1.png";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      localStorage.setItem("adminToken", data.token);

      localStorage.setItem(
        "adminData",
        JSON.stringify(data.admin)
      );

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Admin login error:", error);

      setError(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#123F35] px-4 py-5 sm:px-6">

      {/* SUBTLE BACKGROUND DECORATION */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#28725c]/40 blur-3xl" />

      <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#8CBFA8]/15 blur-3xl" />

      <div className="absolute right-[7%] top-[10%] h-24 w-24 rounded-full border border-white/10" />

      <div className="absolute bottom-[9%] left-[7%] h-16 w-16 rounded-full border border-[#C7A45D]/20" />

      {/* MAIN CARD */}

      <div className="relative z-10 grid w-full max-w-[1080px] overflow-hidden rounded-[28px] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.25)] md:grid-cols-2">

        {/* LEFT BRANDING */}

        <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#1B5547] to-[#123F35] px-8 py-8 sm:min-h-[530px] sm:px-10">

          {/* PREMIUM DECORATION */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#C7A45D]/20" />

          <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-white/10" />

          <div className="absolute left-8 top-10 h-1.5 w-1.5 rounded-full bg-[#C7A45D]" />

          <div className="absolute left-12 top-14 h-1 w-1 rounded-full bg-white/40" />

          <div className="absolute bottom-12 right-12 h-2 w-2 rounded-full bg-[#C7A45D]/70" />

          {/* BRAND CONTENT */}

          <div className="relative z-10 text-center">

            {/* LARGE LOGO */}

            <div className="relative mx-auto mb-5 flex h-[225px] w-[225px] items-center justify-center rounded-full bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] ring-1 ring-white/30 transition-all duration-500 hover:scale-105 sm:h-[245px] sm:w-[245px] sm:p-9">

              <div className="absolute inset-2 rounded-full border border-[#C7A45D]/25" />

              <img
                src={logo1}
                alt="3rd EdHum"
                className="relative z-10 h-full w-full object-contain"
              />

            </div>

            {/* BIGGER HEADING */}

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-[46px]">
              3rd EdHum
            </h1>

            {/* GOLD DIVIDER */}

            <div className="mx-auto mt-3 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#C7A45D]/60" />

              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#D9C28A]">
                Admin Portal
              </p>

              <span className="h-px w-10 bg-[#C7A45D]/60" />

            </div>

          </div>

        </div>

        {/* LOGIN SECTION */}

        <div className="relative flex items-center bg-[#FCFDFC] px-7 py-9 sm:px-10 lg:px-12">

          {/* SMALL DECORATIVE CORNER */}

          <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden">

            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full border-[12px] border-[#E6F1EC]" />

          </div>

          <div className="w-full max-w-[390px]">

            {/* LOGIN HEADING */}

            <div className="mb-7">

              <div className="mb-3 flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#28725c]" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#28725c]">
                  Secure Access
                </span>

              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[#173D35] sm:text-[38px]">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Sign in to manage your website.
              </p>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleLogin}
              className="space-y-4"
            >

              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#173D35]"
                >
                  Email Address
                </label>

                <div className="group relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-colors duration-300 group-focus-within:text-[#28725c]" />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter admin email"
                    autoComplete="email"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-4 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-[#28725c]/40 focus:border-[#28725c] focus:ring-4 focus:ring-[#28725c]/10"
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#173D35]"
                >
                  Password
                </label>

                <div className="group relative">

                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-colors duration-300 group-focus-within:text-[#28725c]" />

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3.5 pl-11 pr-12 text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-[#28725c]/40 focus:border-[#28725c] focus:ring-4 focus:ring-[#28725c]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#28725c]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

              </div>

              {/* ERROR */}

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5">

                  <p className="text-sm text-red-600">
                    {error}
                  </p>

                </div>
              )}

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-[#28725c] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#28725c]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D604D] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login to Admin Panel

                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;