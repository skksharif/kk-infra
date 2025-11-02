import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const products = [
    {
      title: "Scaffolding Systems",
      description:
        "Strong and reliable scaffolding systems built for maximum safety and ease of assembly.",
      image: "/gallery/scaffolding/i7.jpg",
    },
    {
      title: "Centering Plates & Boxes",
      description:
        "High-quality centering plates and boxes for accurate and durable slab construction.",
      image: "/gallery/centeredsheets/i2.png",
    },
    {
      title: "Telescopic Spans",
      description:
        "Adjustable spans designed to provide versatile and secure support at construction sites.",
      image: "/gallery/acrowspan/i2.png",
    },
    {
      title: "Jack Pipes",
      description:
        "Durable jack pipes made from heavy-duty steel to handle high load capacities.",
      image: "/gallery/jackpipes/i9.jpg",
    },
    {
      title: "Column Boxes",
      description:
        "Smooth-finish column boxes available in multiple shapes and sizes for easy setup.",
      image: "/gallery/columnbox/i13.jpg",
    },
    {
      title: "U Jacks & Base Jacks",
      description:
        "Essential adjustable support components ensuring stability in every scaffolding setup.",
      image: "/gallery/ujake/i2.png",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-50 text-[#333333] transition-all duration-700"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium construction materials built for
            strength, safety, and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02] overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A4C] mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Old Material Purchase Section */}
        <div
          className={`mt-20 bg-[#1E3A4C] text-white rounded-2xl p-10 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Old Material Purchase & Sales
          </h3>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            We buy and sell high-quality used scaffolding and centering
            materials. Get the best value for your old equipment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:9697786999"
              className="bg-[#F5C542] text-[#1E3A4C] px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#e0b53b] transition-all"
            >
              Call for Quote
            </a>
            <a
              href="https://wa.me/919697786999"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#F5C542] text-[#F5C542] hover:bg-[#F5C542] hover:text-[#1E3A4C] px-8 py-4 rounded-lg font-semibold transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
