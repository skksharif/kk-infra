import { useState } from "react";
import { X } from "lucide-react";

// ✅ Categories
const categories = [
  { id: "all", name: "All Projects" },
  { id: "scaffolding", name: "Scaffolding Systems" },
  { id: "acrowspan", name: "Acrow Spans" },
  { id: "centeredsheets", name: "Centered Sheets" },
  { id: "clamps", name: "Clamps" },
  //  { id: "galvanizedplanks", name: "Metal Planks" },
  { id: "jackpipes", name: "Jack Pipes" },
  { id: "columnbox", name: "Column Box" },
  { id: "shattering", name: "Heavy Shattering" },
];

// ✅ Gallery Items
interface GalleryItem {
  id: string;
  category: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  // Scaffolding
  {
    id: "scaf1",
    category: "scaffolding",
    image: "/gallery/scaffolding/i1.jpg",
  },
  {
    id: "scaf2",
    category: "scaffolding",
    image: "/gallery/scaffolding/i1.png",
  },
  {
    id: "scaf3",
    category: "scaffolding",
    image: "/gallery/scaffolding/i2.jpg",
  },
  {
    id: "scaf4",
    category: "scaffolding",
    image: "/gallery/scaffolding/i2.png",
  },
  {
    id: "scaf5",
    category: "scaffolding",
    image: "/gallery/scaffolding/i3.jpg",
  },
  {
    id: "scaf6",
    category: "scaffolding",
    image: "/gallery/scaffolding/i3.png",
  },
  {
    id: "scaf7",
    category: "scaffolding",
    image: "/gallery/scaffolding/i4.jpg",
  },
  {
    id: "scaf8",
    category: "scaffolding",
    image: "/gallery/scaffolding/i4.png",
  },
  {
    id: "scaf9",
    category: "scaffolding",
    image: "/gallery/scaffolding/i5.jpg",
  },
  {
    id: "scaf10",
    category: "scaffolding",
    image: "/gallery/scaffolding/i5.png",
  },
  {
    id: "scaf11",
    category: "scaffolding",
    image: "/gallery/scaffolding/i6.jpg",
  },
  {
    id: "scaf12",
    category: "scaffolding",
    image: "/gallery/scaffolding/i6.png",
  },
  {
    id: "scaf13",
    category: "scaffolding",
    image: "/gallery/scaffolding/i7.jpg",
  },
  {
    id: "scaf14",
    category: "scaffolding",
    image: "/gallery/scaffolding/i7.png",
  },
  {
    id: "scaf15",
    category: "scaffolding",
    image: "/gallery/scaffolding/i8.jpg",
  },
  {
    id: "scaf16",
    category: "scaffolding",
    image: "/gallery/scaffolding/i8.png",
  },
  {
    id: "scaf17",
    category: "scaffolding",
    image: "/gallery/scaffolding/i9.jpg",
  },
  {
    id: "scaf18",
    category: "scaffolding",
    image: "/gallery/scaffolding/i9.png",
  },
  {
    id: "scaf19",
    category: "scaffolding",
    image: "/gallery/scaffolding/i10.jpg",
  },
  {
    id: "scaf20",
    category: "scaffolding",
    image: "/gallery/scaffolding/i10.png",
  },
  {
    id: "scaf21",
    category: "scaffolding",
    image: "/gallery/scaffolding/i11.jpg",
  },

  // Acrowspan
  { id: "acrow1", category: "acrowspan", image: "/gallery/acrowspan/i1.png" },
  { id: "acrow2", category: "acrowspan", image: "/gallery/acrowspan/i2.png" },
  { id: "acrow3", category: "acrowspan", image: "/gallery/acrowspan/i3.png" },
  { id: "acrow4", category: "acrowspan", image: "/gallery/acrowspan/i4.png" },

  // Centered Sheets
  {
    id: "cs1",
    category: "centeredsheets",
    image: "/gallery/centeredsheets/i1.png",
  },
  {
    id: "cs2",
    category: "centeredsheets",
    image: "/gallery/centeredsheets/i2.png",
  },
  {
    id: "cs3",
    category: "centeredsheets",
    image: "/gallery/centeredsheets/i3.png",
  },

  // Clamps
  { id: "cl1", category: "clamps", image: "/gallery/clamps/i1.jpg" },
  { id: "cl2", category: "clamps", image: "/gallery/clamps/i2.jpg" },
  { id: "cl3", category: "clamps", image: "/gallery/clamps/i3.jpg" },
  { id: "cl4", category: "clamps", image: "/gallery/clamps/i4.jpg" },
  { id: "cl5", category: "clamps", image: "/gallery/clamps/i5.jpg" },
  { id: "cl6", category: "clamps", image: "/gallery/clamps/i6.jpg" },
  { id: "cl7", category: "clamps", image: "/gallery/clamps/i7.jpg" },
  { id: "cl8", category: "clamps", image: "/gallery/clamps/i8.jpg" },
  { id: "cl9", category: "clamps", image: "/gallery/clamps/i9.jpg" },
  { id: "cl10", category: "clamps", image: "/gallery/clamps/i10.jpg" },
  { id: "cl11", category: "clamps", image: "/gallery/clamps/i11.jpg" },

  // Metal Planks
  {
    id: "gp1",
    category: "galvanizedplanks",
    image: "/gallery/galvanizedplanks/i1.png",
  },
  {
    id: "gp2",
    category: "galvanizedplanks",
    image: "/gallery/galvanizedplanks/i2.png",
  },

  // Jack Pipes

  { id: "jp3", category: "jackpipes", image: "/gallery/jackpipes/i3.png" },
  { id: "jp4", category: "jackpipes", image: "/gallery/jackpipes/i4.png" },
  { id: "jp5", category: "jackpipes", image: "/gallery/jackpipes/i5.jpg" },
  { id: "jp6", category: "jackpipes", image: "/gallery/jackpipes/i6.jpg" },
  { id: "jp7", category: "jackpipes", image: "/gallery/jackpipes/i7.jpg" },
  { id: "jp8", category: "jackpipes", image: "/gallery/jackpipes/i7.jpg" },

  // Column Box
  { id: "cb1", category: "columnbox", image: "/gallery/columnbox/i1.jpg" },
  { id: "cb2", category: "columnbox", image: "/gallery/columnbox/i2.jpg" },
  { id: "cb3", category: "columnbox", image: "/gallery/columnbox/i3.jpg" },
  { id: "cb4", category: "columnbox", image: "/gallery/columnbox/i4.jpg" },
  { id: "cb5", category: "columnbox", image: "/gallery/columnbox/i5.jpg" },
  { id: "cb6", category: "columnbox", image: "/gallery/columnbox/i6.jpg" },
  { id: "cb7", category: "columnbox", image: "/gallery/columnbox/i7.jpg" },
  { id: "cb8", category: "columnbox", image: "/gallery/columnbox/i8.jpg" },
  { id: "cb9", category: "columnbox", image: "/gallery/columnbox/i9.jpg" },
  { id: "cb10", category: "columnbox", image: "/gallery/columnbox/i10.jpg" },
  { id: "cb11", category: "columnbox", image: "/gallery/columnbox/i11.jpg" },

  // Shattering
  { id: "hs1", category: "shattering", image: "/gallery/shattering/i1.jpg" },
  { id: "hs2", category: "shattering", image: "/gallery/shattering/i2.jpg" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* ✅ Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] mb-3">
            Project Gallery
          </h2>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Explore our range of scaffolding, centering, and support systems
            used in top construction projects.
          </p>
        </div>

        {/* ✅ Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm md:text-base border transition-all duration-300 
              ${
                selectedCategory === cat.id
                  ? "bg-[#1E3A4C] text-white border-[#1E3A4C] shadow-md scale-105"
                  : "bg-white text-[#333333] border-gray-300 hover:bg-[#1E3A4C]/10 hover:border-[#1E3A4C]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item.image)}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl cursor-pointer transition-all"
            >
              <img
                src={item.image}
                alt={item.category}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#1E3A4C]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center">
                <p className="text-white font-semibold text-lg">
                  {categories.find((c) => c.id === item.category)?.name}
                </p>
                <span className="mt-1 text-sm text-[#FFFFFF]/80">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white hover:text-[#1E3A4C] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={36} />
          </button>
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border-4 border-[#1E3A4C]/30"
          />
        </div>
      )}
    </section>
  );
}
