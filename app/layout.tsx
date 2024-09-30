import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className={inter.className} lang="en">
        <body className="p-6 ">
          <Navbar></Navbar>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
