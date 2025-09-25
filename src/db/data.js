import categoryImage1 from "../assets/images/services/card-images/vehi-wrap-2.png";
import categoryImage2 from "../assets/images/services/card-images/acrylic-works.png";
import categoryImage3 from "../assets/images/services/card-images/printing-services.png";
import categoryImage4 from "../assets/images/services/card-images/signage-works.png";
import categoryImage5 from "../assets/images/services/card-images/wallpapers.jpg";
import categoryImage6 from "../assets/images/services/card-images/marketing.jpg";

import subCategoryImage1n1 from "../assets/images/sub-category-images/1.1.jpg";
import subCategoryImage1n2 from "../assets/images/sub-category-images/1.2.webp";
import subCategoryImage1n3 from "../assets/images/sub-category-images/1.3.webp";
import subCategoryImage1n4 from "../assets/images/sub-category-images/1.4.jpg";
import subCategoryImage1n5 from "../assets/images/sub-category-images/1.5.webp";
import subCategoryImage1n6 from "../assets/images/sub-category-images/1.6.jpg";
import subCategoryImage1n7 from "../assets/images/sub-category-images/1.7.jpg";
import subCategoryImage1n8 from "../assets/images/sub-category-images/1.8.jpg";
import subCategoryImage2n1 from "../assets/images/sub-category-images/2.1.jpg";
import subCategoryImage2n2 from "../assets/images/sub-category-images/2.2.jpg";
import subCategoryImage2n3 from "../assets/images/sub-category-images/2.3.jpg";
import subCategoryImage2n4 from "../assets/images/sub-category-images/2.4.jpg";
import subCategoryImage2n5 from "../assets/images/sub-category-images/2.5.webp";
import subCategoryImage2n6 from "../assets/images/sub-category-images/2.6.jpg";
import subCategoryImage2n7 from "../assets/images/sub-category-images/2.7.jpg";
import subCategoryImage2n8 from "../assets/images/sub-category-images/2.8.webp";
import subCategoryImage2n9 from "../assets/images/sub-category-images/2.9.webp";
import subCategoryImage3n1 from "../assets/images/sub-category-images/3.1.jpg";
import subCategoryImage3n2 from "../assets/images/sub-category-images/3.2.jpg";
import subCategoryImage3n3 from "../assets/images/sub-category-images/3.3.jpg";
import subCategoryImage3n4 from "../assets/images/sub-category-images/3.4.jpg";
import subCategoryImage3n5 from "../assets/images/sub-category-images/3.5.webp";
import subCategoryImage4n1 from "../assets/images/sub-category-images/4.1.jpg";
import subCategoryImage4n2 from "../assets/images/sub-category-images/4.2.jpg";
import subCategoryImage4n3 from "../assets/images/sub-category-images/4.3.jpg";
import subCategoryImage4n4 from "../assets/images/sub-category-images/4.4.jpg";
import subCategoryImage4n5 from "../assets/images/sub-category-images/4.5.jpg";
import subCategoryImage5n1 from "../assets/images/sub-category-images/5.1.jpg";
import subCategoryImage5n2 from "../assets/images/sub-category-images/5.2.jpg";
import subCategoryImage5n3 from "../assets/images/sub-category-images/5.3.jpg";
import subCategoryImage5n4 from "../assets/images/sub-category-images/5.4.jpg";
import subCategoryImage6n1 from "../assets/images/sub-category-images/6.1.jpg";
import subCategoryImage6n2 from "../assets/images/sub-category-images/6.2.jpg";
import subCategoryImage6n3 from "../assets/images/sub-category-images/6.3.jpg";
import subCategoryImage6n4 from "../assets/images/sub-category-images/6.4.jpg";

export const SERVICES_DATA_ALL = {
  categories: [
    {
      name: "Branding",
      image: categoryImage1,
      description:
        "Complete vehicle care including custom wraps, polishing, window tinting, stickers, and passing assistance — all in one place.",
      subcategories: [
        {
          name: "Car Branding",
          image: subCategoryImage1n1,
          desc: "High-quality car branding solutions with premium vinyl films from trusted brands, ensuring vibrant colors, durability, and a professional finish for maximum brand visibility.",
          materials: [
            { name: "Gloss Vinyl Film (3M / Avery / Oracal)", ratePerSqFt: 10 },
            { name: "Matte Vinyl Film", ratePerSqFt: 12 },
            { name: "Color-Shift / Chrome Vinyl", ratePerSqFt: 18 },
            { name: "Cast Vinyl (Premium Long-Lasting)", ratePerSqFt: 15 },
          ],
        },
        {
          name: "Car Wrapping",
          image: subCategoryImage1n2,
          desc: "Transform your car’s appearance with durable wrapping finishes that protect paintwork while giving a stylish new look with gloss, matte, or chrome effects for a striking road presence.",
          materials: [
            { name: "Gloss Vinyl Wrap", ratePerSqFt: 12 },
            { name: "Matte Vinyl Wrap", ratePerSqFt: 14 },
            { name: "Chrome / Special Effect Wrap", ratePerSqFt: 25 },
            { name: "Cast Premium Long-Life Wrap", ratePerSqFt: 18 },
          ],
        },
        {
          name: "Windows Tinting",
          image: subCategoryImage1n3,
          desc: "Premium window tinting that enhances privacy, reduces heat, and blocks UV rays. Choose from standard, ceramic, or metallic options for comfort, protection, and a sleek appearance.",
          materials: [
            { name: "Standard Car Window Tint Film", ratePerSqFt: 8 },
            { name: "Ceramic Tint Film", ratePerSqFt: 15 },
            { name: "Metallic / Privacy Tint", ratePerSqFt: 12 },
          ],
        },
        {
          name: "PPF - Paint Protection Film",
          image: subCategoryImage1n4,
          desc: "Advanced paint protection films safeguard your vehicle against scratches, stone chips, and weather damage while preserving the showroom shine with matte, gloss, or satin finishes.",
          materials: [
            { name: "Standard Paint Protection Film", ratePerSqFt: 25 },
            { name: "Matte / Satin Finish PPF", ratePerSqFt: 30 },
            { name: "Gloss / Transparent PPF", ratePerSqFt: 28 },
          ],
        },
        {
          name: "Peelable Paints",
          image: subCategoryImage1n5,
          desc: "Custom peelable paint coatings offer a temporary yet durable color change for your vehicle. Available in gloss, matte, or chrome finishes, giving flexibility and easy removal when desired.",
          materials: [
            { name: "Gloss Finish Peelable Paint", ratePerSqFt: 18 },
            { name: "Matte Finish Peelable Paint", ratePerSqFt: 20 },
            { name: "Chrome / Special Effect Peelable Paint", ratePerSqFt: 35 },
          ],
        },
        {
          name: "Fleet Branding",
          image: subCategoryImage1n7,
          desc: "Professional fleet branding services with custom decals, partial wraps, and reflective stickers. Perfect for maximizing brand exposure while maintaining a professional corporate identity.",
          materials: [
            { name: "Custom Decals & Graphics", ratePerSqFt: 12 },
            { name: "Partial Sticker (Doors / Hood / Roof)", ratePerSqFt: 14 },
            { name: "Reflective / Specialty Stickers", ratePerSqFt: 18 },
          ],
        },
        {
          name: "Ceramic Coating",
          image: subCategoryImage1n8,
          desc: "Protect your car’s paint with advanced ceramic coating that offers superior gloss, water repellence, and scratch resistance. Keeps your vehicle looking new for years with minimal upkeep.",
          materials: [
            { name: "Standard Ceramic Coating (2 Layers)", ratePerUnit: 1200 },
            { name: "Premium Ceramic Coating (5 Layers)", ratePerUnit: 2000 },
            { name: "Graphene-Enhanced Ceramic Coating", ratePerUnit: 2500 },
          ],
        },
        {
          name: "RTA Approvals / Passing",
          image: subCategoryImage1n6,
          desc: "Full RTA approval and passing support for vehicle modifications, color changes, and registrations. Hassle-free service ensuring compliance with UAE regulations for a smooth experience.",
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
          name: "Interior Designing",
          image: subCategoryImage2n5,
          desc: "Complete interior design services for residential and commercial projects, blending modern aesthetics with functionality to create comfortable, elegant, and inspiring spaces.",
          materials: [
            { name: "Luxury Vinyl Tiles (LVT)", ratePerSqFt: 15 },
            { name: "Fabric Wall Panels", ratePerSqFt: 25 },
            { name: "Premium Decorative Paint", ratePerSqFt: 18 },
          ],
        },
        {
          name: "Commercial Fit-outs",
          image: subCategoryImage2n6,
          desc: "Professional turnkey fit-out solutions for offices, retail stores, and restaurants, designed to deliver functional layouts, stylish interiors, and durable finishes for businesses.",
          materials: [
            { name: "Acoustic Ceiling Tiles", ratePerSqFt: 20 },
            { name: "Modular Glass Partitions", ratePerSqFt: 35 },
            { name: "Engineered Wood Flooring", ratePerSqFt: 30 },
          ],
        },
        {
          name: "Custom Carpentry",
          image: subCategoryImage2n7,
          desc: "Tailor-made carpentry works including wardrobes, shelving, cabinets, and wooden décor crafted with precision, offering both practicality and premium aesthetics for interiors.",
          materials: [
            { name: "Solid Wood Cabinets", ratePerSqFt: 45 },
            { name: "Laminate Finish Wardrobes", ratePerSqFt: 28 },
            { name: "Custom MDF Furniture", ratePerSqFt: 22 },
          ],
        },
        {
          name: "False Ceiling & Light Partitions",
          image: subCategoryImage2n8,
          desc: "Modern false ceilings and gypsum light partitions designed for stylish interiors, enhancing ambiance, acoustic comfort, and lighting for residential and commercial environments.",
          materials: [
            { name: "Gypsum Board Ceiling", ratePerSqFt: 15 },
            { name: "POP Decorative Ceiling", ratePerSqFt: 18 },
            { name: "Acoustic Gypsum Panels", ratePerSqFt: 22 },
          ],
        },
        {
          name: "Wood Flooring Works",
          image: subCategoryImage2n9,
          desc: "Premium wood and laminate flooring services that enhance spaces with warmth and natural elegance, offering long-lasting durability for both modern and classic interiors.",
          materials: [
            { name: "Engineered Wood Flooring", ratePerSqFt: 35 },
            { name: "HDF Laminate Flooring", ratePerSqFt: 20 },
            { name: "Solid Hardwood Flooring", ratePerSqFt: 50 },
          ],
        },
        {
          name: "Wall Art",
          image: subCategoryImage5n3,
          desc: "Creative wall art options including canvas, acrylic, and framed prints, crafted to add character, sophistication, and a striking visual appeal to residential and commercial spaces.",
          materials: [
            { name: "Canvas Art Prints", ratePerSqFt: 18 },
            { name: "Acrylic Glass Panels", ratePerSqFt: 25 },
            { name: "Framed Premium Posters", ratePerSqFt: 20 },
          ],
        },
        {
          name: "Custom Printed Wallpaper",
          image: subCategoryImage5n2,
          desc: "Personalized wallpapers with high-resolution digital printing, available in matte or textured finishes, bringing unique patterns, images, or branding to walls with vibrant impact.",
          materials: [
            { name: "Matte Finish Digital Wallpaper", ratePerSqFt: 12 },
            { name: "Textured Vinyl Wallpaper", ratePerSqFt: 15 },
            { name: "Eco-Solvent Printed Wallpaper", ratePerSqFt: 18 },
          ],
        },
        {
          name: "Regular Wallpaper",
          image: subCategoryImage5n4,
          desc: "Elegant and stylish wall coverings available in matte, textured, and vinyl finishes. Perfect for homes, offices, and commercial spaces to enhance interiors with a modern touch.",
          materials: [
            { name: "Matte Finish Digital Wallpaper", ratePerSqFt: 12 },
            { name: "Textured Vinyl Wallpaper", ratePerSqFt: 15 },
            { name: "Eco-Solvent Printed Wallpaper", ratePerSqFt: 18 },
          ],
        },
      ],
    },

    {
      name: "Digital Printing",
      image: categoryImage3,
      description:
        "Offering complete digital and printing solutions, including design, branding, marketing materials, and high-quality prints to meet all business needs.",
      subcategories: [
        {
          name: "Indoor / Outdoor Digital Printing",
          image: subCategoryImage3n1,
          desc: "Premium indoor and outdoor digital printing solutions for posters, banners, and signage. Durable, high-resolution prints with vibrant colors for marketing and branding needs.",
          materials: [
            { name: "Standard Photo Paper 200gsm", ratePerSqFt: 5 },
            { name: "Canvas Print (Matte)", ratePerSqFt: 10 },
            { name: "Gloss Photo Paper 250gsm", ratePerSqFt: 7 },
          ],
        },
        {
          name: "Large Format Printing",
          image: subCategoryImage3n2,
          desc: "Eye-catching large format prints for banners, billboards, and displays. Durable outdoor materials with vivid colors designed to maximize visibility and brand impact.",
          materials: [
            { name: "PVC Banner Material", ratePerSqFt: 12 },
            { name: "Mesh Banner", ratePerSqFt: 15 },
            { name: "Backlit Film for Light Boxes", ratePerSqFt: 20 },
          ],
        },
        {
          name: "Vehicle Graphics",
          image: subCategoryImage3n5,
          desc: "Custom vehicle graphics and wraps for branding and advertising. UV-resistant, durable prints with vibrant colors to make your cars, vans, and fleets stand out on the road.",
          materials: [
            { name: "Vinyl Vehicle Sticker (Standard)", ratePerSqFt: 10 },
            { name: "Reflective Vehicle Graphics", ratePerSqFt: 15 },
            { name: "Perforated Window Film", ratePerSqFt: 12 },
          ],
        },
        {
          name: "UV Printing",
          image: subCategoryImage3n3,
          desc: "Advanced UV printing technology for acrylic, metal, and foam boards. Offers sharp, fade-resistant prints with direct-to-surface durability and a premium finish.",
          materials: [
            { name: "Acrylic UV Print", ratePerSqFt: 20 },
            { name: "Foam Board UV Print", ratePerSqFt: 15 },
            { name: "Metal Sheet UV Print", ratePerSqFt: 25 },
          ],
        },
        {
          name: "Digital Fabric Printing",
          image: subCategoryImage3n4,
          desc: "High-quality fabric printing for flags, soft signage, and displays. Durable, vibrant, and washable prints designed for exhibitions, retail branding, and promotional use.",
          materials: [
            { name: "Polyester Fabric Print", ratePerSqFt: 12 },
            { name: "Satin Fabric Print", ratePerSqFt: 15 },
            { name: "Backlit Fabric Print", ratePerSqFt: 18 },
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
          desc: "Durable and weather-resistant outdoor signage designed to boost visibility. Ideal for shopfronts, building facades, and high-traffic areas with lasting impact.",
          materials: [
            { name: "Aluminum Composite Panel (ACP)", ratePerSqFt: 18 },
            { name: "Weatherproof PVC Board", ratePerSqFt: 12 },
            { name: "LED Channel Letters", ratePerLetter: 40 },
          ],
        },
        {
          name: "Indoor Signage",
          image: subCategoryImage4n2,
          desc: "Custom indoor signage for offices, retail stores, and events. Delivers a clean, professional look to guide, inform, and enhance branding within interior spaces.",
          materials: [
            { name: "Acrylic Sheet Sign", ratePerSqFt: 20 },
            { name: "Foam Board Sign", ratePerSqFt: 8 },
            { name: "Vinyl Cut Lettering", ratePerSqFt: 10 },
          ],
        },
        {
          name: "Billboards",
          image: subCategoryImage4n5,
          desc: "High-visibility billboard solutions for impactful outdoor advertising. Perfect for highways, rooftops, and cityscapes with large-scale brand exposure.",
          materials: [
            { name: "Flex Billboard", ratePerSqFt: 12 },
            { name: "Vinyl Billboard Print", ratePerSqFt: 14 },
            { name: "3D / Custom Structure Billboard", ratePerSqFt: 25 },
          ],
        },
        {
          name: "Safety Signs",
          image: subCategoryImage4n3,
          desc: "Regulation-compliant safety signage for workplaces, factories, and public spaces. Clear visuals ensure safety awareness and compliance with standards.",
          materials: [
            { name: "Reflective Safety Sign Board", ratePerSqFt: 18 },
            { name: "Glow-in-the-Dark Safety Sign", ratePerSqFt: 22 },
            { name: "Acrylic Safety Sign Plate", ratePerSqFt: 15 },
          ],
        },
        {
          name: "Directional Signs",
          image: subCategoryImage4n4,
          desc: "Wayfinding and directional signage that improves navigation in offices, malls, and public spaces. Designed to be clear, readable, and aesthetically aligned with branding.",
          materials: [
            { name: "Acrylic Directional Board", ratePerSqFt: 18 },
            { name: "Foam Board Directional Sign", ratePerSqFt: 10 },
            { name: "Vinyl Wayfinding Sticker", ratePerSqFt: 8 },
          ],
        },
      ],
    },

    {
      name: "Digital Solutions",
      image: categoryImage6,
      description:
        "Advertising & Marketing services driving brand growth through creative campaigns, digital strategy, and targeted outreach to engage and convert audiences",
      subcategories: [
        {
          name: "Web Development",
          image: subCategoryImage6n1,
          desc: "Custom websites designed for performance, responsiveness, and SEO. From corporate sites to e-commerce platforms, built to enhance your online presence.",
        },
        {
          name: "Digital Marketing",
          image: subCategoryImage6n2,
          desc: "Comprehensive digital marketing solutions including SEO, PPC, email campaigns, and online ads to maximize reach, drive traffic, and boost conversions.",
        },
        {
          name: "Social Media Handling",
          image: subCategoryImage6n3,
          desc: "End-to-end social media management for platforms like Instagram, Facebook, and LinkedIn. Content creation, posting, and engagement to grow your brand online.",
        },
        {
          name: "Mobile App Development",
          image: subCategoryImage6n4,
          desc: "Innovative mobile app solutions for iOS and Android. Scalable, user-friendly apps tailored to your business needs with modern design and smooth performance.",
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
import bPartner7 from "../assets/images/branding-partners/Oracal.png";
import bPartner8 from "../assets/images/branding-partners/Orajet.png";
import bPartner9 from "../assets/images/branding-partners/Suntek.png";
import bPartner10 from "../assets/images/branding-partners/Avery_Dennison_Logo.png";
import bPartner11 from "../assets/images/branding-partners/hexis.png";
import bPartner12 from "../assets/images/branding-partners/Llumar-Logo.png";
import bPartner13 from "../assets/images/branding-partners/xpel-logo.png";

export const PRODUCTION_PARTNERS = [
  bPartner1,
  bPartner2,
  bPartner3,
  bPartner4,
  bPartner5,
  bPartner7,
  bPartner8,
  bPartner9,
  bPartner10,
  bPartner11,
  bPartner12,
  bPartner13,
];
