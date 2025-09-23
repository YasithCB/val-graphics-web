import categoryImage1 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage2 from "../assets/images/services/card-images/acrylic-works.png";
import categoryImage3 from "../assets/images/services/card-images/printing-services.png";
import categoryImage4 from "../assets/images/services/card-images/signage-works.png";
import categoryImage5 from "../assets/images/services/card-images/wallpapers.jpg";
import categoryImage6 from "../assets/images/services/card-images/marketing.jpg";

import subCategoryImage1n1 from "../assets/images/sub-category-images/1.1.jpg";
import subCategoryImage1n2 from "../assets/images/sub-category-images/1.2.jpg";
import subCategoryImage1n3 from "../assets/images/sub-category-images/1.3.jpg";
import subCategoryImage1n4 from "../assets/images/sub-category-images/1.4.jpg";
import subCategoryImage1n5 from "../assets/images/sub-category-images/1.5.jpg";
import subCategoryImage1n6 from "../assets/images/sub-category-images/1.6.jpg";
import subCategoryImage1n7 from "../assets/images/sub-category-images/1.7.jpg";
import subCategoryImage2n1 from "../assets/images/sub-category-images/2.1.jpg";
import subCategoryImage2n2 from "../assets/images/sub-category-images/2.2.jpg";
import subCategoryImage2n3 from "../assets/images/sub-category-images/2.3.jpg";
import subCategoryImage2n4 from "../assets/images/sub-category-images/2.4.jpg";
import subCategoryImage3n1 from "../assets/images/sub-category-images/3.1.jpg";
import subCategoryImage3n2 from "../assets/images/sub-category-images/3.2.jpg";
import subCategoryImage3n3 from "../assets/images/sub-category-images/3.3.jpg";
import subCategoryImage3n4 from "../assets/images/sub-category-images/3.4.jpg";
import subCategoryImage4n1 from "../assets/images/sub-category-images/4.1.jpg";
import subCategoryImage4n2 from "../assets/images/sub-category-images/4.2.jpg";
import subCategoryImage4n3 from "../assets/images/sub-category-images/4.3.jpg";
import subCategoryImage4n4 from "../assets/images/sub-category-images/4.4.jpg";
import subCategoryImage4n5 from "../assets/images/sub-category-images/4.5.jpg";
import subCategoryImage5n1 from "../assets/images/sub-category-images/5.1.jpg";
import subCategoryImage5n2 from "../assets/images/sub-category-images/5.2.jpg";
import subCategoryImage5n3 from "../assets/images/sub-category-images/5.3.jpg";
import subCategoryImage6n1 from "../assets/images/sub-category-images/6.1.jpg";
import subCategoryImage6n2 from "../assets/images/sub-category-images/6.2.jpg";
import subCategoryImage6n3 from "../assets/images/sub-category-images/6.3.jpg";
import subCategoryImage6n4 from "../assets/images/sub-category-images/6.4.jpg";

export const SERVICES_DATA_ALL = {
  categories: [
    {
      name: "Vehicle Wrapping & Branding",
      image: categoryImage1,
      description:
        "Complete vehicle care including custom wraps, polishing, window tinting, stickers, and passing assistance — all in one place.",
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
          name: "Tint",
          image: subCategoryImage1n3,
          materials: [
            { name: "Standard Car Window Tint Film", ratePerSqFt: 8 },
            { name: "Ceramic Tint Film", ratePerSqFt: 15 },
            { name: "Metallic / Privacy Tint", ratePerSqFt: 12 },
          ],
        },
        {
          name: "PPF",
          image: subCategoryImage1n4,
          materials: [
            { name: "Standard Paint Protection Film", ratePerSqFt: 25 },
            { name: "Matte / Satin Finish PPF", ratePerSqFt: 30 },
            { name: "Gloss / Transparent PPF", ratePerSqFt: 28 },
          ],
        },
        {
          name: "Car Color Change",
          image: subCategoryImage1n5,
          materials: [
            { name: "Gloss Finish Wrap", ratePerSqFt: 18 },
            { name: "Matte Finish Wrap", ratePerSqFt: 20 },
            { name: "Chrome / Special Effect Wrap", ratePerSqFt: 35 },
          ],
        },
        {
          name: "Car Sticker",
          image: subCategoryImage1n7,
          materials: [
            { name: "Custom Decals & Graphics", ratePerSqFt: 12 },
            { name: "Partial Sticker (Doors / Hood / Roof)", ratePerSqFt: 14 },
            { name: "Reflective / Specialty Stickers", ratePerSqFt: 18 },
          ],
        },
        {
          name: "RTA Approvals / Passing",
          image: subCategoryImage1n6,
          materials: [
            { name: "Color Change Approval", rate: 400 },
            { name: "Full Passing & Registration Support", rate: 600 },
          ],
        },
      ],
    },

    {
      name: "Interior Fit Outs",
      image: categoryImage2,
      description:
        "Creative acrylic and decoration solutions that enhance interiors, signage, and displays with elegance, durability, and a modern professional finish.",
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
        {
          name: "Wall Art",
          image: subCategoryImage5n3,
          materials: [
            { name: "Canvas Wall Art Print", ratePerSqFt: 18 },
            { name: "Acrylic Wall Art Panel", ratePerSqFt: 25 },
            { name: "Framed Poster Wall Art", ratePerSqFt: 20 },
          ],
        },
      ],
    },

    {
      name: "Digital Print Services",
      image: categoryImage3,
      description:
        "Offering complete digital and printing solutions, including design, branding, marketing materials, and high-quality prints to meet all business needs.",
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
        {
          name: "UV Printing",
          image: subCategoryImage3n4,
          materials: [
            { name: "Acrylic UV Print", ratePerSqFt: 20 },
            { name: "Foam Board UV Print", ratePerSqFt: 15 },
            { name: "Metal Sheet UV Print", ratePerSqFt: 25 },
          ],
        },
      ],
    },

    {
      name: "Billboard & Signage",
      image: categoryImage4,
      description:
        "We provide complete board solutions, including design, printing, fabrication, and installation of display boards, branding boards, and custom creations.",
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
        {
          name: "Billboards",
          image: subCategoryImage4n5,
          materials: [
            { name: "Flex Billboard", ratePerSqFt: 12 },
            { name: "Vinyl Billboard Print", ratePerSqFt: 14 },
            { name: "3D / Custom Structure Billboard", ratePerSqFt: 25 },
          ],
        },
        {
          name: "Safety Signs",
          image: subCategoryImage4n3,
          materials: [
            { name: "Reflective Safety Sign Board", ratePerSqFt: 18 },
            { name: "Glow-in-the-Dark Safety Sign", ratePerSqFt: 22 },
            { name: "Acrylic Safety Sign Plate", ratePerSqFt: 15 },
          ],
        },
        {
          name: "Directional Signs",
          image: subCategoryImage4n4,
          materials: [
            { name: "Acrylic Directional Board", ratePerSqFt: 18 },
            { name: "Foam Board Directional Sign", ratePerSqFt: 10 },
            { name: "Vinyl Wayfinding Sticker", ratePerSqFt: 8 },
          ],
        },
      ],
    },

    {
      name: "Branding & Marketing",
      image: categoryImage6,
      description:
        "Advertising & Marketing services driving brand growth through creative campaigns, digital strategy, and targeted outreach to engage and convert audiences",
      subcategories: [
        {
          name: "Web Development",
          image: subCategoryImage6n1,
        },
        {
          name: "Digital Marketing",
          image: subCategoryImage6n2,
        },
        {
          name: "Social Media Handling",
          image: subCategoryImage6n3,
        },
        {
          name: "Mobile App Development",
          image: subCategoryImage6n4,
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

import bPartner1 from "../assets/images/branding-partners/3m.png";
import bPartner2 from "../assets/images/branding-partners/arlon-logo.png";
import bPartner3 from "../assets/images/branding-partners/k-jet.png";
import bPartner4 from "../assets/images/branding-partners/mactac.png";
import bPartner5 from "../assets/images/branding-partners/metamark-logo.png";
import bPartner6 from "../assets/images/branding-partners/nar.png";
import bPartner7 from "../assets/images/branding-partners/Oracal.png";
import bPartner8 from "../assets/images/branding-partners/Orajet.png";
import bPartner9 from "../assets/images/branding-partners/Suntek.png";

export const PRODUCTION_PARTNERS = [
  bPartner1,
  bPartner2,
  bPartner3,
  bPartner4,
  bPartner5,
  bPartner6,
  bPartner7,
  bPartner8,
  bPartner9,
];
