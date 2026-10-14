import Image from "next/image";
import logo from "@/assets/logo.png";

export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logo} alt="" aria-hidden priority={priority} sizes="64px" className={className} />;
}
