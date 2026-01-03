"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Calendar, 
  ShoppingBag, 
  GraduationCap, 
  Sparkles, 
  Scissors, 
  Smartphone,
  ScanFace,
  Play,
  BookOpen,
  PlayCircle,
  FileText,
  Microscope,
  Scan,
  Plus,
  PlusCircle,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  ExternalLink,
  CalendarCheck2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tighter text-slate-900">
            KWATILI
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#booking" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Réserver
            </Link>
            <Link href="#shop" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Shopper
            </Link>
            <Link href="#academy" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Se former
            </Link>
            <Link href="#ai-tools" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4" /> Outils IA
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-slate-900 hover:text-slate-600 hidden sm:block">
              Connexion
            </Link>
            <Link href="/dashboard">
              <Button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm shadow-slate-300">
                Mon Espace
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            KWATILI : Vos cheveux,<br />votre identité, notre expertise.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-normal">
            La première plateforme <span className="text-slate-900 font-medium">TOUT-EN-UN</span> dédiée aux cheveux texturés. Testez votre style, réservez les meilleurs experts et accédez aux soins dont vos cheveux ont réellement besoin.
          </p>
        </div>

        {/* Universal Action Bar */}
        <div className="max-w-4xl mx-auto mb-16 relative z-20">
          <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 h-12 bg-slate-50 rounded-xl border border-transparent focus-within:border-slate-300 focus-within:bg-white transition-colors">
              <Search className="text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Salon, Produit, Formation..." 
                className="w-full bg-transparent border-none focus:outline-none focus-visible:ring-0 text-sm ml-3 placeholder-slate-400 text-slate-900"
              />
            </div>
            <div className="flex-1 flex items-center px-4 h-12 bg-slate-50 rounded-xl border border-transparent focus-within:border-slate-300 focus-within:bg-white transition-colors">
              <MapPin className="text-slate-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Votre Ville" 
                className="w-full bg-transparent border-none focus:outline-none focus-visible:ring-0 text-sm ml-3 placeholder-slate-400 text-slate-900"
              />
            </div>
            <Button className="h-12 bg-slate-900 text-white font-medium rounded-xl px-8 hover:bg-slate-800 transition-colors text-sm">
              Explorer
            </Button>
          </div>
        </div>

        {/* Split Screen Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] md:h-[600px] rounded-3xl overflow-hidden relative">
          <div className="relative group overflow-hidden bg-slate-100">
            <Image 
              src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1287&auto=format&fit=crop" 
              alt="Femme testant perruque" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
              <div className="flex items-center gap-2 text-white/90 mb-1">
                <Smartphone className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Mirror AR</span>
              </div>
              <p className="text-white text-lg font-medium">Testez virtuellement votre style</p>
            </div>
          </div>
          <div className="relative group overflow-hidden bg-slate-100">
            <Image 
              src="https://images.unsplash.com/photo-1599351431202-6e0000a88374?q=80&w=1287&auto=format&fit=crop" 
              alt="Homme barbier" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full">
              <div className="flex items-center gap-2 text-white/90 mb-1">
                <Scissors className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Expertise</span>
              </div>
              <p className="text-white text-lg font-medium">Barbiers experts près de chez vous</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Pillars */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Votre Parcours Capillaire de A à Z</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <CalendarCheck2 className="w-6 h-6 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">RÉSERVEZ</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Trouvez les coiffeurs et barbiers spécialisés près de chez vous. Disponibilités en temps réel.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <ShoppingBag className="w-6 h-6 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SHOPPEZ</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Soins, accessoires et perruques de haute qualité, sélectionnés et validés par des pros.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                <GraduationCap className="w-6 h-6 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">APPRENEZ</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Maîtrisez votre texture grâce à la KWATILI Academy : E-books, masterclass et ateliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mirror AR Section */}
      <section id="ai-tools" className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
              <ScanFace className="w-3.5 h-3.5" />
              KWATILI Mirror AR
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              N&apos;imaginez plus vos futures coiffures. <span className="text-indigo-400">Visualisez-les.</span>
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Perruques & Extensions</h4>
                  <p className="text-slate-400 text-sm">Testez la coupe, la longueur, la densité et la couleur en direct sur votre visage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Coupe & Barbe</h4>
                  <p className="text-slate-400 text-sm">Validez votre futur dégradé ou le tracé de votre barbe avant de vous asseoir au fauteuil.</p>
                </div>
              </div>
            </div>
            <Button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors flex items-center gap-2 text-sm">
              <Play className="w-4 h-4" />
              Lancer l&apos;essai virtuel maintenant
            </Button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl flex items-center justify-center overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop" 
                alt="AR Demo"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 w-max">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-700/80 cursor-pointer" />
                <div className="w-10 h-10 rounded-full border border-white/30 bg-black/80 cursor-pointer" />
                <div className="w-10 h-10 rounded-full border border-white/30 bg-red-900/80 cursor-pointer" />
              </div>
              <div className="absolute top-6 right-6">
                <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] flex items-center gap-1 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section id="shop" className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-2 block">Le Shop des Experts</span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Soins, Barbe & Perruques</h2>
            <p className="text-slate-500 text-sm">Que vous cherchiez à lutter contre la chute de cheveux, hydrater une barbe drue ou entretenir une perruque, accédez à une sélection de produits 100% adaptés à votre texture.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button className="px-4 py-2 text-xs font-medium bg-slate-900 text-white rounded-lg">Tout</Button>
            <Button variant="outline" className="px-4 py-2 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg border-0">Hydratation</Button>
            <Button variant="outline" className="px-4 py-2 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg border-0">Pousse</Button>
            <Button variant="outline" className="px-4 py-2 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-lg border-0">Définition</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="bg-slate-50 rounded-xl aspect-square mb-4 overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop" alt="Huile de Ricin Noire" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-900">Best-seller</div>
            </div>
            <h3 className="text-sm font-medium text-slate-900">Huile de Ricin Noire</h3>
            <p className="text-xs text-slate-500 mb-2">Stimulateur de pousse</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">24.00€</span>
              <button className="text-slate-400 hover:text-slate-900 transition-colors"><PlusCircle className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-slate-50 rounded-xl aspect-square mb-4 overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" alt="Crème Hydratante Curl" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-medium text-slate-900">Crème Hydratante Curl</h3>
            <p className="text-xs text-slate-500 mb-2">Définition intense</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">18.50€</span>
              <button className="text-slate-400 hover:text-slate-900 transition-colors"><PlusCircle className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-slate-50 rounded-xl aspect-square mb-4 overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1556228720-1987df6a0997?q=80&w=800&auto=format&fit=crop" alt="Kit Entretien Barbe" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-medium text-slate-900">Kit Entretien Barbe</h3>
            <p className="text-xs text-slate-500 mb-2">Huile + Peigne</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">32.00€</span>
              <button className="text-slate-400 hover:text-slate-900 transition-colors"><PlusCircle className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="bg-slate-50 rounded-xl aspect-square mb-4 overflow-hidden relative">
              <Image src="https://images.unsplash.com/photo-1595995574383-7d228f44d5c1?q=80&w=800&auto=format&fit=crop" alt="Lace Wig Lisse" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-sm font-medium text-slate-900">Lace Wig Lisse 18&quot;</h3>
            <p className="text-xs text-slate-500 mb-2">Cheveux naturels</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">120.00€</span>
              <button className="text-slate-400 hover:text-slate-900 transition-colors"><PlusCircle className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 border-b border-indigo-200 pb-0.5 hover:border-indigo-600 transition-all">
            Voir les produits pour mon type de cheveu <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </section>

      {/* Academy & Innovation Grid */}
      <section id="academy" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <div>
              <BookOpen className="w-8 h-8 text-indigo-600 mb-4" />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">KWATILI Academy</h2>
              <p className="text-slate-500 mb-8 text-sm leading-relaxed">Apprenez à sublimer vos cheveux. Accédez à nos E-books, Masterclass exclusives et ateliers pratiques dirigés par des experts du cheveu texturé.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <PlayCircle className="w-[18px] h-[18px] text-indigo-500" />
                  Masterclass: Comprendre la porosité
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <FileText className="w-[18px] h-[18px] text-indigo-500" />
                  Ebook: Routine de transition
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/academy" className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-2">
                Découvrir les formations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <Microscope className="w-8 h-8 text-indigo-400 mb-4" />
              <h2 className="text-2xl font-semibold tracking-tight mb-3">La science au service de vos cheveux</h2>
              <p className="text-slate-300 mb-8 text-sm leading-relaxed">Notre Scan IA analyse votre porosité et votre texture pour vous proposer la routine exacte dont vos cheveux ont besoin. Plus d&apos;erreur possible.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                  <Scan className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Diagnostic en cours...</div>
                  <div className="text-xs text-slate-300">Analyse de la fibre capillaire</div>
                </div>
              </div>
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div className="bg-indigo-400 w-3/4 h-full" />
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <Button className="w-full bg-white text-slate-900 font-medium py-3 rounded-xl hover:bg-slate-100 transition-colors text-sm">
                Lancer mon diagnostic gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Family Hub */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Un seul compte pour toute la famille</h2>
          <p className="text-slate-500 text-sm mb-12">Centralisez l&apos;historique des coupes, les diagnostics et les rendez-vous de votre conjoint et de vos enfants.</p>
          
          <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <div className="text-sm font-medium text-slate-900">Famille Dubois</div>
              <button className="text-xs text-indigo-600 font-medium flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Ajouter
              </button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start overflow-x-auto pb-2">
              <div className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-indigo-600 p-0.5 overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop" alt="Sarah" fill className="rounded-full object-cover" />
                </div>
                <span className="text-xs font-medium text-slate-700">Sarah (Moi)</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[80px] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-transparent overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" alt="Marc" fill className="rounded-full object-cover" />
                </div>
                <span className="text-xs font-medium text-slate-700">Marc</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[80px] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-transparent overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1602989981882-6ce86283d5d7?q=80&w=200&auto=format&fit=crop" alt="Léo" fill className="rounded-full object-cover" />
                </div>
                <span className="text-xs font-medium text-slate-700">Léo</span>
              </div>
            </div>
            <div className="mt-6 bg-slate-50 rounded-xl p-4 text-left">
              <div className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Prochain RDV</div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <Calendar className="w-[18px] h-[18px] text-slate-900" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">Coupe Enfant - Salon BlackBeauty</div>
                  <div className="text-xs text-slate-500">Demain, 14:00 • Pour Léo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="text-lg font-semibold tracking-tighter text-slate-900 block mb-6">KWATILI</Link>
              <p className="text-sm text-slate-500 mb-6">La référence digitale pour sublimer toutes les textures.</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-slate-900"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-slate-900"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Plateforme</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="/salons" className="hover:text-indigo-600">Réserver un salon</Link></li>
                <li><Link href="/shop" className="hover:text-indigo-600">Le Shop</Link></li>
                <li><Link href="/academy" className="hover:text-indigo-600">Academy</Link></li>
                <li><Link href="/diagnostic" className="hover:text-indigo-600">Diagnostic IA</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Aide & Contact</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="/help" className="hover:text-indigo-600">Centre d&apos;aide</Link></li>
                <li><Link href="/payment" className="hover:text-indigo-600">Paiement sécurisé</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-600">Service Client</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-slate-900 mb-4 text-sm">Newsletter</h4>
              <p className="text-xs text-slate-500 mb-4">Recevez nos conseils de pros.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Email" className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:border-indigo-500" />
                <Button className="bg-slate-900 text-white rounded-lg px-3 hover:bg-slate-800">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link href="/pro" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                  Coiffeur, Barbier ? Devenez Partenaire KWATILI PRO <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2026 KWATILI. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-slate-600">Confidentialité</Link>
              <Link href="/terms" className="hover:text-slate-600">CGU</Link>
              <Link href="/legal" className="hover:text-slate-600">Mentions Légales</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
