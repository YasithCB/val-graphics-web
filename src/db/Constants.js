import img1 from "../assets/images/services/card-images/vehicle-wrapping.png";
import img2 from "../assets/images/services/card-images/acrylic-works.png";
import img3 from "../assets/images/services/card-images/printing-services.png";
import img4 from "../assets/images/services/card-images/signage-works.png";
import img5 from "../assets/images/services/card-images/wallpapers.jpg";
import img6 from "../assets/images/services/card-images/service-6.png";

export const SERVICES = [
  {
    title: "Vehicle Wrapping",
    image: img1,
    description:
      "Transform and protect your vehicle with custom-designed wraps that stand out on the road.",
  },
  {
    title: "Acrylic Works",
    image: img2,
    description:
      "High-quality acrylic displays, signage, and installations tailored for modern aesthetics.",
  },
  {
    title: "Printing Services",
    image: img3,
    description:
      "From business cards to banners, we deliver vibrant, durable, and precise print solutions.",
  },
  {
    title: "Signage Works",
    image: img4,
    description:
      "Custom indoor and outdoor signage crafted to boost visibility and brand identity.",
  },
  {
    title: "Wallpaper Works",
    image: img5,
    description:
      "Stylish, high-resolution wallpapers designed to enhance interiors with a unique touch.",
  },
  {
    title: "Marketing",
    image: img6,
    description:
      "Advertising & Marketing services driving brand growth through creative campaigns, digital strategy, and targeted outreach to engage and convert audiences",
  },
];

import categoryImage1 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage2 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage3 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage4 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage5 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage6 from "../assets/images/services/card-images/vehi-wrap-2.png";

import subCategoryImage1n1 from "../assets/images/sub-category-images/1.1.jpg";
import subCategoryImage1n2 from "../assets/images/sub-category-images/1.2.jpg";
import subCategoryImage1n3 from "../assets/images/sub-category-images/1.3.jpg";
import subCategoryImage2n1 from "../assets/images/sub-category-images/2.1.jpg";
import subCategoryImage2n2 from "../assets/images/sub-category-images/2.2.jpg";
import subCategoryImage2n3 from "../assets/images/sub-category-images/2.3.jpg";
import subCategoryImage2n4 from "../assets/images/sub-category-images/2.4.jpg";
import subCategoryImage3n1 from "../assets/images/sub-category-images/3.1.jpg";
import subCategoryImage3n2 from "../assets/images/sub-category-images/3.2.jpg";
import subCategoryImage3n3 from "../assets/images/sub-category-images/3.3.jpg";
import subCategoryImage4n1 from "../assets/images/sub-category-images/4.1.jpg";
import subCategoryImage4n2 from "../assets/images/sub-category-images/4.2.jpg";
import subCategoryImage5n1 from "../assets/images/sub-category-images/5.1.jpg";
import subCategoryImage5n2 from "../assets/images/sub-category-images/5.2.jpg";
import subCategoryImage6n1 from "../assets/images/sub-category-images/6.1.jpg";
import subCategoryImage6n2 from "../assets/images/sub-category-images/6.2.jpg";
import subCategoryImage6n3 from "../assets/images/sub-category-images/6.3.jpg";

export const SERVICES_DATA_ALL = {
  categories: [
    {
      name: "Vehicle Wrapping",
      image: categoryImage1,
      description:
        "Transform and protect your vehicle with custom-designed wraps that stand out on the road.",
      subcategories: [
        {
          name: "Full Wrapping",
          image: subCategoryImage1n1,
          materials: [
            { name: "Gloss Vinyl Film (3M / Avery / Oracal)", ratePerSqFt: 10 },
            { name: "Matte Vinyl Film", ratePerSqFt: 12 },
            { name: "Color-Shift / Chrome Vinyl", ratePerSqFt: 18 },
            { name: "Cast Vinyl (premium long-lasting)", ratePerSqFt: 15 },
          ],
        },
        {
          name: "Polishing",
          image: subCategoryImage1n2,
          materials: [
            { name: "Two-step Compound + Polish", ratePerUnit: 50 },
            { name: "Ceramic Polish", ratePerUnit: 80 },
            { name: "Hybrid Sealant", ratePerUnit: 40 },
          ],
        },
        {
          name: "Tinted",
          image: subCategoryImage1n3,
          materials: [
            { name: "Standard Car Window Tint Film", ratePerSqFt: 8 },
            { name: "Ceramic Tint Film", ratePerSqFt: 15 },
            { name: "Metallic / Privacy Tint", ratePerSqFt: 12 },
          ],
        },
      ],
    },

    {
      name: "Acrylic Works",
      image: categoryImage2,
      description:
        "High-quality acrylic displays, signage, and installations tailored for modern aesthetics.",
      subcategories: [
        {
          name: "Acrylic Scooter Boards",
          image: subCategoryImage2n1,
          materials: [
            { name: "Clear Cast Acrylic Sheet 5mm", ratePerSqFt: 20 },
            { name: "Colored / Tinted Acrylic 5mm", ratePerSqFt: 25 },
            { name: "Mirror Acrylic", ratePerSqFt: 30 },
          ],
        },
        {
          name: "Acrylic Box",
          image: subCategoryImage2n2,
          materials: [
            { name: "Diffuse Acrylic 3mm", ratePerSqFt: 15 },
            { name: "Prismatic Acrylic", ratePerSqFt: 20 },
          ],
        },
        {
          name: "Acrylic NameBoards",
          image: subCategoryImage2n3,
          materials: [
            { name: "Diffuse Acrylic 3mm", ratePerSqFt: 15 },
            { name: "Prismatic Acrylic", ratePerSqFt: 20 },
          ],
        },
        {
          name: "Acrylic Cutouts",
          image: subCategoryImage2n4,
          materials: [
            { name: "Diffuse Acrylic 3mm", ratePerSqFt: 15 },
            { name: "Prismatic Acrylic", ratePerSqFt: 20 },
          ],
        },
      ],
    },

    {
      name: "Printing Services",
      image: categoryImage3,
      description:
        "From business cards to banners, we deliver vibrant, durable, and precise print solutions.",
      subcategories: [
        {
          name: "Digital Printing",
          image: subCategoryImage3n1,
          materials: [
            { name: "Standard Photo Paper 200gsm", ratePerSqFt: 5 },
            { name: "Canvas Print (matte)", ratePerSqFt: 10 },
            { name: "Gloss Photo Paper 250gsm", ratePerSqFt: 7 },
          ],
        },
        {
          name: "Large Format Printing",
          image: subCategoryImage3n2,
          materials: [
            { name: "PVC Banner Material", ratePerSqFt: 12 },
            { name: "Mesh Banner", ratePerSqFt: 15 },
            { name: "Backlit Film for Light Boxes", ratePerSqFt: 20 },
          ],
        },
        {
          name: "Business Card Printing",
          image: subCategoryImage3n3,
          materials: [
            { name: "Standard 300gsm Card Stock", ratePer100: 15 },
            { name: "Premium 400gsm Matte", ratePer100: 25 },
            { name: "Spot UV Finish", additionalPer100: 12 },
          ],
        },
      ],
    },

    {
      name: "Signage Works",
      image: categoryImage4,
      description:
        "Custom indoor and outdoor signage crafted to boost visibility and brand identity.",
      subcategories: [
        {
          name: "Outdoor Signage",
          image: subCategoryImage4n1,
          materials: [
            { name: "Aluminum Composite Panel (ACP)", ratePerSqFt: 18 },
            { name: "Weatherproof PVC Board", ratePerSqFt: 12 },
            { name: "LED Channel Letters", ratePerLetter: 40 },
          ],
        },
        {
          name: "Indoor Signage",
          image: subCategoryImage4n2,
          materials: [
            { name: "Acrylic Sheet Sign", ratePerSqFt: 20 },
            { name: "Foam Board Sign", ratePerSqFt: 8 },
            { name: "Vinyl Cut Lettering", ratePerSqFt: 10 },
          ],
        },
      ],
    },

    {
      name: "Wallpaper Works",
      image: categoryImage5,
      description:
        "Stylish, high-resolution wallpapers designed to enhance interiors with a unique touch.",
      subcategories: [
        {
          name: "Standard Wallpaper",
          image: subCategoryImage5n1,
          materials: [
            { name: "Vinyl Wallpaper Rolls", ratePerSqFt: 5 },
            { name: "Peel-and-Stick Wallpaper", ratePerSqFt: 8 },
          ],
        },
        {
          name: "Custom Printed Wallpaper",
          image: subCategoryImage5n2,
          materials: [
            { name: "Custom Digital Print on Matte Finish", ratePerSqFt: 12 },
            { name: "Custom Print on Textured Surface", ratePerSqFt: 15 },
          ],
        },
      ],
    },
    {
      name: "Advertising & Marketing",
      image: categoryImage6,
      description:
        "Advertising & Marketing services driving brand growth through creative campaigns, digital strategy, and targeted outreach to engage and convert audiences",
      subcategories: [
        {
          name: "Digital Marketing",
          image: subCategoryImage6n1,
        },
        {
          name: "Web Development",
          image: subCategoryImage6n2,
        },
        {
          name: "Social Media Handling",
          image: subCategoryImage6n3,
        },
      ],
    },
  ],

  serviceMethods: [
    { name: "Home Service" },
    { name: "Company Bulk" },
    { name: "Mobile Service" },
    { name: "Vehicle Passing", applicableTo: ["Vehicle Wrapping"] },
  ],
};
