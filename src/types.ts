export type Category = 
  | 'all'
  | 'chai'
  | 'coffee'
  | 'maggi'
  | 'sandwiches'
  | 'burgers'
  | 'fries'
  | 'milkshakes';

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  isSpecial?: boolean;
  bestseller?: boolean;
  lateNightFav?: boolean;
  rating: number;
  spicyLevel?: number; // 0 to 3
  image: string;
  tags: string[];
  tiltDeg: number; // For floating food board effect e.g. -3, 2, -1, 3
}

export interface BillReview {
  id: string;
  customerName: string;
  tableNo: string;
  date: string;
  time: string;
  items: { name: string; qty: number; price: number }[];
  rating: number;
  reviewText: string;
  totalPaid: number;
  likesCount: number;
  verifiedCustomer?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  aspect: 'portrait' | 'square' | 'landscape';
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface TimelineStep {
  id: 'morning' | 'afternoon' | 'evening' | 'night';
  timeLabel: string;
  timeRange: string;
  title: string;
  subtitle: string;
  description: string;
  teaPairing: string;
  snackPairing: string;
  image: string;
  bgColor: string;
  accentGlow: string;
}

export interface WhyUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  neonColor: string;
}
