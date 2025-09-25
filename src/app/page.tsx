import { Button } from "@/components/common/button";
import { SocialLink } from "@/components/common/social-link";
import { SocialLinkEnum } from "@/components/common/social-link/types";

export default async function Home() {
  return (
    <div>
      <Button>Link</Button>
      <SocialLink socialLink={SocialLinkEnum.Whatsapp} />
    </div>
  );
}
