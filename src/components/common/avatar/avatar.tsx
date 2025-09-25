import Image from "next/image";

export function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={112}
      height={112}
      quality={100}
      priority
      className="size-28 object-cover rounded-full border-solid border-stroke border-2"
    />
  );
}
