import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaEnvelope,
  FaFilePdf,
  FaBullhorn,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

import Enquiries from "./Enquiries";
import Programs from "./Programs";
import WebsiteUpdate from "./WebsiteUpdate";
import logo1 from "../../assets/images/logo1.png";

function AdminDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");

  const adminData = JSON.parse(
    localStorage.getItem("adminData") || "{}"
  );

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    navigate("/admin/login");
  };

  if (activeSection === "enquiries") {
    return (
      <Enquiries
        onBack={() => setActiveSection("dashboard")}
      />
    );
  }

  if (activeSection === "programs") {
    return (
      <Programs
        onBack={() => setActiveSection("dashboard")}
      />
    );
  }

  if (activeSection === "website-update") {
    return (
      <WebsiteUpdate
        onBack={() => setActiveSection("dashboard")}
      />
    );
  }

  const managementCards = [
    {
      title: "Enquiries",
      description: "View and manage enquiries submitted through the website.",
      icon: FaEnvelope,
      label: "Manage",
      section: "enquiries",
    },
    {
      title: "Upcoming Programs",
      description: "Add, edit, upload and delete upcoming program PDFs.",
      icon: FaFilePdf,
      label: "Content",
      section: "programs",
    },
    {
      title: "Website Update",
      description: "Update the scrolling announcement shown on the homepage.",
      icon: FaBullhorn,
      label: "Live",
      section: "website-update",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F8F5]">

      <header className="sticky top-0 z-50 border-b border-[#173D35]/10 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F4EF] p-2 transition-transform duration-300 hover:scale-105">
              <img
                src={logo1}
                alt="3rd EdHum"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight text-[#043329] sm:text-xl">
                3rd EdHum
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#28725c]">
                Admin Panel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-xs font-semibold text-[#173D35]">
                {adminData.name || "Admin"}
              </p>

              <p className="text-[10px] text-gray-400">
                Administrator
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="group flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-4 sm:text-sm"
            >
              <FaSignOutAlt className="transition-transform duration-300 group-hover:-translate-x-0.5" />
              Logout
            </button>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">

        {/* WELCOME */}

        <section className="relative mb-7 overflow-hidden rounded-[22px] bg-[#173D35] px-6 py-6 shadow-lg shadow-[#173D35]/10 sm:px-8">

          <div className="absolute -right-14 -top-20 h-48 w-48 rounded-full bg-[#28725c]/40 blur-3xl" />

          <div className="relative z-10 flex items-center justify-between gap-5">

            <div>

              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#8BC7AC]" />

                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#B9DDCC] sm:text-xs">
                  Dashboard Overview
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Welcome back,{" "}
                <span className="text-[#9ED0B9]">
                  {adminData.name || "Admin"}
                </span>
              </h2>

              <p className="mt-1.5 text-xs text-white/55 sm:text-sm">
                Manage your website content, enquiries and programs.
              </p>

            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 sm:flex">
              <FaShieldAlt className="text-lg text-[#9ED0B9]" />
            </div>

          </div>

        </section>

        {/* SECTION TITLE */}

        <div className="mb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#28725c] sm:text-xs">
            Website Management
          </p>

          <h3 className="mt-1 text-xl font-semibold text-[#173D35] sm:text-2xl">
            What would you like to manage?
          </h3>
        </div>

        {/* MANAGEMENT CARDS */}

        <div className="grid gap-4 md:grid-cols-3">

          {managementCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.section}
                className="group relative overflow-hidden rounded-[20px] border border-gray-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#28725c]/20 hover:shadow-[0_15px_35px_rgba(40,114,92,0.12)] sm:p-6"
              >

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E8F4EF] opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F4EF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#28725c]">
                      <Icon className="text-base text-[#28725c] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <span className="rounded-full bg-[#F3F8F5] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#28725c]">
                      {card.label}
                    </span>

                  </div>

                  <h3 className="text-lg font-semibold text-[#173D35] sm:text-xl">
                    {card.title}
                  </h3>

                  <p className="mt-2 min-h-[42px] text-xs leading-5 text-gray-500 sm:text-sm">
                    {card.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveSection(card.section)}
                    className="group/button mt-5 flex items-center gap-2 text-xs font-semibold text-[#28725c] transition-colors duration-300 hover:text-[#173D35] sm:text-sm"
                  >
                    Manage {card.title.replace("Upcoming ", "")}

                    <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover/button:translate-x-1" />
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;
