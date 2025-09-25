import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<{}> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className={twMerge(
        "min-w-40 px-6 py-4 justify-center box-border",
        "bg-surface border border-stroke backdrop-blur-xs rounded-lg",
        "hover:bg-surface-hover hover:shadow-lg",
        "cursor-pointer text-md text-primary",
        props.className
      )}
      {...props}
    />
  );
}
