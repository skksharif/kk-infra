import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A4C] text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="KK Steels & Scaffolding Logo" className="w-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KK Steels & Scaffolding</h3>
                <p className="text-xs text-gray-300 tracking-wide">
                  Trusted Scaffolding & Construction Material Supplier
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We supply high-quality scaffolding materials, shuttering, and construction
              equipment with reliable service across Hyderabad.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-white/30 inline-block pb-1">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-gray-200">
              <a
                href="tel:9703207868"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
              >
                <Phone size={16} />
                <span>9703207868</span>
              </a>
              <a
                href="tel:9966932004"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
              >
                <Phone size={16} />
                <span>9966932004</span>
              </a>
              <a
                href="https://wa.me/919703207868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-sky-400 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: Shaik Abdul Hameed</span>
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-white/30 inline-block pb-1">
              Our Location
            </h4>
            <div className="flex items-start space-x-2 text-sm text-gray-200">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>
                SC Complex, Shop No.3<br />
                Bholakpur, Musheerabad<br />
                Hyderabad, Telangana - 500020<br />
                India
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-300">
              <p><strong>Owner:</strong> Shaik Abdul Hameed</p>
              <p><strong>GST No:</strong> 36IMYPS8615B1ZA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} KK Steels & Scaffolding. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
