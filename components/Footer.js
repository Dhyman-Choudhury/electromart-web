import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-xl font-bold">
            <Link href="/">ElectroMart</Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/products" className="hover:text-gray-400">Products</Link>
          <Link href="/login" className="hover:text-gray-400">Login</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="https://www.facebook.com/dhimana.caudhuri.2025/" target="_blank" className="hover:text-blue-500">
            <FaFacebookF size={18} />
          </Link>
          <Link href="https://x.com/Dhyman2029" target="_blank" className="hover:text-blue-400">
            <FaTwitter size={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/dhyman-ch/" target="_blank" className="hover:text-blue-700">
            <FaLinkedinIn size={18} />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Electronics Gadgets. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
