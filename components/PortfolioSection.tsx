"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'custom', label: 'Custom Pieces' },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Living Room Suite",
      category: "residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Private Residence",
      year: "2023",
      location: "Manhattan, NY",
      description: "Contemporary furniture set featuring clean lines and premium leather upholstery."
    },
    {
      id: 2,
      title: "Executive Office Collection",
      category: "commercial",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Corporate Headquarters",
      year: "2023",
      location: "Chicago, IL",
      description: "Sophisticated office furniture designed for productivity and style."
    },
    {
      id: 3,
      title: "Handcrafted Dining Table",
      category: "custom",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Private Commission",
      year: "2023",
      location: "Beverly Hills, CA",
      description: "Bespoke dining table crafted from rare walnut wood with intricate inlay work."
    },
    {
      id: 4,
      title: "Luxury Bedroom Set",
      category: "residential",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Private Residence",
      year: "2023",
      location: "Miami, FL",
      description: "Elegant bedroom collection with custom storage solutions and premium finishes."
    },
    {
      id: 5,
      title: "Restaurant Interior",
      category: "commercial",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Fine Dining Restaurant",
      year: "2022",
      location: "San Francisco, CA",
      description: "Complete restaurant furniture package including tables, chairs, and custom bar."
    },
    {
      id: 6,
      title: "Artisan Library Shelves",
      category: "custom",
      image: "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800",
      client: "Private Library",
      year: "2022",
      location: "Boston, MA",
      description: "Floor-to-ceiling custom library shelving with integrated lighting and ladder system."
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Finest
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed mb-8">
            Explore our portfolio of exceptional furniture pieces that showcase our commitment to quality, 
            innovation, and timeless design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-600 hover:to-amber-700"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="sm"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-amber-400" />
                    <span>{project.year}</span>
                    <span className="text-white/40">•</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}