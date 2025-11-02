import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white text-[#333333] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-12 h-12 bg-[#1E3A4C] rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="logo" className="w-11" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1E3A4C]">KK Steels & Scaffolding</h1>
              <p className="text-xs text-[#333333] opacity-70">Building The Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`transition-colors hover:text-[#1E3A4C] ${
                  activeSection === item.id
                    ? 'text-[#1E3A4C] font-semibold'
                    : 'text-[#333333]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href="tel:9703207868"
            className="hidden md:flex items-center space-x-2 bg-[#1E3A4C] hover:bg-[#162C3A] text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Phone size={18} />
            <span>9703 207 868</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1E3A4C]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1E3A4C] font-semibold'
                    : 'text-[#333333] hover:text-[#1E3A4C]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:9703207868"
              className="flex items-center space-x-2 text-[#1E3A4C] font-medium py-2"
            >
              <Phone size={18} />
              <span>9703 207 868</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
