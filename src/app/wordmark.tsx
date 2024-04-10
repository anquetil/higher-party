"use client";

import { toast } from "react-hot-toast";

export default function Wordmark() {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText("↑");
        toast("Copied to clipboard!");
      }}
      className="group cursor-pointer text-6xl font-medium z-10 -ml-2.5"
    >
      <span className="inline-block group-hover:-translate-y-4 transition-transform duration-700 ease-in-out">
        ↑
      </span>
      higher
    </div>
  );
}
