// app/page.jsx


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

    
      <Hero />

      {/* Product Highlights */}
      {/* <section className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Products
          </h2>
          <ProductHighlights />
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
