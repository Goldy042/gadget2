'use client'
import React from 'react';
import { X } from 'lucide-react';
import { useCart } from "../context/CartContext";

const CartDrawer = ({ open, onClose } : {open: boolean; onClose: () => void;}) => {
  const { lines, total, clear, remove, dec, add } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:text-neutral hover:bg-secondary rounded-full transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {lines.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <p className="text-lg font-medium text-center">Your cart is empty</p>
                  <p className="text-sm text-neutral-600 text-center mt-2">Let&apos;s add something cute 🤎</p>
                </div>
              )}

              {lines.map(line => (
                <div key={line.id} className="flex gap-4 items-center p-4 bg-gray-50 rounded-lg transition-colors duration-200">
                  <img 
                    src={line.image} 
                    alt={line.name} 
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{line.name}</div>
                    <div className="text-xs text-neutral-600">${line.price.toFixed(2)}</div>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button 
                        onClick={() => dec(line.id)} 
                        className="w-8 h-8 rounded-md cursor-pointer bg-white hover:bg-neutral border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="min-w-6 text-center text-sm font-medium">{line.qty}</span>
                      <button 
                        onClick={() => add(line, 1)} 
                        className="w-8 h-8 rounded-md cursor-pointer bg-white hover:bg-neutral border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-sm font-semibold text-gray-900">${(line.price * line.qty).toFixed(2)}</div>
                    <button 
                      onClick={() => remove(line.id)} 
                      className="text-xs text-red-600 hover:text-red-800 cursor-pointer transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          {lines.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Subtotal</span>
                <span className="font-semibold text-lg text-gray-900">${total.toFixed(2)}</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={clear} 
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral text-gray-800 hover:bg-gray-200 transition-colors duration-200 font-medium"
                >
                  Clear
                </button>
                <a 
                  href="/checkout" 
                  className="flex-1 py-3 px-4 rounded-lg hover:bg-primary text-white bg-accent transition-colors duration-500 text-center font-semibold"
                >
                  Checkout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;