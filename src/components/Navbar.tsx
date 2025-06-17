import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { AppLogo } from "./AppLogo";

export const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href={"/"}>
          <AppLogo />
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
        <div className="flex items-center gap-2">
          <Link href={"/login"} className={buttonVariants({ variant: "card" })}>
            Login
          </Link>
          <Link href={"/signup"} className={buttonVariants({})}>
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};
