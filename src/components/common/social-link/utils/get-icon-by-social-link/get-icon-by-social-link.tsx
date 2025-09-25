import { SocialLinkEnum } from "../../types";
import {
  GithubLogo as GithubLogoSSR,
  TwitterLogo as TwitterLogoSSR,
  TwitchLogo as TwitchLogoSSR,
  FacebookLogo as FacebookLogoSSR,
  InstagramLogo as InstagramLogoSSR,
  YoutubeLogo as YoutubeLogoSSR,
  LinkedinLogo as LinkedinLogoSSR,
  TiktokLogo as TiktokLogoSSR,
  WhatsappLogo as WhatsappLogoSSR,
} from "@phosphor-icons/react/dist/ssr";

export function getIconBySocialLink(socialLink: SocialLinkEnum) {
  switch (socialLink) {
    case SocialLinkEnum.GitHub:
      return <GithubLogoSSR />;
    case SocialLinkEnum.Twitter:
      return <TwitterLogoSSR />;
    case SocialLinkEnum.Twitch:
      return <TwitchLogoSSR />;
    case SocialLinkEnum.Facebook:
      return <FacebookLogoSSR />;
    case SocialLinkEnum.Instagram:
      return <InstagramLogoSSR />;
    case SocialLinkEnum.Youtube:
      return <YoutubeLogoSSR />;
    case SocialLinkEnum.LinkedIn:
      return <LinkedinLogoSSR />;
    case SocialLinkEnum.Whatsapp:
      return <WhatsappLogoSSR />;
    case SocialLinkEnum.Tiktok:
      return <TiktokLogoSSR />;
  }
}
