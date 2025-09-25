import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SocialLinkEnum } from "./types";
import { getIconBySocialLink } from "./utils/get-icon-by-social-link";

interface SocialLinkProps extends ButtonHTMLAttributes<{}> {
  socialLink: SocialLinkEnum;
}

export function SocialLink({ socialLink, ...props }: SocialLinkProps) {
  return (
    <button
      className={twMerge(
        "size-10 p-2 rounded-full",
        "flex justify-center items-center text-primary",
        "[&>svg]:size-6 [&>svg]:shrink-0",
        "hover:bg-highlight active:bg-highlight",
        "cursor-pointer",
        props.className
      )}
      {...props}
    >
      {getIconBySocialLink(socialLink)}
    </button>
  );
}
