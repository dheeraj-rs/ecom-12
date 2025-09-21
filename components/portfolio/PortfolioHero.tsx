"use client";

import { Button } from '@/components/ui/button';
import { ArrowDown, Camera, Award } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2")',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <Camera className="h-5 w-5 text-amber-400" />
            <span className="text-white/90 font-medium">Our Finest Creations</span>
            <Award className="h-5 w-5 text-amber-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Portfolio of
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed">
            Discover our collection of masterfully crafted furniture pieces that have transformed 
            spaces and delighted clients across the globe. Each project tells a unique story of 
            craftsmanship, innovation, and timeless design.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">500+</div>
              <div className="text-white/80">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">25+</div>
              <div className="text-white/80">Awards Won</div>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 group"
          >
            Explore Our Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}