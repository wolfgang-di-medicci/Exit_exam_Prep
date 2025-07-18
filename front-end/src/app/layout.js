import Navbar from "@/components/Navbar";

import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Exam Prep",
  description: "AI-powered exit exam preparation tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
