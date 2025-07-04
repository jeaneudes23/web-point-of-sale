import SidebarLink from "@/components/SidebarLink";
import { Button } from "@/components/ui/button";
import { Box, Computer, Layers, LayoutDashboard, LayoutList, LogOut, ShoppingCart, Store, Tag, User, Users } from "lucide-react";
import React, { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-dvh">
      <aside className="bg-card flex w-56 shrink-0 flex-col px-4 shadow-lg">
        <div className="mb-4 flex shrink-0 items-center gap-2 py-4">
          <Computer className="text-primary size-6" />
          <span className="font-bold">WEBPOS</span>
        </div>
        <div className="flex-grow space-y-4 overflow-y-auto">
          <div className="grid gap-1">
            <SidebarLink href="/dashboard" label="dashboard" icon={<LayoutDashboard />} />
            <SidebarLink href="/checkout" label="checkout" icon={<ShoppingCart />} />
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm font-medium">Inventory</p>
              <div className="grid gap-1">
                <SidebarLink href="/categories" label="categories" icon={<Layers />} />
                <SidebarLink href="/products" label="products" icon={<Box />} />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm font-medium">Transactions</p>
              <div className="grid gap-1">
                <SidebarLink href="/sales" label="sales" icon={<Tag />} />
                <SidebarLink href="/invoices" label="invoices" icon={<LayoutList />} />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm font-medium">Manage</p>
              <div className="grid gap-1">
                <SidebarLink href="/facility" label="facility" icon={<Store />} />
                <SidebarLink href="/staff" label="staff" icon={<Users />} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto grid shrink-0 gap-1 py-4">
          <SidebarLink href="/profile" label="profile" icon={<User />} />
          <Button variant={"card"} className="justify-start border-none">
            <LogOut className="text-primary" />
            Logout
          </Button>
        </div>
      </aside>
      {children}
    </div>
  );
}
