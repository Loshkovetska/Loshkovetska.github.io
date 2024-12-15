import UserImage from "@/img/user.png";
import Image from "next/image";

type HeaderAvatarPropType = {
  image?: string | null;
  name?: string | null;
};

export default function HeaderAvatar({ image, name }: HeaderAvatarPropType) {
  return (
    <Image
      src={image?.includes("http") ? image : null || UserImage}
      alt={name || "user-photo"}
      width={80}
      height={80}
      className="object-cover object-center"
    />
  );
}
