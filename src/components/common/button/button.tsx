import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "min-w-40 px-6 py-4 justify-center box-border select-none",
        "bg-surface border border-stroke backdrop-blur-xs rounded-lg",
        "hover:bg-surface-hover hover:shadow-lg hover:border-primary",
        "cursor-pointer text-md text-primary",
        props.className
      )}
      {...props}
    />
  );
}
