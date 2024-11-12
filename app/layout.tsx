import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pure GLow",
  description: "Your Sure Guide To A Clear Skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <footer className="text-center bg-black text-white p-2 mt-10">
          <span className="text-center">Copyright &copy; PUREGLOW, 2024.</span>
        </footer>
        <script async type='text/javascript' src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TGXXNW'></script>
      </body>
    </html>
  );
}
