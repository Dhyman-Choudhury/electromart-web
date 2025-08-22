import Hero from "@/components/Hero";       // Hero section
import ProductHighlights from "@/components/ProductHighlights"; // Featured products

export default function ProductsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Product Highlights */}
      <ProductHighlights /> 

      {/* Page-specific content (e.g., product list) */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
