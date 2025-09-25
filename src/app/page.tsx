import {
  MoonIcon,
  SunIcon,
  AmazonLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { logoAmazon } from "ionicons/icons";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <MoonIcon />
      <SunIcon />
      <AmazonLogoIcon />
      <Image src={logoAmazon} alt="" width={32} height={32} />

      <span className="text-sm text-primary">text-sm</span>
      <br />
      <span className="text-md text-primary">text-md</span>
    </div>
  );
}
