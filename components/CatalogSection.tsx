"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react';

export default function CatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'chairs', label: 'Chairs & Seating' },
    { id: 'tables', label: 'Tables' },
    { id: 'storage', label: 'Storage' },
    { id: 'bedroom', label: 'Bedroom' },
  ];

  const products = [
    {
      id: 1,
      name: "Executive Leather Chair",
      category: "chairs",
      price: "$2,899",
      originalPrice: "$3,299",
      image: "https://images.pexels.com/photos/586806/pexels-photo-586806.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 124,
      badge: "Best Seller",
      description: "Premium leather executive chair with ergonomic design and solid wood frame."
    },
    {
      id: 2,
      name: "Modern Dining Table",
      category: "tables",
      price: "$4,599",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 89,
      badge: "New Arrival",
      description: "Stunning dining table crafted from sustainable hardwood with contemporary design."
    },
    {
      id: 3,
      name: "Luxury Bookshelf",
      category: "storage",
      price: "$3,299",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 67,
      badge: "Premium",
      description: "Hand-crafted bookshelf with adjustable shelves and hidden storage compartments."
    },
    {
      id: 4,
      name: "King Size Bed Frame",
      category: "bedroom",
      price: "$5,899",
      originalPrice: "$6,499",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 156,
      badge: "Sale",
      description: "Elegant king size bed frame with upholstered headboard and integrated nightstands."
    },
    {
      id: 5,
      name: "Vintage Armchair",
      category: "chairs",
      price: "$1,899",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 93,
      description: "Classic armchair with tufted leather upholstery and brass accents."
    },
    {
      id: 6,
      name: "Glass Coffee Table",
      category: "tables",
      price: "$2,199",
      image: "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 78,
      badge: "Limited Edition",
      description: "Contemporary coffee table with tempered glass top and solid wood base."
    },
    {
      id: 7,
      name: "Walk-in Wardrobe",
      category: "storage",
      price: "$8,999",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 45,
      badge: "Custom",
      description: "Fully customizable walk-in wardrobe system with premium finishes."
    },
    {
      id: 8,
      name: "Nightstand Set",
      category: "bedroom",
      price: "$1,599",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 112,
      description: "Matching nightstand set with soft-close drawers and wireless charging pads."
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'default';
      case 'New Arrival': return 'secondary';
      case 'Sale': return 'destructive';
      case 'Premium': return 'default';
      case 'Limited Edition': return 'outline';
      case 'Custom': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <section id="catalog" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Premium
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Catalog
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed mb-8">
            Discover our curated collection of handcrafted furniture pieces, each designed to bring 
            elegance and functionality to your space.
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

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    variant={getBadgeVariant(product.badge)}
                    className="absolute top-4 left-4 z-10"
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Wishlist Button */}
                <Button
                  size="sm"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-white text-black hover:bg-white/90">
                    Quick View
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm text-white/80">{product.rating}</span>
                  </div>
                  <span className="text-white/40">•</span>
                  <span className="text-sm text-white/60">{product.reviews} reviews</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-amber-400">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-white/50 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
}