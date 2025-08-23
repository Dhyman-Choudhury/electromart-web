import Footer from "@/components/Footer";
import Hero from "@/components/Hero";       // Hero section
import Navbar from "@/components/Navbar";
import ProductHighlights from "@/components/ProductHighlights"; // Featured products

export default function ProductsLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
       <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Product Highlights */}
      <ProductHighlights /> 

      {/* Page-specific content (e.g., product list) */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
