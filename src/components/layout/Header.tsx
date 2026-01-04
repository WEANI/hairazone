"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Brain, Camera, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold tracking-tighter text-slate-900">
              KWATILI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* RÉSERVER */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-base">
                  RÉSERVER
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/bookings" className="cursor-pointer">
                    Tous les professionnels
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings?type=barbiers" className="cursor-pointer">
                    Barbiers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings?type=coiffeurs-femmes" className="cursor-pointer">
                    Coiffeurs Femmes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings?type=pose-perruques" className="cursor-pointer">
                    Pose perruques
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/bookings?type=kids-friendly" className="cursor-pointer">
                    Kids Friendly
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* SHOPPER */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-base">
                  SHOPPER
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/shop/soins-cosmetiques" className="cursor-pointer">
                    Soins & Cosmétiques
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/shop/perruques-extensions" className="cursor-pointer">
                    Perruques & Extensions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/shop/accessoires" className="cursor-pointer">
                    Accessoires
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/shop/materiel-pro" className="cursor-pointer">
                    Matériel Pro
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* SE FORMER */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-base">
                  SE FORMER
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/academy/ebooks" className="cursor-pointer">
                    E-books
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academy/formations-video" className="cursor-pointer">
                    Formations Vidéo
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/academy/ateliers-physiques" className="cursor-pointer">
                    Ateliers Physiques
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* OUTILS IA - Highlighted */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-1 text-base bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 relative"
                >
                  OUTILS IA
                  <Badge variant="destructive" className="ml-1 text-[10px] px-1.5 py-0">
                    LIVE
                  </Badge>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/diagnostic-ia" className="cursor-pointer">
                    <Brain className="h-4 w-4 mr-2" />
                    Scan IA
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mirror-ar" className="cursor-pointer">
                    <Camera className="h-4 w-4 mr-2" />
                    Mirror AR
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Profile/Family Hub */}
            <Link href="/dashboard/profile">
              <Button variant="ghost" size="icon" className="hidden lg:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>

            {/* Cart with Badge */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative hidden lg:flex">
                <ShoppingCart className="h-5 w-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  0
                </Badge>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {/* Search Bar Mobile */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>

              {/* RÉSERVER Section */}
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">RÉSERVER</h3>
                <div className="flex flex-col gap-1">
                  <Link href="/bookings" className="py-2 px-3 hover:bg-muted rounded">
                    Tous les professionnels
                  </Link>
                  <Link href="/bookings?type=barbiers" className="py-2 px-3 hover:bg-muted rounded">
                    Barbiers
                  </Link>
                  <Link href="/bookings?type=coiffeurs-femmes" className="py-2 px-3 hover:bg-muted rounded">
                    Coiffeurs Femmes
                  </Link>
                  <Link href="/bookings?type=pose-perruques" className="py-2 px-3 hover:bg-muted rounded">
                    Pose perruques
                  </Link>
                  <Link href="/bookings?type=kids-friendly" className="py-2 px-3 hover:bg-muted rounded">
                    Kids Friendly
                  </Link>
                </div>
              </div>

              {/* SHOPPER Section */}
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">SHOPPER</h3>
                <div className="flex flex-col gap-1">
                  <Link href="/shop/soins-cosmetiques" className="py-2 px-3 hover:bg-muted rounded">
                    Soins & Cosmétiques
                  </Link>
                  <Link href="/shop/perruques-extensions" className="py-2 px-3 hover:bg-muted rounded">
                    Perruques & Extensions
                  </Link>
                  <Link href="/shop/accessoires" className="py-2 px-3 hover:bg-muted rounded">
                    Accessoires
                  </Link>
                  <Link href="/shop/materiel-pro" className="py-2 px-3 hover:bg-muted rounded">
                    Matériel Pro
                  </Link>
                </div>
              </div>

              {/* SE FORMER Section */}
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">SE FORMER</h3>
                <div className="flex flex-col gap-1">
                  <Link href="/academy/ebooks" className="py-2 px-3 hover:bg-muted rounded">
                    E-books
                  </Link>
                  <Link href="/academy/formations-video" className="py-2 px-3 hover:bg-muted rounded">
                    Formations Vidéo
                  </Link>
                  <Link href="/academy/ateliers-physiques" className="py-2 px-3 hover:bg-muted rounded">
                    Ateliers Physiques
                  </Link>
                </div>
              </div>

              {/* OUTILS IA Section */}
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-sm">OUTILS IA</h3>
                  <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                    LIVE
                  </Badge>
                </div>
                <div className="flex flex-col gap-1">
                  <Link href="/diagnostic-ia" className="py-2 px-3 hover:bg-white/50 rounded flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Scan IA
                  </Link>
                  <Link href="/mirror-ar" className="py-2 px-3 hover:bg-white/50 rounded flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Mirror AR
                  </Link>
                </div>
              </div>

              {/* User Actions */}
              <div className="border-t pt-4 mt-2 flex flex-col gap-2">
                <Link href="/dashboard/profile">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    Mon Profil
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Mon Panier (0)
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
