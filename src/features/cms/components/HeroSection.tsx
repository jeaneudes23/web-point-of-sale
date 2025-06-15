import { buttonVariants } from "@/components/ui/button";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="container">
      <div className="mx-auto max-w-4xl pt-28 pb-20 text-center">
        <Link href={"/signup"} className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium capitalize">
          <Zap className="size-5" /> increbible features
        </Link>
        <h1 className="mt-6 text-6xl font-bold text-balance">Smart Point of Sale. Simple, Fast, Reliable.</h1>
        <p className="text-muted-foreground mt-6 mb-10 text-xl">Everything you need to run your business efficiently.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href={"/signup"} className={buttonVariants({ size: "lg" })}>
            Signup
          </Link>
          <Link href={"/signup"} className={buttonVariants({ variant: "card", size: "lg" })}>
            Login
          </Link>
        </div>
      </div>
      <div className="mx-auto">
        <Image width={0} height={0} src={"/dashboard.png"} alt="hero" className="h-auto w-full rounded-xl shadow-2xl" />
      </div>
    </section>
  );
};
