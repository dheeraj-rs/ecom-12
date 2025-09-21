"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, User, Calendar } from 'lucide-react';

export default function ClientReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Morrison",
      title: "Homeowner",
      project: "Luxury Penthouse Living Room",
      rating: 5,
      date: "March 2023",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "Absolutely exceptional work! The Royalwood team transformed our living space into something beyond our wildest dreams. The attention to detail, quality of craftsmanship, and professional service exceeded all expectations. Every piece feels like a work of art.",
      highlights: ["Exceptional Quality", "Professional Service", "Attention to Detail"]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CEO, TechCorp Industries",
      project: "Corporate Headquarters Boardroom",
      rating: 5,
      date: "February 2023",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "The boardroom furniture has completely elevated our corporate image. Clients are consistently impressed by the sophisticated design and impeccable craftsmanship. Royalwood delivered exactly what we envisioned and more.",
      highlights: ["Sophisticated Design", "Impeccable Craftsmanship", "Professional Image"]
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      title: "Interior Designer",
      project: "Artisan Dining Collection",
      rating: 5,
      date: "January 2023",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "Working with Royalwood was a dream come true. Their ability to bring custom designs to life while maintaining the highest quality standards is unmatched. The dining collection is truly a masterpiece that will be treasured for generations.",
      highlights: ["Custom Design Excellence", "Highest Quality Standards", "Generational Quality"]
    },
    {
      id: 4,
      name: "David Williams",
      title: "Private Client",
      project: "Master Bedroom Suite",
      rating: 5,
      date: "December 2022",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "The bedroom suite exceeded our expectations in every way. The hidden storage solutions are ingenious, and the integrated lighting creates the perfect ambiance. Royalwood's team was professional, punctual, and incredibly skilled.",
      highlights: ["Ingenious Solutions", "Perfect Ambiance", "Professional Team"]
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      title: "Restaurant Owner",
      project: "Restaurant Interior Design",
      rating: 5,
      date: "November 2022",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "Our restaurant's atmosphere has been completely transformed. The custom furniture creates an intimate yet sophisticated dining experience that our customers absolutely love. Revenue has increased significantly since the renovation.",
      highlights: ["Transformed Atmosphere", "Customer Satisfaction", "Business Impact"]
    },
    {
      id: 6,
      name: "Professor James Hartford",
      title: "Historic Mansion Trust",
      project: "Antique Library Restoration",
      rating: 5,
      date: "October 2022",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      review: "The restoration work was absolutely meticulous. Royalwood's expertise in historical furniture restoration is unparalleled. They preserved the original character while ensuring structural integrity for future generations.",
      highlights: ["Meticulous Restoration", "Historical Expertise", "Preserved Character"]
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReviewData = reviews[currentReview];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience working with Royalwood and the exceptional results we delivered.
          </p>
        </div>

        {/* Featured Review */}
        <div className="mb-16">
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Client Photo & Info */}
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden mb-4">
                    <img 
                      src={currentReviewData.image} 
                      alt={currentReviewData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{currentReviewData.name}</h3>
                  <p className="text-amber-400 font-medium mb-2">{currentReviewData.title}</p>
                  <p className="text-white/60 text-sm mb-4">{currentReviewData.project}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                    {[...Array(currentReviewData.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-white/60 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{currentReviewData.date}</span>
                  </div>
                </div>

                {/* Review Content */}
                <div className="lg:col-span-2">
                  <Quote className="h-12 w-12 text-amber-400 mb-6" />
                  <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                    "{currentReviewData.review}"
                  </blockquote>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {currentReviewData.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm border border-amber-500/30"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevReview}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview 
                      ? 'bg-amber-400' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextReview}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className={`bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                index === currentReview ? 'ring-2 ring-amber-400' : ''
              }`}
              onClick={() => setCurrentReview(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-white/60 text-sm">{review.title}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-3 line-clamp-3">
                  "{review.review}"
                </p>

                <p className="text-amber-400 text-xs font-medium">{review.project}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Create Your Own Success Story?
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Royalwood difference. 
            Let us bring your vision to life with our exceptional craftsmanship.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 rounded-xl"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
}