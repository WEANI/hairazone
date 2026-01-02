import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { EstablishmentProvider } from "@/contexts/EstablishmentContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "HAIRAZONE - L'univers du cheveu texturé",
    template: "%s | HAIRAZONE",
  },
  description: "La plateforme ultime pour les cheveux texturés. Testez votre look en AR, réservez les meilleurs pros et shoppez des soins experts.",
  manifest: "/manifest.json",
  keywords: ["cheveux texturés", "cheveux afro", "coiffeur", "barbier", "perruques", "extensions", "soins capillaires", "mirror AR", "diagnostic IA"],
  authors: [{ name: "HAIRAZONE" }],
  openGraph: {
    title: "HAIRAZONE - L'univers du cheveu texturé",
    description: "La plateforme ultime pour les cheveux texturés. Testez votre look en AR, réservez les meilleurs pros et shoppez des soins experts.",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HAIRAZONE",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F3E7" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <AuthProvider>
          <EstablishmentProvider>
            <Header />
            {children}
            <Toaster position="top-right" richColors />
          </EstablishmentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
