"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Star, MapPin, Clock, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const colors = {
  primary: "#562A0E",
  secondary: "#78380C",
  accent: "#C8691C",
  warm: "#D09259",
  light: "#E4CEAF",
};

// Types de professionnels
const professionals = [
  {
    id: 1,
    name: "Amara Styling",
    city: "Libreville",
    rating: 4.9,
    reviews: 234,
    badge: "Expert IA",
    photo: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop",
    specialty: "Tresses & Locks",
    bio: "Spécialiste des coiffures afro depuis 12 ans. Formée aux techniques traditionnelles et modernes.",
    address: "Quartier Glass, Libreville",
    hours: "9h - 19h",
    minPrice: 15000,
  },
  {
    id: 2,
    name: "Kings Barber",
    city: "Port-Gentil",
    rating: 4.8,
    reviews: 189,
    badge: "Top Pro",
    photo: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    specialty: "Barbier Expert",
    bio: "Le meilleur barbershop de Port-Gentil. Coupes modernes et traditionnelles.",
    address: "Centre-ville, Port-Gentil",
    hours: "8h - 20h",
    minPrice: 5000,
  },
  {
    id: 3,
    name: "Natural Queens",
    city: "Libreville",
    rating: 4.7,
    reviews: 156,
    badge: "Certifié Bio",
    photo: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=400&fit=crop",
    specialty: "Soins Naturels",
    bio: "Spécialiste des cheveux naturels et des soins bio. Produits 100% naturels.",
    address: "Quartier Louis, Libreville",
    hours: "10h - 18h",
    minPrice: 15000,
  },
  {
    id: 4,
    name: "Royal Cut",
    city: "Libreville",
    rating: 4.9,
    reviews: 312,
    badge: "Expert IA",
    photo: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
    specialty: "Barbier & Tresses",
    bio: "Excellence en coupe homme et tresses. Service premium pour toute la famille.",
    address: "Quartier Nombakélé, Libreville",
    hours: "9h - 20h",
    minPrice: 8000,
  },
  {
    id: 5,
    name: "Elegance Coiffure",
    city: "Franceville",
    rating: 4.6,
    reviews: 98,
    badge: "Certifié",
    photo: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    specialty: "Coiffure Femmes",
    bio: "Salon moderne spécialisé dans les coiffures afro féminines et les perruques.",
    address: "Centre-ville, Franceville",
    hours: "9h - 18h",
    minPrice: 12000,
  },
  {
    id: 6,
    name: "Afro Style Studio",
    city: "Libreville",
    rating: 4.8,
    reviews: 267,
    badge: "Top Pro",
    photo: "https://images.unsplash.com/photo-1595959183082-7b570b7e1daf?w=400&h=400&fit=crop",
    specialty: "Tresses & Box Braids",
    bio: "Experts en tresses de tous styles. Box braids, cornrows, et tresses créatives.",
    address: "Quartier Akébé, Libreville",
    hours: "8h - 19h",
    minPrice: 20000,
  },
];

export default function SalonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedRating, setSelectedRating] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 100000]);

  // Filtrer les professionnels
  const filteredPros = professionals.filter((pro) => {
    const matchesSearch = pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedCity === "all" || pro.city === selectedCity;
    const matchesRating = pro.rating >= selectedRating;
    const matchesPrice = pro.minPrice >= priceRange[0] && pro.minPrice <= priceRange[1];

    return matchesSearch && matchesLocation && matchesRating && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section avec Recherche */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#562A0E]/5 via-[#C8691C]/5 to-[#D09259]/5" />

        <div className="relative container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/" className="text-[#D09259] hover:text-[#C8691C] transition-colors">
              Accueil
            </Link>
            <span className="text-[#E4CEAF]">›</span>
            <span className="text-[#562A0E] font-medium">Réserver un salon</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#562A0E] mb-4 font-serif">
            Trouvez votre professionnel idéal
          </h1>
          <p className="text-lg text-[#78380C] mb-8">
            Réservez les meilleurs coiffeurs, barbiers et spécialistes près de chez vous
          </p>

          {/* Barre de recherche */}
          <Card className="shadow-xl border-[#E4CEAF]">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-xs font-semibold text-[#D09259] uppercase tracking-wider mb-2 block">
                    Quoi ?
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D09259]" />
                    <Input
                      type="text"
                      placeholder="Tresses, Barbe, Soin..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-2 border-[#E4CEAF] focus:border-[#C8691C]"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="text-xs font-semibold text-[#D09259] uppercase tracking-wider mb-2 block">
                    Où ?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#C8691C]" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border-2 border-[#E4CEAF] rounded-md focus:border-[#C8691C] focus:outline-none"
                    >
                      <option value="all">Toutes les villes</option>
                      <option value="Libreville">Libreville</option>
                      <option value="Port-Gentil">Port-Gentil</option>
                      <option value="Franceville">Franceville</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-end">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#78380C] to-[#C8691C] hover:from-[#562A0E] hover:to-[#78380C] w-full md:w-auto"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>

              {/* Catégories rapides */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#E4CEAF]">
                <span className="text-sm text-[#78380C] mr-2">Populaires:</span>
                {["✂️ Coupe", "🪮 Tresses", "💇 Barbe", "🧴 Soins"].map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-1.5 bg-white border border-[#E4CEAF] rounded-full text-sm hover:bg-[#562A0E] hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Résultats */}
      <section className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres - Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#562A0E]">Filtres</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                {/* Note minimale */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-[#78380C] mb-3 block">
                    Note minimale
                  </label>
                  <div className="flex gap-2">
                    {[3, 4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`flex-1 px-2 py-1.5 rounded-lg border text-sm ${
                          selectedRating === rating
                            ? "bg-[#C8691C] text-white border-[#C8691C]"
                            : "bg-white border-[#E4CEAF] text-[#562A0E]"
                        }`}
                      >
                        <Star className="h-3 w-3 inline mr-1" />
                        {rating}+
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prix */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-[#78380C] mb-3 block">
                    Fourchette de prix
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-[#C8691C]"
                    />
                    <div className="flex justify-between text-xs text-[#D09259]">
                      <span>0 FCFA</span>
                      <span>{priceRange[1].toLocaleString()} FCFA</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCity("all");
                    setSelectedRating(0);
                    setPriceRange([0, 100000]);
                  }}
                >
                  Réinitialiser
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Liste des professionnels */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#562A0E]">
                {filteredPros.length} professionnel{filteredPros.length > 1 ? "s" : ""} trouvé{filteredPros.length > 1 ? "s" : ""}
              </h2>
              <select className="px-4 py-2 border border-[#E4CEAF] rounded-lg text-sm">
                <option>Trier par : Pertinence</option>
                <option>Meilleures notes</option>
                <option>Prix croissant</option>
                <option>Plus d&apos;avis</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredPros.map((pro) => (
                <Link key={pro.id} href={`/salons/${pro.id}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-[#E4CEAF]">
                    <div className="relative">
                      <img
                        src={pro.photo}
                        alt={pro.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge
                          className={
                            pro.badge === "Expert IA"
                              ? "bg-gradient-to-r from-[#C8691C] to-[#D09259] text-white"
                              : "bg-white text-[#562A0E]"
                          }
                        >
                          {pro.badge === "Expert IA" && <span className="mr-1">✨</span>}
                          {pro.badge}
                        </Badge>
                      </div>
                      <button
                        className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/95 flex items-center justify-center hover:bg-white transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-5 w-5 text-[#C8691C]" />
                      </button>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-[#562A0E] mb-1">
                            {pro.name}
                          </h3>
                          <p className="text-sm text-[#D09259]">{pro.specialty}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-[#C8691C] text-[#C8691C]" />
                            <span className="font-bold text-[#562A0E]">{pro.rating}</span>
                          </div>
                          <p className="text-xs text-[#D09259] mt-1">
                            {pro.reviews} avis
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-[#78380C] mb-4 line-clamp-2">
                        {pro.bio}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E4CEAF]">
                        <div className="flex items-center gap-4 text-sm text-[#78380C]">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {pro.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {pro.hours}
                          </span>
                        </div>
                        <span className="text-[#C8691C] font-semibold">
                          dès {pro.minPrice.toLocaleString()} FCFA
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPros.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-[#562A0E] mb-2">
                  Aucun professionnel trouvé
                </h3>
                <p className="text-[#D09259]">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
