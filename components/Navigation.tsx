"use client";

import { useState } from 'react';
import { Menu, X, Hammer, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/catalog', label: 'Catalog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-2 rounded-lg">
              <Hammer className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Royalwood
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-white/80">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@royalwood.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="px-3 py-2 text-sm text-white/80">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@royalwood.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}