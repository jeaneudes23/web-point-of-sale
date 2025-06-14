import { Product } from "@prisma/client";
import { formatMoney } from "@/lib/utils";
import Image from "next/image";
import { InvoiceProductControls } from "@/features/invoices/components/InvoiceProductControls";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-card rounded-2xl shadow p-4">
      <div className="relative aspect-square rounded-[inherit] bg-background grid place-content-center">
        <Image
          fill
          src={product.image!}
          alt={product.name}
          className="rounded-[inherit] object-cover"
        />
      </div>
      <h3 className="text-sm font-medium mt-4 mb-1">{product.name}</h3>
      <p className="text-sm font-bold">{formatMoney(product.price)}</p>
      <div className="grid mt-4">
        <InvoiceProductControls product={product} />
      </div>
    </div>
  );
};
