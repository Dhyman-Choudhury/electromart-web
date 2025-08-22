// app/products/layout.jsx

import Hero from "@/components/Hero";  // import Hero

export default function ProductsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Hero />   {/* Hero will now appear on ProductList page */}
      <main className="flex-1">{children}</main>
      
    </div>
  );
}
