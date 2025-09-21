import { Award, Users, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Each piece is meticulously crafted using the finest materials and time-honored techniques."
    },
    {
      icon: Users,
      title: "Expert Craftsmen",
      description: "Our team of master artisans brings decades of experience to every project."
    },
    {
      icon: Zap,
      title: "Modern Innovation",
      description: "Combining traditional methods with cutting-edge technology for superior results."
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "We stand behind our work with comprehensive warranties on all our furniture."
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Royalwood
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Legacy
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
            For nearly four decades, Royalwood has been the premier destination for bespoke furniture manufacturing. 
            Founded in 1985, we've built our reputation on uncompromising quality, innovative design, and exceptional service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-white/80 leading-relaxed">
              What started as a small family workshop has grown into one of the most respected furniture manufacturers 
              in the industry. Our commitment to excellence and attention to detail has earned us the trust of 
              discerning clients worldwide.
            </p>
            <p className="text-white/80 leading-relaxed">
              Every piece that leaves our workshop is a testament to our dedication to craftsmanship. We believe 
              that furniture should not only be functional but should also tell a story, reflect personality, 
              and stand the test of time.
            </p>
            <p className="text-white/80 leading-relaxed">
              Today, we continue to push the boundaries of what's possible in furniture design while staying 
              true to the traditional values that have made us who we are.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Craftsman working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-black">
              <div className="text-3xl font-bold">38+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}