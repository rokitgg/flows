import "./globals.css"
import localFont from "next/font/local"

import type { Metadata } from "next"
import { ThemeProvider } from "@/lib/providers/theme"

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
  title: "Ethereum ETFs Dashboard",
  description: "Minimal dashboard to track the performance of newly launched Spot Ethereum ETFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
