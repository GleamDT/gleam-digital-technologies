import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata = {
  metadataBase: new URL("https://your-domain.com"), // TODO: set your real domain
  title: {
    default: "Gleam Digital Technologies",
    template: "%s | Gleam Digital Technologies",
  },
  description:
    "End-to-end technology services including Web Development, Mobile Apps, Data Science, Cybersecurity, and DevOps. Transform your business with a single trusted partner.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "android-chrome", url: "/icon-192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/icon-512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    type: "website",
    title: "Gleam Digital Technologies",
    description:
      "Build, secure, and scale your products with a single technology partner.",
    url: "https://your-domain.com",
    siteName: "Gleam Digital Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gleam Digital Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleam Digital Technologies",
    description: "End-to-end technology services for modern businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <Header />
        {/* min-h-screen pt-16 (or similar) so content isn't hidden behind fixed header */}
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
