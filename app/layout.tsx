import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";
const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html className={inter.className} lang="en">
        <body className="p-6 ">
          <Navbar profilePicture={user?.imageUrl}></Navbar>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
