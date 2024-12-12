import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const SOCIAL_LINKS = [
  {
    id: "1",
    href: "https://www.instagram.com/",
    icon: (
      <FaInstagram className="size-6 fill-white/80 group-hover:fill-[#c13584]" />
    ),
  },
  {
    id: "2",
    href: "https://uk-ua.facebook.com/",
    icon: (
      <FaFacebook className="size-6 fill-white/80 group-hover:fill-[#4267b2]" />
    ),
  },
  {
    id: "3",
    href: "https://www.youtube.com/",
    icon: (
      <FaYoutube className="size-6 fill-white/80 group-hover:fill-[#ff0000]" />
    ),
  },
];
