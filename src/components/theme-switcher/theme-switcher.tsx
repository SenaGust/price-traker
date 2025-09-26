"use client";
import { useTheme } from "next-themes";
import { Switch } from "../common/switch";

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch
      value={resolvedTheme === "dark"}
      onChange={(value) => setTheme(value ? "dark" : "light")}
    />
  );
}
