import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { SocialLinkEnum } from "./types";
import { getIconBySocialLink } from "./utils/get-icon-by-social-link";
import Link from "next/link";

interface SocialLinkProps extends HTMLAttributes<HTMLButtonElement> {
  socialLink: SocialLinkEnum;
  link: string;
}

export function SocialLink({ socialLink, link, ...props }: SocialLinkProps) {
  return (
    <Link href={link} target="_blank">
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
    </Link>
  );
}
