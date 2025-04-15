import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { SiThreads } from "react-icons/si";

export const socialMedia = [
  {
    name: "Instagram",
    username: "@anjel19trainer",
    icon: FaInstagram,
    link: "https://www.instagram.com/anjel19trainer" // Añadido https://www.
  },
  {
    name: "Facebook",
    username: "Angel19Ramirez",
    icon: FaFacebookF,
    link: "https://www.facebook.com/share/1BQnwc6YRQ/" // Corregido a https
  },
  {
    name: "TikTok",
    username: "@anjel19trainer",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@anjel19trainer" // Corregido propiedad y añadido https
  },
  {
    name: "YouTube",
    username: "Anjel19Trainer",
    icon: FaYoutube,
    link: "https://www.youtube.com/channel/UCmqlllOJhstWise3zmKimRw" // URL completa del canal
  },
  {
    name: "X (Twitter)",
    username: "@anjel1216",
    icon: FaXTwitter,
    link: "https://twitter.com/anjel1216" // Formato correcto para Twitter
  },
  {
    name: "Threads",
    username: "@anjel19trainer",
    icon: SiThreads,
    link: "https://www.threads.net/@anjel19trainer" // Añadido enlace para Threads
  },
];

export const socialImages = [
  "src/assets/Images/AnjelTrainer.png",
];