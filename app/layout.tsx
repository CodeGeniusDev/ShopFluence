import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

export const metadata: Metadata = {
  title: {
    template: "%s | Shopfluence",
    default: "Shopfluence - E-Commerce",
  },
  description:
    "Shopfluence Online Store, Your one stop destination for all your shopping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <FavoritesProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <NewsLetter />
            <Footer />
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
