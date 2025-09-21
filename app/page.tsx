import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Royalwood?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
                <p className="text-white/70">38+ years of crafting exceptional furniture with uncompromising quality standards.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expert Craftsmen</h3>
                <p className="text-white/70">Master artisans with decades of experience bring your vision to life.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
                <p className="text-white/70">Bespoke designs tailored to your unique style and space requirements.</p>
              </CardContent>
            </Card>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 rounded-xl w-full sm:w-auto"
              >
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/catalog">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-xl w-full sm:w-auto"
              >
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}