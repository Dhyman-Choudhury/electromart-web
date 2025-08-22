"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [brands, setBrands] = useState([]);
  const [storages, setStorages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        const maxP = Math.max(...data.map((p) => p.price));
        setMaxPrice(maxP);
        setPriceRange([0, maxP]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products.filter(
      (p) =>
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        (brands.length ? brands.includes(p.brand) : true) &&
        (storages.length ? storages.includes(p.storage) : true)
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [priceRange, brands, storages, products]);

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleStorageChange = (storage) => {
    setStorages((prev) =>
      prev.includes(storage)
        ? prev.filter((s) => s !== storage)
        : [...prev, storage]
    );
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="py-6  mx-auto flex gap-6 px-4 md:px-6 text-black">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              value={priceRange[0]}
              readOnly
              className="w-1/2 p-1 border rounded"
            />
            <input
              type="number"
              value={priceRange[1]}
              readOnly
              className="w-1/2 p-1 border rounded"
            />
          </div>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[1]}
            onChange={handleRangeChange}
            className="w-full accent-orange-500"
          />
          <p className="mt-2">
            Price: ${priceRange[0].toLocaleString()} - $
            {priceRange[1].toLocaleString()}
          </p>
        </div>

        {/* Brands */}


        {/* Storage */}

      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {loading ? (<Loader />) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex flex-col text-black"
                >
                  {/* Image */}
                  <div className="relative h-96 flex-shrink-0">
                    <Image
                      src={product.images}
                      alt={product.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold">{product.name}</h2>
                      <p className="text-gray-500 text-sm mt-1 mb-2 line-clamp-3">
                        {product.description}
                      </p>
                      <p className="text-blue-600 font-bold text-lg mb-2">
                        ${product.price.toLocaleString()}{" "}
                        <span className="line-through text-gray-400 text-sm">
                          ${product.original_price.toLocaleString()}
                        </span>
                      </p>
                    </div>

                    {/* Button at the bottom */}
                    <div className="mt-auto">
                      <Link
                        href={`/products/${product.id}`}
                        className="block w-full text-center btn_primary py-2 rounded hover:bg-blue-700 transition"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded border ${currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
