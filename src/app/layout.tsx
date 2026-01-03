import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { EstablishmentProvider } from "@/contexts/EstablishmentContext";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "KWATILI - Vos cheveux, votre identité, notre expertise",
    template: "%s | KWATILI",
  },
  description: "La première plateforme TOUT-EN-UN dédiée aux cheveux texturés. Testez votre style, réservez les meilleurs experts et accédez aux soins dont vos cheveux ont réellement besoin.",
  manifest: "/manifest.json",
  keywords: ["cheveux texturés", "cheveux afro", "coiffeur", "barbier", "perruques", "extensions", "soins capillaires", "mirror AR", "diagnostic IA", "kwatili"],
  authors: [{ name: "KWATILI" }],
  openGraph: {
    title: "KWATILI - Vos cheveux, votre identité, notre expertise",
    description: "La première plateforme TOUT-EN-UN dédiée aux cheveux texturés. Testez votre style, réservez les meilleurs experts et accédez aux soins dont vos cheveux ont réellement besoin.",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KWATILI",
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
