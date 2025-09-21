"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: ["123 Furniture Boulevard", "Design District, NY 10001", "United States"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Toll Free: 1-800-ROYAL-WD"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@royalwood.com", "sales@royalwood.com", "support@royalwood.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
            Ready to transform your space with our bespoke furniture? Contact us today to discuss your project 
            and discover how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/80">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Custom Furniture Inquiry"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements, preferred timeline, and any specific details we should know..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{info.title}</h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-white/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="bg-white/5 border-white/10 overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}