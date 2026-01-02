
export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  category: 'Hair & Styling' | 'Hair Removal' | 'Permanent Makeup' | 'Miscellaneous';
  extra?: string;
}

export const services: Service[] = [
  // Hair Removal (Threading & Waxing)
  {
    id: 'eyebrows-threading',
    name: "Eyebrows Threading",
    price: "$10",
    duration: "15 mins",
    description: "Precise ancient hair removal technique using cotton thread to shape and define your brows.",
    category: "Hair Removal"
  },
  {
    id: 'upper-lip-wax',
    name: "Upper Lip Wax",
    price: "$11",
    duration: "15 mins",
    description: "Gentle waxing to remove unwanted hair from the upper lip area for a smooth finish.",
    category: "Hair Removal"
  },
  {
    id: 'full-face',
    name: "Full Face",
    price: "$30",
    duration: "1 hr",
    description: "Comprehensive hair removal for the entire face, leaving skin radiant and smooth.",
    category: "Hair Removal"
  },
  {
    id: 'underarm',
    name: "Underarm",
    price: "$22",
    duration: "1 hr",
    description: "Effective hair removal for the underarm area, providing long-lasting smoothness.",
    category: "Hair Removal"
  },
  {
    id: 'half-arm',
    name: "Half Arm",
    price: "$25",
    duration: "35 mins",
    description: "Hair removal from either the wrist to elbow or elbow to shoulder.",
    category: "Hair Removal"
  },
  {
    id: 'full-arm',
    name: "Full Arm",
    price: "$31",
    duration: "1 hr",
    description: "Complete hair removal for the entire arm, resulting in soft, sleek skin.",
    category: "Hair Removal"
  },
  {
    id: 'half-legs',
    name: "Half Legs",
    price: "$30",
    duration: "1 hr",
    description: "Waxing service covering either the lower or upper leg area.",
    category: "Hair Removal"
  },
  {
    id: 'full-leg-wax',
    name: "Full Leg Wax",
    price: "$40",
    duration: "1 hr",
    description: "Full leg hair removal from ankle to thigh for completely smooth legs.",
    category: "Hair Removal"
  },
  {
    id: 'regular-bikini',
    name: "Regular Bikini",
    price: "$35",
    duration: "1 hr 15 mins",
    description: "Tidies the bikini line, removing hair visible outside of a standard swimsuit.",
    category: "Hair Removal"
  },
  {
    id: 'brazilian-wax',
    name: "Brazilian Wax",
    price: "$45",
    duration: "1 hr",
    description: "Complete hair removal from the front and back of the bikini area.",
    category: "Hair Removal"
  },
  {
    id: 'full-back',
    name: "Full Back",
    price: "$60",
    duration: "1 hr",
    description: "Removal of hair from the entire back, perfect for smooth skin during summer.",
    category: "Hair Removal"
  },

  // Hair & Styling
  {
    id: 'haircut-women',
    name: "Haircut Women",
    price: "$27",
    duration: "1 hr 30 mins",
    description: "Consultation, wash, and precision cut tailored to your face shape and texture.",
    category: "Hair & Styling"
  },
  {
    id: 'men-haircut',
    name: "Men Haircut",
    price: "$22",
    duration: "1 hr",
    description: "Classic or modern clipper and scissor cuts for a clean, sharp look.",
    category: "Hair & Styling"
  },
  {
    id: 'hair-colour',
    name: "Hair Colour",
    price: "from $45",
    duration: "1 hr",
    description: "Single-process color application to cover grays or change your look completely.",
    category: "Hair & Styling"
  },
  {
    id: 'highlights',
    name: "Highlights",
    price: "from $45",
    duration: "1 hr 5 mins",
    description: "Foil or balayage techniques to add dimension and brightness to your hair.",
    category: "Hair & Styling"
  },

  // Permanent Makeup
  {
    id: 'pm-eyebrows',
    name: "Permanent Makeup - Eyebrows",
    price: "$300",
    duration: "1 hr",
    description: "Semi-permanent tattooing technique to create fuller, perfectly shaped brows.",
    category: "Permanent Makeup"
  },
  {
    id: 'pm-eyebrows-refill',
    name: "Permanent Makeup Refill",
    price: "$199",
    duration: "1 hr",
    description: "Touch-up session to maintain color intensity and shape definition.",
    category: "Permanent Makeup"
  },

  // Misc
  {
    id: 'facial',
    name: "Facial",
    price: "from $35",
    duration: "30 mins - 1 hr",
    description: "Rejuvenating skin treatment including cleansing, exfoliation, and hydration.",
    category: "Miscellaneous"
  },
  {
    id: 'massage-therapy',
    name: "Massage Therapy (Women Only)",
    price: "from $50",
    duration: "30 mins - 1 hr",
    description: "Relaxing therapeutic massage to relieve tension and promote wellness.",
    category: "Miscellaneous"
  },
  {
    id: 'henna',
    name: "Henna",
    price: "from $10",
    duration: "30 mins",
    description: "Traditional natural dye body art, creating beautiful intricate patterns.",
    category: "Miscellaneous"
  },
  {
    id: 'ear-piercing',
    name: "Ear Piercing",
    price: "$40",
    duration: "30 mins",
    description: "Safe and sterile ear piercing service including starter studs.",
    category: "Miscellaneous"
  }
];