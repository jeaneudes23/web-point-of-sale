"use client";

import { Button } from "@/components/ui/button";
import useInvoiceStore from "../hooks/useInvoiceStore";
import { RotateCcw } from "lucide-react";

export const ClearInvoiceList = () => {
  const { clearInvoice } = useInvoiceStore();
  return (
    <Button variant={"common"} onClick={clearInvoice}>
      <RotateCcw />
      <span className="sr-only">Clear Invoice</span>
    </Button>
  );
};
