import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Car } from "lucide-react";
import logo from '@/assets/logo.jpg'; 

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50 border-b border-yellow-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3 group">
            <div className="p-2 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 rounded">
              <img src={logo} alt="VRTA Motors"  className="h-12 w-auto border-custom" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-yellow-400/5 opacity-0 transition-all duration-300 group-hover:opacity-100 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Contact Number */}
          <div className="hidden md:flex items-center space-x-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 px-6 py-3 rounded-xl border border-yellow-500/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-full shadow-lg">
              <Phone className="h-4 w-4 text-black" />
            </div>
            <span className="font-semibold text-yellow-400">9840364849</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 p-2 transition-all duration-300 hover:bg-yellow-400/10 rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (optional, uncomment if needed) */}
      {/* Add if you want mobile dropdown in future */}
    </nav>
  );
};

export default Header;
