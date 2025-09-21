"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-white/90">Premium Handcrafted Furniture Since 1985</span>
            <Star className="h-4 w-4 text-amber-400" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Crafting Excellence in
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              Royal Furniture
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/90 leading-relaxed">
            Where traditional craftsmanship meets modern innovation. We create bespoke furniture pieces 
            that transform spaces into works of art, built to last generations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 group w-full sm:w-auto"
            >
              Explore Our Catalog
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl w-full sm:w-auto"
            >
              View Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">38+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">100%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}