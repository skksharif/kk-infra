import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award } from "lucide-react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-[#FFFFFF] flex justify-center items-center"
    >
      <div className="container mx-auto px-6 md:px-10 flex flex-col items-center">
        {/* ✅ Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] mb-3">
            About Us
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto leading-relaxed">
            KK Steels & Scaffolding – Your trusted partner in durable
            construction materials and scaffolding solutions.
          </p>
        </div>

        {/* ✅ Our Story */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold text-[#1E3A4C] mb-6">Our Story</h3>
            <div className="space-y-4 text-[#333333]/90 leading-relaxed max-w-xl mx-auto">
              <p>
                <span className="font-semibold text-[#1E3A4C]">
                  KK Steels & Scaffolding
                </span>{" "}
                is a leading supplier of scaffolding, centering, and construction
                materials across Telangana and Andhra Pradesh. Led by{" "}
                <span className="font-semibold text-[#1E3A4C]">
                  Shaik Abdul Hameed
                </span>
                , our company is known for reliability, quality, and timely
                service in every project.
              </p>
              <p>
                We supply a wide range of materials — scaffolding systems, acrow
                spans, jack pipes, clamps, column boxes, and centering sheets —
                ensuring top-notch strength and durability.
              </p>
              <p>
                With our focus on customer satisfaction and innovation, we’ve
                become a trusted name supporting contractors, builders, and
                infrastructure developers.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/gallery/scaffolding/i1.png"
              alt="KK Steels & Scaffolding"
              className="rounded-2xl shadow-2xl border border-[#1E3A4C]/10 w-full max-w-md object-cover"
            />
        
          </div>
        </div>

        {/* ✅ Mission / Vision / Values */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 w-full max-w-6xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: <Target className="w-8 h-8" />,
              title: "Our Mission",
              desc: "To deliver durable, reliable, and affordable scaffolding solutions that ensure safety and quality in every project.",
            },
            {
              icon: <Eye className="w-8 h-8" />,
              title: "Our Vision",
              desc: "To become the most trusted name in scaffolding and material supply, known for quality, service, and innovation.",
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Our Values",
              desc: "Integrity, quality, reliability, and customer-first service guide every decision we make.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center p-8 bg-[#F9FAFB] rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A4C] text-white rounded-full mb-4">
                {item.icon}
              </div>
              <h4 className="text-2xl font-semibold text-[#1E3A4C] mb-3">
                {item.title}
              </h4>
              <p className="text-[#333333]/80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Why Choose Us */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-700 text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-3xl font-bold text-[#1E3A4C] mb-8">
            Why Choose KK Steels & Scaffolding?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Premium Quality",
                desc: "Our materials are tested for strength and safety, ensuring long-lasting performance.",
              },
              {
                title: "Competitive Pricing",
                desc: "We provide value-driven pricing with no compromise on quality or reliability.",
              },
              {
                title: "Expert Support",
                desc: "Our experienced team assists you in choosing the right scaffolding and centering solutions.",
              },
              {
                title: "On-Time Delivery",
                desc: "We understand deadlines — our logistics ensure quick and dependable deliveries.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left md:text-center"
              >
                <h4 className="text-xl font-semibold text-[#1E3A4C] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#333333]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Footer Info */}
        <div className="text-center mt-16 text-[#333333]/80 text-sm">
          <p>
            <span className="font-semibold text-[#1E3A4C]">Owner:</span> Shaik
            Abdul Hameed |{" "}
            <span className="font-semibold text-[#1E3A4C]">GST No:</span>{" "}
            36IMYPS8615B1ZA
          </p>
          <p>📞 9703207868 / 9966932004</p>
        </div>
      </div>
    </section>
  );
}
