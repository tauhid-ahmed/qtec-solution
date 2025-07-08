import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  value: number;
  max?: number;
}

export const StarRating = ({ value, max = 5 }: StarRatingProps) => {
  let fullStars = Math.floor(value);
  const fraction = value - fullStars;

  // Round up if fraction >= 0.75 (count as full star)
  if (fraction >= 0.75) {
    fullStars += 1;
  }

  // Half star if fraction between 0.25 and 0.75
  const hasHalfStar = fraction >= 0.25 && fraction < 0.75;

  // Avoid showing half star if we rounded up
  const halfStarToShow = hasHalfStar && !(fraction >= 0.75);

  return (
    <div className="flex items-center gap-0.5 text-yellow-500">
      {Array.from({ length: max }).map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} size={18} fill="currentColor" stroke="none" />;
        } else if (i === fullStars && halfStarToShow) {
          return <StarHalf key={i} size={18} />;
        } else {
          return <Star key={i} size={18} />;
        }
      })}
    </div>
  );
};
