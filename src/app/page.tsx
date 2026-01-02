"use client";

import { Search, Calendar, ShoppingBag, GraduationCap, Sparkles, Camera, Brain, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10" />

        <div className="relative z-10 container mx-auto text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Tout l&apos;univers du cheveu texturé, réuni en un seul endroit.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            La plateforme ultime pour les cheveux texturés. Testez votre look en AR,
            réservez les meilleurs pros et shoppez des soins experts.
          </p>

          {/* Universal Search Bar */}
          <div className="flex gap-2 max-w-2xl mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Chercher un salon, un produit, une formation..."
                className="pl-10 h-14 text-lg"
              />
            </div>
            <Button size="lg" className="h-14 px-8">
              Rechercher
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="gap-2">
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Section: 3 Pillars */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Votre Parcours Capillaire de A à Z
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle className="text-2xl">RÉSERVEZ</CardTitle>
                <CardDescription className="text-base">
                  Accédez aux meilleurs coiffeurs et barbiers spécialisés.
                  Diagnostic IA et essai virtuel inclus.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Trouver un Pro
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-pink-500 transition-colors">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-pink-500" />
                </div>
                <CardTitle className="text-2xl">SHOPPEZ</CardTitle>
                <CardDescription className="text-base">
                  Des soins pointus, des accessoires premium, des perruques et
                  extensions sélectionnés et vendus par des experts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Voir la Boutique
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl">APPRENEZ</CardTitle>
                <CardDescription className="text-base">
                  E-books, masterclass et ateliers pratiques pour maîtriser
                  l&apos;entretien et la pousse de vos cheveux.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Explorer l&apos;Academy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mirror AR Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <span className="font-semibold">Le Miroir du Futur</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Le Mirror AR
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                Ne devinez plus, visualisez.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-500">✓</span>
                  </div>
                  <div>
                    <strong>Pour les Perruques :</strong> Testez instantanément nos modèles
                    (longueur, couleur, densité) avant de commander.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-pink-500">✓</span>
                  </div>
                  <div>
                    <strong>Pour la Coupe/Barbe :</strong> Visualisez le tracé de votre barbe
                    ou votre futur dégradé avant même de vous asseoir dans le fauteuil du pro.
                  </div>
                </li>
              </ul>

              <Button size="lg" className="gap-2">
                <Camera className="h-5 w-5" />
                Lancer l&apos;essai virtuel
              </Button>
            </div>

            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <Camera className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p>Démo Mirror AR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Le Shop des Experts
            </h2>
            <p className="text-xl text-muted-foreground">
              Des produits recommandés par les pros après chaque diagnostic.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {['Soins Profonds', 'Barbe', 'Kids', 'Perruques & Extensions', 'Accessoires'].map((category) => (
              <Button key={category} variant="outline" className="h-auto py-4">
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4" />
                  <h3 className="font-semibold mb-2">Produit {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Recommandé par les experts
                  </p>
                  <Button className="w-full">Voir le produit</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">HAIRAZONE Academy</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Devenez votre propre expert
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Téléchargez nos E-books sur la pousse, apprenez la confection de perruques,
            participez à des ateliers retrouvez toutes les formations.
          </p>

          <Button size="lg" className="gap-2">
            <GraduationCap className="h-5 w-5" />
            Explorer les formations
          </Button>
        </div>
      </section>

      {/* AI Diagnostic Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <Brain className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p>Diagnostic IA</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full mb-6">
                <Brain className="h-5 w-5 text-blue-500" />
                <span className="font-semibold">Innovation IA</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Plus d&apos;erreur possible
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                Grâce à notre Scan IA, achetez enfin les produits qui correspondent
                réellement à votre porosité et votre texture et dont vos cheveux ont besoin.
              </p>

              <Button size="lg" className="gap-2">
                <Brain className="h-5 w-5" />
                Lancer le diagnostic
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Hub Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-teal-500/10 px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5 text-green-500" />
            <span className="font-semibold">Family Hub</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gérez aussi les cheveux de toute la famille
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Un seul compte pour centraliser les profils de votre conjoint et de vos enfants.
            Retrouvez l&apos;historique de chacun et simplifiez vos prises de rendez-vous.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {['Votre profil', 'Conjoint', 'Enfants'].map((profile) => (
              <div key={profile} className="p-6 bg-card rounded-lg border-2">
                <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4" />
                <p className="font-semibold">{profile}</p>
              </div>
            ))}
          </div>

          <Button size="lg" variant="outline">
            En savoir plus sur Family Hub
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-2xl mb-4">HAIRAZONE</h3>
              <p className="text-sm text-muted-foreground">
                L&apos;univers du cheveu texturé réuni en un seul endroit.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/salons">Réserver un Pro</Link></li>
                <li><Link href="/shop">Marketplace</Link></li>
                <li><Link href="/academy">Academy</Link></li>
                <li><Link href="/mirror">Mirror AR</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Partenaires</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/pro">Devenir Partenaire</Link></li>
                <li><Link href="/pro/hairazone">HAIRAZONE Pro</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Recevez nos conseils de pros
              </p>
              <div className="flex gap-2">
                <Input placeholder="Email" />
                <Button>OK</Button>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 HAIRAZONE. Tous droits réservés. Paiement sécurisé et service client dédié.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
