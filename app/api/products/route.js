import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Absolute path to products.json
const dataFilePath = path.join(process.cwd(), "public", "data", "products.json");

// GET /api/products → fetch products
export async function GET() {
  const fileData = await fs.readFile(dataFilePath, "utf-8");
  const products = JSON.parse(fileData);
  return NextResponse.json(products);
}

// POST /api/products → add a product
export async function POST(req) {
  try {
    const body = await req.json();

    // Read existing products
    const fileData = await fs.readFile(dataFilePath, "utf-8");
    const products = JSON.parse(fileData);

    // Create new product with all required fields
    const newProduct = {
      id: (products.length + 1).toString(),
      name: body.name || "Untitled Product",
      description: body.description || "",
      price: parseFloat(body.price) || 0,
      original_price: parseFloat(body.original_price) || parseFloat(body.price) || 0,
      imageURL: body.imageURL || "",
      shipping: body.shipping || "",
      specs: body.specs || {},
      reviews: {
        rating: parseFloat(body.reviews?.rating) || 0,
        total: parseInt(body.reviews?.total) || 0
      },
      variants: Array.isArray(body.variants) ? body.variants : [],
      compare: Array.isArray(body.compare) ? body.compare : []
    };

    // Add to products list
    products.push(newProduct);

    // Write updated list back to JSON file
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));

    return NextResponse.json(
      { message: "Product added", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
