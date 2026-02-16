import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Returns an array of star descriptor objects for a given rating.
 * Each item: { type: 'full' | 'half' | 'empty', key: string }
 */
export function getStarRating(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push({ type: 'full', key: `full-${i}` });
  }
  if (hasHalfStar) {
    stars.push({ type: 'half', key: 'half' });
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push({ type: 'empty', key: `empty-${i}` });
  }
  return stars;
}

/**
 * Formats a number with commas.
 */
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Formats number compactly for display (e.g., 1500 -> "1K+")
 */
export function formatCompactNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K+';
  }
  return num.toString();
}

/**
 * Gets or creates a session ID for cart/wishlist/order tracking.
 */
export function getOrCreateSessionId(userId) {
  if (userId) return userId;
  let sessionId = localStorage.getItem('amazon_session_id');
  if (!sessionId) {
    sessionId = `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('amazon_session_id', sessionId);
  }
  return sessionId;
}
