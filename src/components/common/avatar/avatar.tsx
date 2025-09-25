import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={400}
      height={400}
      quality={100}
      priority
      className="size-100 object-cover rounded-full border-solid border-stroke border-2"
    />
  );
}
