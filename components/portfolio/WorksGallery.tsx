"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, User, ExternalLink, ZoomIn } from 'lucide-react';

export default function WorksGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'custom', label: 'Custom Pieces' },
    { id: 'restoration', label: 'Restoration' },
  ];

  const works = [
    {
      id: 1,
      title: "Luxury Penthouse Living Room",
      category: "residential",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "The Morrison Family",
      year: "2023",
      location: "Manhattan, NY",
      duration: "8 weeks",
      budget: "$85,000",
      description: "Complete living room transformation featuring custom-built entertainment center, handcrafted coffee tables, and bespoke seating arrangements. The project emphasized modern luxury with traditional craftsmanship.",
      features: ["Custom Entertainment Center", "Handcrafted Coffee Tables", "Bespoke Seating", "Premium Leather Upholstery"],
      materials: ["Walnut Wood", "Italian Leather", "Brass Hardware", "Tempered Glass"]
    },
    {
      id: 2,
      title: "Corporate Headquarters Boardroom",
      category: "commercial",
      images: [
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "TechCorp Industries",
      year: "2023",
      location: "Chicago, IL",
      duration: "12 weeks",
      budget: "$120,000",
      description: "Executive boardroom featuring a 20-foot conference table, custom storage solutions, and integrated technology housing. Designed to impress clients while maintaining functionality.",
      features: ["20ft Conference Table", "Integrated Cable Management", "Custom Storage", "Executive Seating"],
      materials: ["Mahogany Wood", "Steel Framework", "Leather Inlays", "Smart Glass"]
    },
    {
      id: 3,
      title: "Artisan Dining Collection",
      category: "custom",
      images: [
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "Private Collector",
      year: "2023",
      location: "Beverly Hills, CA",
      duration: "16 weeks",
      budget: "$95,000",
      description: "One-of-a-kind dining set featuring intricate wood inlay work, hand-carved details, and matching sideboard. This piece showcases the pinnacle of traditional woodworking artistry.",
      features: ["Hand-carved Details", "Intricate Inlay Work", "Matching Sideboard", "Custom Upholstery"],
      materials: ["Rare Walnut", "Mother of Pearl Inlay", "Gold Leaf Accents", "Silk Upholstery"]
    },
    {
      id: 4,
      title: "Master Bedroom Suite",
      category: "residential",
      images: [
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "The Williams Estate",
      year: "2022",
      location: "Miami, FL",
      duration: "10 weeks",
      budget: "$75,000",
      description: "Elegant bedroom collection with custom headboard, matching nightstands, and walk-in closet organization system. Features hidden storage and integrated lighting.",
      features: ["Custom Headboard", "Hidden Storage", "Integrated Lighting", "Closet System"],
      materials: ["Cherry Wood", "Soft-close Hardware", "LED Lighting", "Premium Fabrics"]
    },
    {
      id: 5,
      title: "Restaurant Interior Design",
      category: "commercial",
      images: [
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "Bella Vista Restaurant",
      year: "2022",
      location: "San Francisco, CA",
      duration: "14 weeks",
      budget: "$150,000",
      description: "Complete restaurant furniture package including dining tables, chairs, bar stools, and custom bar. Designed to create an intimate yet sophisticated dining atmosphere.",
      features: ["Custom Bar Design", "Dining Tables", "Bar Stools", "Banquette Seating"],
      materials: ["Reclaimed Oak", "Industrial Steel", "Vintage Leather", "Copper Accents"]
    },
    {
      id: 6,
      title: "Antique Library Restoration",
      category: "restoration",
      images: [
        "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800"
      ],
      client: "Historic Mansion Trust",
      year: "2022",
      location: "Boston, MA",
      duration: "20 weeks",
      budget: "$110,000",
      description: "Meticulous restoration of 19th-century library shelving and reading furniture. Project required matching original wood species and traditional joinery techniques.",
      features: ["Historical Accuracy", "Original Joinery", "Period Hardware", "Conservation Techniques"],
      materials: ["Period-matched Oak", "Traditional Finishes", "Antique Hardware", "Conservation Wax"]
    }
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Featured
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed mb-8">
            Each project represents our commitment to excellence, showcasing unique designs, 
            premium materials, and exceptional craftsmanship that exceeds client expectations.
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

        {/* Works Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredWorks.map((work) => (
            <Card key={work.id} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={work.images[0]} 
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="sm"
                  onClick={() => setSelectedWork(work)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Badge className="absolute top-4 left-4 bg-amber-500 text-black">
                  {work.category.charAt(0).toUpperCase() + work.category.slice(1)}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{work.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{work.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white/60">
                      <User className="h-4 w-4 text-amber-400" />
                      <span>{work.client}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/60">
                      <Calendar className="h-4 w-4 text-amber-400" />
                      <span>{work.year} • {work.duration}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white/60">
                      <MapPin className="h-4 w-4 text-amber-400" />
                      <span>{work.location}</span>
                    </div>
                    <div className="text-amber-400 font-semibold">
                      Project Value: {work.budget}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="border-white/20 text-white/70">
                      {feature}
                    </Badge>
                  ))}
                  {work.features.length > 3 && (
                    <Badge variant="outline" className="border-white/20 text-white/70">
                      +{work.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button 
                  onClick={() => setSelectedWork(work)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold"
                >
                  View Project Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedWork.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedWork(null)}
                  className="text-white hover:bg-white/10"
                >
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img 
                      src={selectedWork.images[0]} 
                      alt={selectedWork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {selectedWork.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {selectedWork.images.slice(1).map((image: string, index: number) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${selectedWork.title} ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/60">Client:</span>
                        <span className="text-white">{selectedWork.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Year:</span>
                        <span className="text-white">{selectedWork.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Location:</span>
                        <span className="text-white">{selectedWork.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Duration:</span>
                        <span className="text-white">{selectedWork.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Budget:</span>
                        <span className="text-amber-400 font-semibold">{selectedWork.budget}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.features.map((feature: string, index: number) => (
                        <Badge key={index} variant="outline" className="border-white/20 text-white/70">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Materials Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.materials.map((material: string, index: number) => (
                        <Badge key={index} className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-white/70 leading-relaxed">{selectedWork.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}