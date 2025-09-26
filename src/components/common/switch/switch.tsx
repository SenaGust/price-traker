"use client";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  value: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export function Switch({ value, onChange }: SwitchProps) {
  return (
    <div
      className="group flex items-center justify-center w-16 h-8 cursor-pointer focus-visible:outline-none"
      onClick={() => onChange(!value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onChange(!value);
        }
      }}
      tabIndex={0}
      role="switch"
      aria-checked={value}
      suppressHydrationWarning
    >
      {/* Background */}
      <div
        className={twMerge(
          "w-16 h-6 rounded-full",
          "bg-surface border-solid border-stroke border-2 shadow-2xl"
        )}
      />

      {/* Shadow */}
      <div
        aria-hidden={true}
        className={twMerge(
          "group-hover:bg-highlight -z-1 size-12 rounded-full",
          "absolute",
          "transition-transform duration-300",
          "dark:translate-x-1/3 -translate-x-1/3"
        )}
      />

      {/* Handle */}
      <div
        aria-hidden={true}
        className={twMerge(
          "absolute",
          "group-active:scale-95 group-focus-visible:outline-2",
          "transition-all duration-300",
          "dark:translate-x-1/2 -translate-x-1/2",
          "flex size-8 rounded-full items-center justify-center",
          "bg-inverted-primary text-primary",
          "shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]"
        )}
      >
        <SunIcon className="dark:hidden" />
        <MoonIcon className="hidden dark:block" />
      </div>
    </div>
  );
}
