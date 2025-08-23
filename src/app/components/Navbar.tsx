"use client";
import React, { use, useState } from 'react';
import { ShoppingCart, Menu, X, User, Search, Heart } from 'lucide-react';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, close, toggle, lines } = useCart();
  return (
    <>
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-primary bg-clip-text text-transparent">
                Kel&apos;s Gadget Hub
                </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                <a
                    href="#"
                    className="text-primary hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                <a
                    href="#"
                    className="text-primary hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                    Shop
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                <a
                    href="#"
                    className="text-primary hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                    About
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                <a
                    href="#"
                    className="text-primary hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                    Contact
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
                </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                <Search size={20} />
                </button>
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                <Heart size={20} />
                </button>
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                <User size={20} />
                </button>
                <button onClick={toggle} className="relative p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                <ShoppingCart size={20} />
                {lines.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {lines.length}
                    </span>
                )}
                </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
                <button onClick={toggle} className="relative p-2 text-primary hover:text-accent hover:bg-secondary rounded-full transition-all duration-200">
                <ShoppingCart size={20} />
                {lines.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {lines.length}
                    </span>
                )}
                </button>
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-primary hover:text-accent hover:bg-secondary rounded-full transition-all duration-200"
                >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                href="#"
                className="text-primary hover:text-accent hover:bg-secondary block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                Home
                </a>
                <a
                href="#"
                className="text-primary hover:text-accent hover:bg-secondary block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                Shop
                </a>
                <a
                href="#"
                className="text-primary hover:text-accent hover:bg-secondary block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                About
                </a>
                <a
                href="#"
                className="text-primary hover:text-accent hover:bg-secondary block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                >
                Contact
                </a>
                <div className="flex items-center space-x-4 px-3 py-2">
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                    <Search size={20} />
                </button>
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                    <Heart size={20} />
                </button>
                <button className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200">
                    <User size={20} />
                </button>
                </div>
            </div>
            </div>
        )}
        </nav>
        <CartDrawer open={isOpen} onClose={close} />
    </>
  );
};

export default Navbar;