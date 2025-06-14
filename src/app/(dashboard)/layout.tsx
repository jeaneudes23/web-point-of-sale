import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh">
      <aside className="bg-card flex w-64 shrink-0 flex-col px-4 shadow-lg">
        <div className="flex shrink-0 items-center py-4">WEB POS</div>
        <div className="flex-grow overflow-y-auto">
          <div className="grid">
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/checkout"}>Checkout</Link>
            <Link href={"/staff"}>Staff</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/invoices"}>Invoices</Link>
            <Link href={"/sales"}>Sales</Link>
          </div>
        </div>
        <div className="mt-auto shrink-0">Bottom</div>
      </aside>
      {children}
    </div>
  );
}
