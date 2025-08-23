import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock, Shield, Truck, CreditCard, RotateCcw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const categories = [
    { name: 'Smartphones', href: '#' },
    { name: 'Laptops', href: '#' },
    { name: 'Headphones', href: '#' },
    { name: 'Smart Watches', href: '#' },
    { name: 'Gaming', href: '#' },
    { name: 'Accessories', href: '#' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Support', href: '#' }
  ];

  const features = [
    { icon: Shield, text: 'Secure Payments' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: RotateCcw, text: '30-Day Returns' },
    { icon: CreditCard, text: 'Easy Checkout' }
  ];

  return (
    <footer id="contact" className="mt-12 bg-primary border-t border-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">
              Kel&apos;s Gadget Hub
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-neutral">
              Your trusted destination for the latest gadgets and technology. 
              Quality products, exceptional service, and unbeatable prices.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="p-2 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-neutral transition-all duration-200 hover:scale-105"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="p-2 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-neutral transition-all duration-200 hover:scale-105"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="p-2 rounded-lg bg-secondary text-primary hover:bg-accent hover:text-neutral transition-all duration-200 hover:scale-105"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-neutral hover:text-secondary hover:pl-2 transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent">
              Categories
            </h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={category.href}
                    className="text-sm text-neutral hover:text-secondary hover:pl-2 transition-all duration-200"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-accent">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <span className="text-sm text-neutral">
                  hello@kelsgadgets.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <span className="text-sm text-neutral">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm text-neutral">
                  123 Tech Street, Digital City
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                <span className="text-sm text-neutral">
                  Mon-Fri: 9AM-6PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 pt-8 border-t border-secondary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 hover:scale-105 transition-all duration-200"
              >
                <feature.icon size={20} className="text-accent" />
                <span className="text-sm font-medium text-neutral">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-8 pt-6 border-t border-secondary">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {policies.map((policy, index) => (
              <a 
                key={index}
                href={policy.href}
                className="text-sm text-neutral hover:text-secondary transition-colors duration-200"
              >
                {policy.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <small className="text-center md:text-left text-secondary">
              &copy; {currentYear} Kel&apos;s Gadget Hub. All rights reserved.
            </small>
            <div className="text-sm text-center md:text-right text-secondary">
              Made with care for tech enthusiasts
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}