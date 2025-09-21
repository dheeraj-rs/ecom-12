import { Hammer, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    products: [
      "Chairs & Seating",
      "Tables & Desks",
      "Storage Solutions",
      "Bedroom Furniture",
      "Living Room Sets",
      "Custom Pieces"
    ],
    services: [
      "Bespoke Design",
      "Interior Consultation",
      "Delivery & Assembly",
      "Maintenance Services",
      "Warranty Support",
      "Design Planning"
    ],
    company: [
      "About Royalwood",
      "Our Craftsmen",
      "Sustainability",
      "Careers",
      "Press & Media",
      "Testimonials"
    ],
    support: [
      "Contact Support",
      "Care Instructions",
      "Returns & Exchanges",
      "Warranty Claims",
      "FAQ",
      "Showroom Visits"
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Royalwood
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive furniture collections, design tips, 
              and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-2 rounded-lg">
                  <Hammer className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Royalwood
                </span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Crafting exceptional furniture for over 38 years. Every piece tells a story of 
                dedication, quality, and timeless design that transforms spaces into works of art.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>info@royalwood.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>123 Furniture Blvd, Design District, NY</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-amber-500 hover:text-black transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-amber-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-amber-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-amber-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-white/70 hover:text-amber-400 transition-colors duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 Royalwood Manufacturing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-white/60 hover:text-amber-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}