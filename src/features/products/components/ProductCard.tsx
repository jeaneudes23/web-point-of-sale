import { Product } from "@prisma/client";
import { formatMoney } from "@/lib/utils";
import Image from "next/image";
import { InvoiceProductControls } from "@/features/invoices/components/InvoiceProductControls";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-card rounded-2xl p-4 shadow">
      <div className="bg-background relative grid aspect-square place-content-center rounded-[inherit]">
        <Image fill src={product.image!} alt={product.name} className="rounded-[inherit] object-cover" />
      </div>
      <h3 className="mt-4 mb-1 text-sm font-medium">{product.name}</h3>
      <p className="text-sm font-bold">{formatMoney(product.price)}</p>
      <div className="mt-4 grid">
        <InvoiceProductControls product={product} />
      </div>
    </div>
  );
};
