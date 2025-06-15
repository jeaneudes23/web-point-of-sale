import { Computer } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href={"/"} className="flex shrink-0 items-center gap-2 py-4">
          <Computer className="text-primary size-6" />
          <span className="font-bold">SMPOS</span>
        </Link>
        <div className="flex basis-md items-center justify-between gap-4">
          <Link className={buttonVariants({ variant: "link" })} href={"/features"}>
            Features
          </Link>
          <Link className={buttonVariants({ variant: "link" })} href={"/pricing"}>
            Pricing
          </Link>
          <Link className={buttonVariants({ variant: "link" })} href={"/faq"}>
            FAQ
          </Link>
          <Link className={buttonVariants({ variant: "link" })} href={"/about"}>
            About us
          </Link>
        </div>
        <div>
          <Link href={"/signup"} className={buttonVariants({})}>
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};
