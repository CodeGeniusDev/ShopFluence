import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import {
//   ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
// } from "@clerk/nextjs";

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
    // <ClerkProvider>
      <html lang="en">
        <body className="font-poppins antialiased">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    // </ClerkProvider>
  );
}
