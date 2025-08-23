import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ElectroMart",
  icons: { icon: "/icon2.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
         
          <main className="flex-1">{children}</main>
          
        </Providers>
      </body>
    </html>
  );
}
