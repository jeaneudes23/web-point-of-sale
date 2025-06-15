import React from "react";
import { Receipt, CreditCard, Users, BarChart2, ShoppingCart, Settings } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      name: "Expense Tracking",
      summary: "Monitor and manage your business expenses effortlessly.",
      icon: <Receipt />,
    },
    {
      name: "Payment Processing",
      summary: "Accept multiple payment methods securely and quickly.",
      icon: <CreditCard />,
    },
    {
      name: "Customer Management",
      summary: "Organize customer information and track interactions.",
      icon: <Users />,
    },
    {
      name: "Analytics & Reports",
      summary: "Gain insights with real-time analytics and reporting.",
      icon: <BarChart2 />,
    },
    {
      name: "Inventory Management",
      summary: "Keep track of stock levels and product movement.",
      icon: <ShoppingCart />,
    },
    {
      name: "Customizable Settings",
      summary: "Easily tailor the system to fit your business needs.",
      icon: <Settings />,
    },
  ];
  return (
    <section className="container space-y-12">
      <div className="mx-auto grid max-w-2xl gap-2 text-center">
        <span className="text-primary font-medium">Tailored for Your Business</span>
        <h2 className="text-4xl font-semibold text-balance">Ready-made solutions for a range of service use cases</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="hover:border-primary cursor-pointer rounded-xl border p-6 transition-colors duration-300">
            <span className="text-primary inline-block rounded-md border p-2">{feature.icon}</span>
            <h3 className="mt-4 mb-2 text-xl font-medium">{feature.name}</h3>
            <p className="text-muted-foreground">{feature.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
