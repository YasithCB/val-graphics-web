// src/utils/aosConfig.js
export const AOS_CONFIG = {
  global: {
    duration: 700,
    easing: "ease-in-out",
    once: true,
    offset: 10,
  },
  // Straight directions
  FADE_UP: {
    "data-aos": "fade-up",
    "data-aos-delay": "0",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in-out",
  },
  FADE_DOWN: {
    "data-aos": "fade-down",
    "data-aos-delay": "200",
    "data-aos-duration": "1200",
    "data-aos-easing": "ease-in",
  },
  FADE_LEFT: {
    "data-aos": "fade-left",
    "data-aos-delay": "150",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-out",
  },
  FADE_RIGHT: {
    "data-aos": "fade-right",
    "data-aos-delay": "150",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-out",
  },

  // Corner directions
  FADE_UP_RIGHT: {
    "data-aos": "fade-up-right",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in-out",
  },
  FADE_UP_LEFT: {
    "data-aos": "fade-up-left",
    "data-aos-delay": "100",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in-out",
  },
  FADE_DOWN_RIGHT: {
    "data-aos": "fade-down-right",
    "data-aos-delay": "200",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in-out",
  },
  FADE_DOWN_LEFT: {
    "data-aos": "fade-down-left",
    "data-aos-delay": "200",
    "data-aos-duration": "1000",
    "data-aos-easing": "ease-in-out",
  },

  // Already added extras
  ZOOM_IN: {
    "data-aos": "zoom-in",
    "data-aos-delay": "100",
    "data-aos-duration": "800",
    "data-aos-easing": "ease-in-out",
  },
  FLIP_LEFT: {
    "data-aos": "flip-left",
    "data-aos-delay": "100",
    "data-aos-duration": "700",
    "data-aos-easing": "ease-in-out",
  },
};
