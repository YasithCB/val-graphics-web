import { motion } from "framer-motion";
import { PRODUCTION_PARTNERS } from "../db/data.js";

export default function ProductionPartners() {
  return (
    <section className="w-full bg-white py-5 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Our Production Partners
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We use premium and internationally renowned branded vehicle wrap
          vinyl, best in class authentic inks, and all printed graphics
          laminated using high-end laminators to last.
        </p>

        {/* Slider strip */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Double the logos so it loops smoothly */}
            {PRODUCTION_PARTNERS.map((brand, i) => (
              <img
                key={i}
                src={brand}
                alt={brand}
                className="w-auto object-contain mx-5"
                height={50}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
