/**
 * Type definitions for 7 Hills Restaurant website
 */

export type Page = 'home' | 'about' | 'menu' | 'gallery' | 'reviews' | 'contact' | 'privacy';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  image?: string;
  tags?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  relativeTime: string;
  initials: string;
  avatarBg: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'menu' | 'services';
}
