import { motion } from "framer-motion";
import { PRODUCTION_PARTNERS } from "../db/data.js";
import { AOS_CONFIG } from "../db/aosAnimations.js";

export default function ProductionPartners() {
  return (
    <section className="w-full bg-white py-5 overflow-hidden">
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>
      <div className="text-center">
        <div className="mx-2 mx-md-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            {...AOS_CONFIG.FADE_UP}
          >
            <span className="text-primary-custom">Our Production</span> Partners
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto mb-8"
            {...AOS_CONFIG.FADE_UP}
          >
            We use premium and internationally renowned branded vehicle wrap
            vinyl, best in class authentic inks, and all printed graphics
            laminated using high-end laminators to last.
          </p>
        </div>

        {/* Slider strip */}
        <div
          className="relative w-full overflow-hidden"
          {...AOS_CONFIG.ZOOM_IN}
        >
          <motion.div
            className="row flex-nowrap py-3"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...PRODUCTION_PARTNERS, ...PRODUCTION_PARTNERS].map(
              (brand, i) => (
                <img
                  key={i}
                  src={brand}
                  alt={brand}
                  className="w-auto object-contain mx-2 mx-md-5"
                  height={50}
                />
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
