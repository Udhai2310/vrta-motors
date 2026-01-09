/* import React, { useState } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, Car } from "lucide-react";
import logo from '@/assets/logo.jpg';
import minorservices from '@/assets/minor-Services.jpg';
import transmission from '@/assets/transmission.jpg';
import diagnostics from '@/assets/diagnostics.jpg';   
import electrical from '@/assets/electrical.jpg';
import coding from '@/assets/coding.jpg';
import acservice from '@/assets/ac-service.jpg';



const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50 border-b border-yellow-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo 
          <div className="flex-shrink-0 flex items-center space-x-3 group">
            <div className="p-2 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 rounded">
              <img src={logo} alt="VRTA Motors"  className="h-12 w-auto border-custom" />
            </div>
          </div>

          {/* Desktop Navigation 
<div className="hidden md:flex items-center space-x-8">
  {[
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ].map((item) =>
    item.label === "Services" ? (
      <div
        key={item.label}
        className="relative py-2"
        onMouseEnter={() => {
          clearTimeout((window as any).dropdownTimeout);
          setShowDropdown(true);
        }}
        onMouseLeave={() => {
          (window as any).dropdownTimeout = setTimeout(() => {
            setShowDropdown(false);
          }, 200); // Delay so user can move mouse
        }}
      >
        <span className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium flex items-center cursor-pointer">
          Services ▾
        </span>

        {showDropdown && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-black/80 backdrop-blur-md shadow-2xl p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90vw] max-w-6xl border border-yellow-500/20"
            onMouseEnter={() => clearTimeout((window as any).dropdownTimeout)}
            onMouseLeave={() => {
              (window as any).dropdownTimeout = setTimeout(() => {
                setShowDropdown(false);
              }, 200);
            }}
          >
            {[
              {
                title: "Periodic Services & Suspension Repairs",
                img: minorservices,
              },
              {
                title: "Engine Overhaul & Automatic Transmission Overhaul",
                img: transmission,
              },
              {
                title: "Full Body Painting & Accident Repairs",
                img: diagnostics,
              },
              {
                title: "All Electrical & Electronic Services",
                img: electrical,
              },
              {
                title: "Programming & Coding",
                img: coding,
              },
              {
                title: "AC and services",
                img: acservice,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="h-64 bg-cover bg-center rounded-xl text-white flex flex-col justify-between p-4 hover:scale-105 transition-all duration-300 relative"
                style={{ backgroundImage: `url(${service.img})` }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
                <div className="relative z-10 mt-auto">
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/readmore');
                      }}
                      className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all"
                    >
                      Read More
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/contact');
                      }}
                      className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        key={item.label}
        to={item.path}
        className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group py-2"
      >
        {item.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute inset-0 rounded-lg bg-yellow-400/5 opacity-0 transition-all duration-300 group-hover:opacity-100 -z-10"></span>
      </Link>
    )
  )}
</div>


          {/* Contact Number 
          <div className="hidden md:flex items-center space-x-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 px-6 py-3 rounded-xl border border-yellow-500/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-full shadow-lg">
              <Phone className="h-4 w-4 text-black" />
            </div>
            <span className="font-semibold text-yellow-400">9840364849</span>
          </div>

          {/* Mobile Menu Button 
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

      {/* Mobile Navigation (optional, uncomment if needed) 
      {/* Add if you want mobile dropdown in future 
    </nav>
  );
};

export default Header; */

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from '@/assets/logo.jpg';
import minorservices from '@/assets/minor-Services.jpg';
import transmission from '@/assets/transmission.jpg';
import diagnostics from '@/assets/diagnostics.jpg';   
import electrical from '@/assets/electrical.jpg';
import coding from '@/assets/coding.jpg';
import acservice from '@/assets/ac-service.jpg';
import ReadMoreData from "@/pages/readmoreData.js";
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50 border-b border-yellow-500/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3 group">
            <div className="p-2 rounded-xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 rounded">
              <img src={logo} alt="VRTA Motors" className="h-12 w-auto border-custom" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((item) =>
              item.label === "Services" ? (
                <div
                  key={item.label}
                  className="relative py-2"
                  ref={dropdownRef}
                >
                  <span
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group py-2 flex items-center cursor-pointer"
                    onClick={() => setShowDropdown((prev) => !prev)}
                  >
                    Services ▾
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                        <span className="absolute inset-0 rounded-lg bg-yellow-400/5 opacity-0 transition-all duration-300 group-hover:opacity-100 -z-10"></span>
                  </span>

                  {showDropdown && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-black/80 backdrop-blur-md shadow-2xl p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90vw] max-w-6xl border border-yellow-500/20"
                    >

                      {[
  {
    title: "Periodic Services & Suspension Repairs",
    img: minorservices,
    matchId: 1,
  },
  {
    title: "Engine Overhaul & Automatic Transmission Overhaul",
    img: transmission,
    matchId: 2,
  },
  {
    title: "Full Body Painting & Accident Repairs",
    img: diagnostics,
    matchId: 3,
  },
  {
    title: "All Electrical & Electronic Services",
    img: electrical,
    matchId: 4,
  },
  {
    title: "Programming & Coding",
    img: coding,
    matchId: 5,
  },
  {
    title: "AC and services",
    img: acservice,
    matchId: 6,
  },
].map((service, index) => (
  <div
    key={index}
    className="h-64 bg-cover bg-center rounded-xl text-white flex flex-col justify-between p-4 hover:scale-105 transition-all duration-300 relative"
    style={{ backgroundImage: `url(${service.img})` }}
  >
    <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
    <div className="relative z-10 mt-auto">
      <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setShowDropdown(false);
            navigate('/readmore', { state: { key: service.matchId } });
          }}
          className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all"
        >
          Read More
        </button>
        <button
          onClick={() => {
            setShowDropdown(false);
            navigate('/contact');
          }}
          className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
))}

                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 rounded-lg bg-yellow-400/5 opacity-0 transition-all duration-300 group-hover:opacity-100 -z-10"></span>
                </Link>
              )
            )}
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
{mobileMenuOpen && (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/95 z-50 flex flex-col">
    {/* Top bar with logo and close button */}
    <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-500/20 bg-slate-900/90">
      <img src={logo} alt="VRTA Motors" className="h-10" />
      <button
        className="text-gray-300 hover:text-yellow-400 transition"
        onClick={() => setMobileMenuOpen(false)}
      >
        <X className="h-8 w-8" />
      </button>
    </div>
    {/* Navigation links */}
    <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
      <Link
        to="/"
        className="text-2xl font-semibold text-gray-200 hover:text-yellow-400 transition-all duration-300 tracking-wide"
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>
      <span
        className="text-2xl font-semibold text-gray-200 hover:text-yellow-400 transition-all duration-300 tracking-wide cursor-pointer"
        onClick={() => {
          setMobileMenuOpen(false);
          // Optionally, handle Services dropdown or scroll
        }}
      >
        Services
      </span>
      <Link
        to="/about"
        className="text-2xl font-semibold text-gray-200 hover:text-yellow-400 transition-all duration-300 tracking-wide"
        onClick={() => setMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-2xl font-semibold text-gray-200 hover:text-yellow-400 transition-all duration-300 tracking-wide"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </nav>
    {/* Contact number at the bottom
    <div className="flex justify-center items-center py-6 border-t border-yellow-500/20 bg-slate-900/90">
      <span className="text-yellow-400 font-semibold text-lg tracking-wider">9840364849</span>
    </div> */}
  </div>
)}
    </nav>
  );
};

export default Header;