import img1 from '../assets/images/services/card-images/vehicle-wrapping.png'
import img2 from '../assets/images/services/card-images/acrylic-works.png'
import img3 from '../assets/images/services/card-images/printing-services.png'
import img4 from '../assets/images/services/card-images/signage-works.png'
import img5 from '../assets/images/services/card-images/wallpapers.jpg'
import img6 from '../assets/images/services/card-images/service-6.png'

export const SERVICES = [
    {
        title: "Vehicle Wrapping",
        image: img1,
        description: "Transform and protect your vehicle with custom-designed wraps that stand out on the road."
    },
    {
        title: "Acrylic Works",
        image: img2,
        description: "High-quality acrylic displays, signage, and installations tailored for modern aesthetics."
    },
    {
        title: "Printing Services",
        image: img3,
        description: "From business cards to banners, we deliver vibrant, durable, and precise print solutions."
    },
    {
        title: "Signage Works",
        image: img4,
        description: "Custom indoor and outdoor signage crafted to boost visibility and brand identity."
    },
    {
        title: "Wallpaper Works",
        image: img5,
        description: "Stylish, high-resolution wallpapers designed to enhance interiors with a unique touch."
    },
    {
        title: "Service 6",
        image: img6,
        description: "Creative solutions tailored to meet your branding and display requirements."
    }
];


export const SERVICES_DATA_ALL= {
    categories: [
        {
            name: "Vehicle Wrapping",
            subcategories: [
                {
                    name: "Full Wrapping",
                    materials: [
                        { name: "Gloss Vinyl Film (3M / Avery / Oracal)", ratePerSqFt: 10 },
                        { name: "Matte Vinyl Film", ratePerSqFt: 12 },
                        { name: "Color-Shift / Chrome Vinyl", ratePerSqFt: 18 },
                        { name: "Cast Vinyl (premium long-lasting)", ratePerSqFt: 15 },
                    ],
                },
                {
                    name: "Polishing",
                    materials: [
                        { name: "Two-step Compound + Polish", ratePerUnit: 50 },
                        { name: "Ceramic Polish", ratePerUnit: 80 },
                        { name: "Hybrid Sealant", ratePerUnit: 40 },
                    ],
                },
                {
                    name: "Tinted",
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
            subcategories: [
                {
                    name: "Display Cases / Acrylic Cabinets",
                    materials: [
                        { name: "Clear Cast Acrylic Sheet 5mm", ratePerSqFt: 20 },
                        { name: "Colored / Tinted Acrylic 5mm", ratePerSqFt: 25 },
                        { name: "Mirror Acrylic", ratePerSqFt: 30 },
                    ],
                },
                {
                    name: "Lighting Fixtures / Acrylic Lighting Panels",
                    materials: [
                        { name: "Diffuse Acrylic 3mm", ratePerSqFt: 15 },
                        { name: "Prismatic Acrylic", ratePerSqFt: 20 },
                    ],
                },
            ],
        },

        {
            name: "Printing Services",
            subcategories: [
                {
                    name: "Digital Printing",
                    materials: [
                        { name: "Standard Photo Paper 200gsm", ratePerSqFt: 5 },
                        { name: "Canvas Print (matte)", ratePerSqFt: 10 },
                        { name: "Gloss Photo Paper 250gsm", ratePerSqFt: 7 },
                    ],
                },
                {
                    name: "Large Format Printing",
                    materials: [
                        { name: "PVC Banner Material", ratePerSqFt: 12 },
                        { name: "Mesh Banner", ratePerSqFt: 15 },
                        { name: "Backlit Film for Light Boxes", ratePerSqFt: 20 },
                    ],
                },
                {
                    name: "Business Card Printing",
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
            subcategories: [
                {
                    name: "Outdoor Signage",
                    materials: [
                        { name: "Aluminum Composite Panel (ACP)", ratePerSqFt: 18 },
                        { name: "Weatherproof PVC Board", ratePerSqFt: 12 },
                        { name: "LED Channel Letters", ratePerLetter: 40 },
                    ],
                },
                {
                    name: "Indoor Signage",
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
            subcategories: [
                {
                    name: "Standard Wallpaper",
                    materials: [
                        { name: "Vinyl Wallpaper Rolls", ratePerSqFt: 5 },
                        { name: "Peel-and-Stick Wallpaper", ratePerSqFt: 8 },
                    ],
                },
                {
                    name: "Custom Printed Wallpaper",
                    materials: [
                        { name: "Custom Digital Print on Matte Finish", ratePerSqFt: 12 },
                        { name: "Custom Print on Textured Surface", ratePerSqFt: 15 },
                    ],
                },
            ],
        },
    ],

    serviceMethods: [
        { name: "Home Service" },
        { name: "Company Bulk" },
        { name: "Mobile Service" },
        { name: "Vehicle Passing", applicableTo: ["Vehicle Wrapping"] },
    ]

};
