import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Abdul Baqui | Software Developer & Engineer",
  description:
    "Abdul Baqui, a skilled Software Developer and Software Engineer, specializes in crafting high-performance web applications. Explore his portfolio to learn about his work in web development, clean design, and user-friendly solutions.",
  keywords: [
    "Abdul Baqui",
    "Software Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "Web applications",
    "Tech Stack",
    "JavaScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Abdul Baqui" }],
  openGraph: {
    title: "Abdul Baqui | Software Developer & Engineer",
    description:
      "Discover Abdul Baqui's portfolio, featuring web development projects built with modern frameworks and a focus on performance and design.",
    url: "https://abdulbaqui.vercel.app/",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
