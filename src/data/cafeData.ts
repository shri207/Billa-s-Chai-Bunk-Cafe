import { MenuItem, BillReview, GalleryItem, TimelineStep, WhyUsFeature } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // HOT CHAI
  {
    id: 'c1',
    name: "Special Masala Chai",
    category: 'chai',
    price: 25,
    description: "Our legendary recipe brewed with hand-crushed cardamom, fresh ginger, cinnamon, and whole black pepper served boiling hot.",
    isSpecial: true,
    bestseller: true,
    rating: 4.9,
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: ["Authentic", "Masala", "Kulhad Option"],
    tiltDeg: -2
  },
  {
    id: 'c2',
    name: "Hyderabadi Irani Chai",
    category: 'chai',
    price: 30,
    description: "Rich, slow-simmered condensed milk tea brewed in traditional brass deksha. Thick, creamy, and ultra-satisfying.",
    bestseller: true,
    rating: 4.8,
    spicyLevel: 0,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    tags: ["Irani Style", "Creamy", "Osmania Pair"],
    tiltDeg: 2
  },
  {
    id: 'c3',
    name: "Adrak Elaichi Cutting Chai",
    category: 'chai',
    price: 20,
    description: "The classic roadside cutting tea infused with spicy ginger extract and aromatic green cardamom.",
    lateNightFav: true,
    rating: 4.7,
    spicyLevel: 1,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80",
    tags: ["Kadak", "Ginger", "Quick Cutting"],
    tiltDeg: -3
  },
  {
    id: 'c4',
    name: "Saffron Zafrani Tea",
    category: 'chai',
    price: 50,
    description: "Premium Kashmiri saffron threads infused in rich whole milk tea with crushed almonds and pistachios.",
    isSpecial: true,
    rating: 4.9,
    spicyLevel: 0,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    tags: ["Royal Saffron", "Nuts", "Rich"],
    tiltDeg: 3
  },

  // COFFEE
  {
    id: 'cf1',
    name: "Bunk Filter Coffee",
    category: 'coffee',
    price: 35,
    description: "Authentic South Indian chicory blend filter coffee frothed high between brass tumblers.",
    bestseller: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["Degree Coffee", "Strong", "Frothy"],
    tiltDeg: -1
  },
  {
    id: 'cf2',
    name: "Thick Cold Coffee Float",
    category: 'coffee',
    price: 80,
    description: "Blended espresso shot with thick chocolate syrup, whole cream milk, and a scoop of vanilla ice cream.",
    lateNightFav: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    tags: ["Chilled", "Ice Cream", "Bestseller"],
    tiltDeg: 2
  },

  // STREET MAGGI
  {
    id: 'm1',
    name: "Bunk Special Cheese Butter Maggi",
    category: 'maggi',
    price: 85,
    description: "Double Maggi cakes tossed in melted Amul butter, secret Bunk masala mix, loaded with shredded cheddar cheese.",
    bestseller: true,
    lateNightFav: true,
    rating: 4.9,
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80",
    tags: ["Amul Butter", "Extra Cheese", "Late Night Classic"],
    tiltDeg: -3
  },
  {
    id: 'm2',
    name: "Peri Peri Veggie Maggi",
    category: 'maggi',
    price: 75,
    description: "Spicy African peri-peri seasoned Maggi with sauteed bell peppers, onions, sweet corn, and green chillies.",
    rating: 4.6,
    spicyLevel: 3,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    tags: ["Super Spicy", "Crunchy Veggies"],
    tiltDeg: 1
  },

  // SANDWICHES
  {
    id: 's1',
    name: "Street Style Grill Cheese Toast",
    category: 'sandwiches',
    price: 90,
    description: "Golden buttered sandwich loaded with spiced potatoes, mint chutney, capsicum, and oozing cheese.",
    bestseller: true,
    rating: 4.8,
    spicyLevel: 1,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: ["Crispy Toast", "Green Chutney", "Amul Butter"],
    tiltDeg: -2
  },
  {
    id: 's2',
    name: "Paneer Tikka Club Sandwich",
    category: 'sandwiches',
    price: 120,
    description: "Triple-layer club sandwich stuffed with tandoori marinated cottage cheese, crunchy lettuce, and spicy mayo.",
    isSpecial: true,
    rating: 4.8,
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: ["Tandoori Paneer", "Triple Layer"],
    tiltDeg: 3
  },

  // BURGERS
  {
    id: 'b1',
    name: "Bunk Double Crispy Veg Burger",
    category: 'burgers',
    price: 110,
    description: "Dual spiced potato-herb patties stacked with caramelized onions, tangy pickles, liquid cheese, and chipotle mayo.",
    bestseller: true,
    lateNightFav: true,
    rating: 4.9,
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tags: ["Double Patty", "Chipotle", "Juicy"],
    tiltDeg: -1
  },

  // FRIES & SNACKS
  {
    id: 'f1',
    name: "Loaded Peri Peri Cheese Fries",
    category: 'fries',
    price: 100,
    description: "Extra crispy skin-on potato fries tossed in fiery peri peri seasoning, drizzled with warm jalapeño cheese sauce.",
    bestseller: true,
    lateNightFav: true,
    rating: 4.9,
    spicyLevel: 2,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    tags: ["Warm Cheese Drizzle", "Fiery Peri Peri"],
    tiltDeg: 2
  },
  {
    id: 'f2',
    name: "Crispy Corn & Salt Pepper",
    category: 'fries',
    price: 80,
    description: "Golden fried sweet corn kernels tossed with crushed black pepper, spring onions, and garlic butter.",
    rating: 4.7,
    spicyLevel: 1,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    tags: ["Garlic Butter", "Crunchy Snack"],
    tiltDeg: -2
  },

  // MILKSHAKES
  {
    id: 'ms1',
    name: "KitKat Oreolicious Thickshake",
    category: 'milkshakes',
    price: 120,
    description: "Blended with whole KitKat fingers, crushed Oreo cookies, rich chocolate ice cream, topped with whipped cream.",
    lateNightFav: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    tags: ["Rich Chocolate", "Crunchy Oreos"],
    tiltDeg: 3
  }
];

export const BILL_REVIEWS: BillReview[] = [
  {
    id: 'rev-101',
    customerName: 'Rahul & Gang',
    tableNo: 'BUNK-04',
    date: '24 JUL 2026',
    time: '11:42 PM',
    items: [
      { name: 'Special Masala Chai (x3)', qty: 3, price: 75 },
      { name: 'Cheese Butter Maggi', qty: 1, price: 85 },
      { name: 'Peri Peri Fries', qty: 1, price: 100 }
    ],
    rating: 5,
    reviewText: "Great atmosphere to hang out with friends and family. The late-night vibe under the Edison lights with steaming chai is unbeatable in Secunderabad!",
    totalPaid: 260,
    likesCount: 142,
    verifiedCustomer: true
  },
  {
    id: 'rev-102',
    customerName: 'Ananya & Preethi',
    tableNo: 'BUNK-12',
    date: '22 JUL 2026',
    time: '08:15 PM',
    items: [
      { name: 'Hyderabadi Irani Chai (x2)', qty: 2, price: 60 },
      { name: 'Osmania Biscuits (x4)', qty: 4, price: 20 },
      { name: 'Thick Cold Coffee Float', qty: 1, price: 80 }
    ],
    rating: 5,
    reviewText: "Loved the chai, amazing street vibe, and peaceful place. The Irani tea paired with warm Osmania biscuits takes you back to old Hyderabad streets.",
    totalPaid: 160,
    likesCount: 98,
    verifiedCustomer: true
  },
  {
    id: 'rev-103',
    customerName: 'Vikram S.',
    tableNo: 'DRIVE-THRU',
    date: '20 JUL 2026',
    time: '01:10 AM',
    items: [
      { name: 'Double Crispy Veg Burger', qty: 1, price: 110 },
      { name: 'Adrak Elaichi Cutting Chai', qty: 2, price: 40 },
      { name: 'Grill Cheese Toast', qty: 1, price: 90 }
    ],
    rating: 5,
    reviewText: "Perfect place for quality time with delicious snacks. Quick service straight to my car at 1 AM. Must visit for all night owls!",
    totalPaid: 240,
    likesCount: 185,
    verifiedCustomer: true
  },
  {
    id: 'rev-104',
    customerName: 'Sai Teja K.',
    tableNo: 'BUNK-02',
    date: '18 JUL 2026',
    time: '06:30 AM',
    items: [
      { name: 'Saffron Zafrani Tea', qty: 2, price: 100 },
      { name: 'Bun Maska', qty: 2, price: 50 }
    ],
    rating: 5,
    reviewText: "Opening early at 5 AM is a lifesaver for morning riders! Fresh zafrani tea with hot buttered bun maska made my day.",
    totalPaid: 150,
    likesCount: 76,
    verifiedCustomer: true
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 'morning',
    timeLabel: 'MORNING BUNK',
    timeRange: '5:00 AM – 11:00 AM',
    title: 'Sunrise Energy & Fresh Brews',
    subtitle: 'Start your day with aromatic ginger cardamom warmth.',
    description: 'Early morning joggers, cyclists, and commuters gather under the cool morning breeze. Fresh tea leaves boil in brass pots as the sun rises over Bolarum.',
    teaPairing: 'Adrak Elaichi Cutting Chai & Zafrani Tea',
    snackPairing: 'Warm Bun Maska & Crunchy Osmania Biscuits',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    bgColor: 'from-amber-950/80 to-[#111111]',
    accentGlow: '#F59E0B'
  },
  {
    id: 'afternoon',
    timeLabel: 'AFTERNOON PAUSE',
    timeRange: '11:00 AM – 4:00 PM',
    title: 'Quick Bite & Chilled Refreshment',
    subtitle: 'Recharge your energy during midday work breaks.',
    description: 'College students and working professionals take a quick breather. Pair thick cold coffee floats with grilled cheese sandwiches in our shaded container lounge.',
    teaPairing: 'Bunk Filter Coffee & Iced Lemon Tea',
    snackPairing: 'Grill Cheese Toast & Paneer Club Sandwich',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
    bgColor: 'from-orange-950/80 to-[#111111]',
    accentGlow: '#D97706'
  },
  {
    id: 'evening',
    timeLabel: 'EVENING STREET VIBE',
    timeRange: '4:00 PM – 9:00 PM',
    title: 'Friends Hangout & Laughter',
    subtitle: 'The golden hour when Billa\'s Chai Bunk comes alive!',
    description: 'Edison bulbs light up, ambient music echoes through the street, and friends assemble over cutting chai glasses and steaming plates of spicy Maggi.',
    teaPairing: 'Special Masala Chai & Irani Chai',
    snackPairing: 'Cheese Butter Maggi & Peri Peri Fries',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1000&q=80',
    bgColor: 'from-amber-900/80 to-[#111111]',
    accentGlow: '#FACC15'
  },
  {
    id: 'night',
    timeLabel: 'LATE NIGHT CONVERSATIONS',
    timeRange: '9:00 PM – 2:00 AM',
    title: 'Chai, Neon Lights & Late Night Stories',
    subtitle: 'Where deep conversations and midnight cravings meet.',
    description: 'Neon signs glow brightly against rain-wet asphalt. Bikers stop by, acoustic strums fill the air, and steaming cups keep the midnight energy roaring.',
    teaPairing: 'Kadak Ginger Cutting & Double Shot Espresso',
    snackPairing: 'Double Crispy Veg Burger & KitKat Shake',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    bgColor: 'from-red-950/80 to-[#111111]',
    accentGlow: '#EF4444'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Midnight Edison Canopy',
    subtitle: 'Warm street lighting for endless night talks',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tag: 'Street Vibe',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    title: 'Boiling Brass Tea Pot',
    subtitle: 'Hand-pounded spices simmering to perfection',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tag: 'Authentic Brew',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    title: 'Bunk Container Lounge',
    subtitle: 'Industrial container seating with urban graffiti art',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    tag: 'Ambience',
    aspect: 'landscape'
  },
  {
    id: 'g4',
    title: 'Loaded Cheese Maggi',
    subtitle: 'Melted butter & melted cheddar cheese goodness',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
    tag: 'Foodie Pick',
    aspect: 'square'
  },
  {
    id: 'g5',
    title: 'Friends Evening Reunion',
    subtitle: 'Unforgettable moments over cutting glasses',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    tag: 'Community',
    aspect: 'portrait'
  },
  {
    id: 'g6',
    title: 'Crispy Peri Peri Fries',
    subtitle: 'Golden potato fries drizzled with jalapeño cheese',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    tag: 'Snack Board',
    aspect: 'square'
  }
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    id: 'w1',
    icon: '☕',
    title: 'Freshly Brewed Chai',
    description: 'Every single cup is brewed fresh in brass dekshas with hand-crushed whole spices every 15 minutes.',
    neonColor: '#F59E0B'
  },
  {
    id: 'w2',
    icon: '🍔',
    title: 'Delicious Street Snacks',
    description: 'Piping hot Cheese Maggi, loaded burgers, and grilled toast cooked fresh right in front of you.',
    neonColor: '#D97706'
  },
  {
    id: 'w3',
    icon: '🚗',
    title: 'Drive-Through & Bunk Stop',
    description: 'Pull up on your bike or car! Get piping hot chai served straight to your window in minutes.',
    neonColor: '#FACC15'
  },
  {
    id: 'w4',
    icon: '🪑',
    title: 'Comfortable Seating',
    description: 'Open-air container benches under glowing Edison bulbs and greenery for relaxing team hangouts.',
    neonColor: '#10B981'
  },
  {
    id: 'w5',
    icon: '📶',
    title: 'Free High-Speed WiFi',
    description: 'Ultra-fast gigabit WiFi so you can work, stream music, or catch up on late night code sessions.',
    neonColor: '#3B82F6'
  },
  {
    id: 'w6',
    icon: '😊',
    title: 'Friendly Bunk Service',
    description: 'Warm, welcoming street cafe energy from 5 AM early morning till 2 AM late midnight every day.',
    neonColor: '#EC4899'
  }
];
