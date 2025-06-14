"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
  href: string;
  label: string;
  icon: ReactNode;
}

export default function SidebarLink({ href, label, icon }: Props) {
  const path = usePathname();
  const active = path.startsWith(href);
  return (
    <Link href={href} className={buttonVariants({ className: "justify-start border-0 capitalize", variant: active ? "default" : "card" })}>
      <span className={twMerge(active ? "" : "text-primary", "shrink-0")}>{icon}</span>
      {label}
    </Link>
  );
}
