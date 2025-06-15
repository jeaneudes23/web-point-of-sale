import { Navbar } from "@/components/Navbar";
import React, { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="text-foreground">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
