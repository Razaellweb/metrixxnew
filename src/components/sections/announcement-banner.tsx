"use client";

import { useState } from "react";
import { X } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="relative bg-green-600">
      <div className="container flex items-center justify-between gap-4 py-3 pr-12">
        <div className="flex flex-1 items-center justify-center gap-3 sm:gap-4">
          <span className="text-center text-sm font-medium text-white">
            New: Python SDK beta now available
          </span>
          <a
            href="#"
            className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-lg bg-white px-3 text-xs font-semibold text-green-700 shadow-xs transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Read docs
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-sm p-1.5 text-white/80 transition-all duration-200 hover:scale-110 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Close banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;