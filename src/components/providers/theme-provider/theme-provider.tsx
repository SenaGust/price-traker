"use client";
import {
  ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from "next-themes";
import { PropsWithChildren } from "react";

export function ThemeProvider({
  children,
  ...props
}: PropsWithChildren<ThemeProviderProps>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
