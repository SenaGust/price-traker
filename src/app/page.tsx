import { Avatar } from "@/components/common/avatar/avatar";
import { Button } from "@/components/common/button";
import { SocialLink } from "@/components/common/social-link";
import { SocialLinkEnum } from "@/components/common/social-link/types";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 w-[800px] mx-auto my-2 justify-center">
      <Button>Link</Button>

      <SocialLink socialLink={SocialLinkEnum.Whatsapp} />

      <Avatar />
    </div>
  );
}
