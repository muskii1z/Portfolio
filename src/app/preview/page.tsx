"use client";

import { useState } from "react";

const devices = [
  { name: "iPhone SE", width: 375, height: 667 },
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPhone 14 Pro Max", width: 430, height: 932 },
  { name: "Pixel 7", width: 412, height: 915 },
  { name: "iPad Mini", width: 768, height: 1024 },
];

const pages = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "VitalzHub", path: "/projects/vitalz-hub" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

export default function PreviewPage() {
  const [device, setDevice] = useState(devices[1]);
  const [page, setPage] = useState(pages[0]);

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col items-center p-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {devices.map((d) => (
          <button
            key={d.name}
            onClick={() => setDevice(d)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              device.name === d.name
                ? "bg-white text-black"
                : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
            }`}
          >
            {d.name} ({d.width}x{d.height})
          </button>
        ))}
      </div>

      {/* Page selector */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {pages.map((p) => (
          <button
            key={p.path}
            onClick={() => setPage(p)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              page.path === p.path
                ? "bg-blue-500 text-white"
                : "bg-neutral-700 text-neutral-300 hover:bg-neutral-600"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Phone frame */}
      <div className="relative">
        {/* Device label */}
        <div className="text-neutral-500 text-xs text-center mb-3">
          {device.name} — {device.width}x{device.height} — {page.name}
        </div>

        {/* Phone bezel */}
        <div
          className="bg-black rounded-[3rem] p-3 shadow-2xl shadow-black/50"
          style={{ width: device.width + 24, height: device.height + 24 }}
        >
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-2xl z-10" />

          {/* Screen */}
          <iframe
            key={page.path + device.name}
            src={page.path}
            className="bg-white rounded-[2.5rem] w-full h-full"
            style={{ width: device.width, height: device.height }}
          />
        </div>
      </div>
    </div>
  );
}
