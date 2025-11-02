import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="
            fixed bottom-8 right-8 z-50 
            bg-[#1E3A4C] hover:bg-[#333333]
            text-white p-4 rounded-full shadow-lg 
            transition-all duration-300 
            transform hover:scale-110 hover:shadow-2xl
          "
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
