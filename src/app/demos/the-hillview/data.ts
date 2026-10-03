export const hillview = {
  name: "The Hillview",
  shortName: "TH",
  location: "Arunachal Pradesh, India",
  category: "Boutique Mountain Retreat",
  tagline: "Stay above the clouds.",
  description:
    "A private mountain retreat surrounded by pine forests, quiet valleys, and the slower rhythm of the hills.",
  address: "Upper Hills, Arunachal Pradesh, India",
  phone: "+91 98765 43210",
  email: "stay@thehillview.in",
};

export const navigation = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Dining", href: "#dining" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
];

export const heroImage =
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2600&q=90";

/* =========================================================
   ROOMS
========================================================= */

export const rooms = [
  {
    number: "01",
    name: "The Forest Room",
    type: "King Room",
    description:
      "A warm and intimate room overlooking the surrounding pine forest, designed for quiet mornings and slow evenings.",
    guests: "2 Guests",
    size: "420 sq ft",
    bed: "King Bed",
    price: "₹18,500",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=90",
    features: [
      "Forest View",
      "Private Balcony",
      "Breakfast Included",
    ],
  },
  {
    number: "02",
    name: "The Ridge Suite",
    type: "One Bedroom Suite",
    description:
      "Our signature suite with generous living space, panoramic mountain views, and a private sitting area.",
    guests: "2 Guests",
    size: "680 sq ft",
    bed: "King Bed",
    price: "₹26,500",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1800&q=90",
    features: [
      "Mountain View",
      "Living Room",
      "Breakfast Included",
    ],
  },
  {
    number: "03",
    name: "The Hillview Cabin",
    type: "Private Cabin",
    description:
      "A secluded timber cabin for longer stays, with a fireplace, private terrace, and uninterrupted views of the hills.",
    guests: "4 Guests",
    size: "860 sq ft",
    bed: "King + Sofa Bed",
    price: "₹34,000",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1800&q=90",
    features: [
      "Private Cabin",
      "Fireplace",
      "Private Terrace",
    ],
  },
];

/* =========================================================
   AMENITIES
========================================================= */

export const amenities = [
  {
    number: "01",
    title: "Mountain Views",
    description:
      "Wake up to uninterrupted views of the surrounding hills from your room and private outdoor spaces.",
  },
  {
    number: "02",
    title: "Breakfast Included",
    description:
      "A fresh mountain breakfast prepared daily with seasonal local ingredients and house favourites.",
  },
  {
    number: "03",
    title: "Private Dining",
    description:
      "Enjoy an intimate dinner prepared especially for you, indoors or beneath the evening sky.",
  },
  {
    number: "04",
    title: "Bonfire Evenings",
    description:
      "Gather around the fire as the temperature drops and the hills become quiet.",
  },
  {
    number: "05",
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected when you need to, with reliable Wi-Fi throughout the property.",
  },
  {
    number: "06",
    title: "Daily Housekeeping",
    description:
      "Thoughtful daily housekeeping keeps every room comfortable throughout your stay.",
  },
];

/* =========================================================
   EXPERIENCES
========================================================= */

export const experiences = [
  {
    number: "01",
    title: "Forest Walks",
    description:
      "Explore quiet pine trails around the property with a local guide who knows the surrounding forest and its changing seasons.",
    duration: "2–3 Hours",
    location: "Around The Property",
    availability: "Morning & Afternoon",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "Sunrise Breakfast",
    description:
      "Start the morning slowly with breakfast overlooking the valley as the first light moves across the hills.",
    duration: "1–2 Hours",
    location: "Private Terrace",
    availability: "By Arrangement",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "Around the Fire",
    description:
      "Spend the evening beside the fire with local food, warm drinks, mountain air, and uninterrupted views of the night sky.",
    duration: "2 Hours",
    location: "Fire Terrace",
    availability: "Evenings",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1800&q=90",
  },
];

/* =========================================================
   DINING
========================================================= */

export const dining = {
  eyebrow: "Dining / 06",
  title: "Food that",
  titleAccent: "belongs here.",
  description:
    "Our kitchen follows the landscape around us — seasonal ingredients, local produce, familiar flavours, and meals meant to be enjoyed slowly.",
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90",
  secondaryImage:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=90",
  highlights: [
    "Locally sourced ingredients",
    "Seasonal mountain produce",
    "Daily breakfast",
    "Private dining",
    "Dinner by arrangement",
  ],
  hours: [
    {
      label: "Breakfast",
      time: "07:30 — 10:30",
    },
    {
      label: "Lunch",
      time: "12:30 — 15:00",
    },
    {
      label: "Dinner",
      time: "19:00 — 22:00",
    },
  ],
};

export const diningHighlights = dining.highlights;

/* =========================================================
   GALLERY
========================================================= */

export const galleryImages = [
  {
    src: heroImage,
    alt: "The Hillview property surrounded by mountains",
    category: "Property",
  },
  {
    src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1800&q=90",
    alt: "Private mountain cabin surrounded by forest",
    category: "Rooms",
  },
  {
    src: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1800&q=90",
    alt: "Forest trail near the property",
    category: "Around The Property",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=90",
    alt: "Dining table prepared for dinner",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1800&q=90",
    alt: "The Hillview exterior",
    category: "Property",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",
    alt: "Mountain landscape at sunrise",
    category: "Experiences",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1800&q=90",
    alt: "Evening fire experience",
    category: "Experiences",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",
    alt: "Mountain valley view",
    category: "Landscape",
  },
];

/* =========================================================
   LOCATION
========================================================= */

export const location = {
  eyebrow: "Location / 08",
  title: "Far enough",
  titleAccent: "to feel away.",
  description:
    "Set in the hills of Arunachal Pradesh, The Hillview offers a quieter base for exploring forests, valleys, villages, and the landscapes beyond the property.",
  address: "Upper Hills, Arunachal Pradesh, India",
  elevation: "4,900 ft",
  surroundings: [
    {
      label: "Nearest town",
      value: "Sagalee",
    },
    {
      label: "Setting",
      value: "Mountain Hills",
    },
    {
      label: "Elevation",
      value: "4,900 ft",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90",
};

/* =========================================================
   BOOKING
========================================================= */

export const bookingDefaults = {
  guests: "2 Adults",
  room: "The Forest Room",
};

export const bookingOptions = {
  guestOptions: [
    "1 Adult",
    "2 Adults",
    "2 Adults + 1 Child",
    "2 Adults + 2 Children",
    "4 Adults",
  ],
  roomOptions: rooms.map((room) => room.name),
};

/* =========================================================
   CONTACT
========================================================= */

export const contact = {
  phone: hillview.phone,
  email: hillview.email,
  address: hillview.address,
  checkIn: "14:00",
  checkOut: "11:00",
};

/* =========================================================
   FOOTER
========================================================= */

export const footerNavigation = [
  {
    title: "Stay",
    links: [
      { label: "Rooms", href: "#rooms" },
      { label: "Amenities", href: "#amenities" },
      { label: "Dining", href: "#dining" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Experiences", href: "#experiences" },
      { label: "Gallery", href: "#gallery" },
      { label: "Location", href: "#location" },
    ],
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
];