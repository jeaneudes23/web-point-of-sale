import { Computer } from "lucide-react";
import React from "react";

export const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Computer className="text-primary size-6" />
      <span className="font-bold">SMPOS</span>
    </div>
  );
};
