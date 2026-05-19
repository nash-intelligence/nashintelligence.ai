"use client";

import { useEffect, useState } from "react";

type ThemePreference = "system" | "light" | "dark";

const options: Array<{ value: ThemePreference; label: string }> = [
  { value: "system", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

function applyTheme(preference: ThemePreference) {
  const resolved =
    preference === "system"
      ? window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : preference;

  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = preference;
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const stored = window.localStorage.getItem("kf-theme");
  return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
}

export default function ThemeToggle() {
  const [preference, setPreference] = useState<ThemePreference>(getStoredPreference);

  useEffect(() => {
    applyTheme(preference);
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = () => {
      if (preference === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [preference]);

  const updatePreference = (next: ThemePreference) => {
    setPreference(next);
    window.localStorage.setItem("kf-theme", next);
    applyTheme(next);
  };

  return (
    <div
      className="flex items-center rounded-md border border-white-border bg-white/[0.03] p-1 text-xs font-semibold text-slate-500"
      aria-label="Theme preference"
    >
      {options.map((option) => {
        const active = option.value === preference;
        return (
          <button
            key={option.value}
            type="button"
            className={`rounded px-2.5 py-1.5 transition-colors ${
              active ? "bg-brand-blue text-white" : "hover:bg-white/[0.05] hover:text-white"
            }`}
            onClick={() => updatePreference(option.value)}
            aria-pressed={active}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
