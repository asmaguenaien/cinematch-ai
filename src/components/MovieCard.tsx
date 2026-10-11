import { Star, Heart } from "lucide-react";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onSelect: (movie: Movie) => void;
  index: number;
}

const MovieCard = ({ movie, isFavorite, onToggleFavorite, onSelect, index }: MovieCardProps) => {
  return (
    <div
      className="group relative rounded-lg overflow-hidden bg-card cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onSelect(movie)}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "var(--gradient-card)" }}
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(movie.id);
        }}
        className="absolute top-3 right-3 p-2 rounded-full bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      >
        <Heart
          className={`h-4 w-4 transition-colors ${isFavorite ? "fill-heart text-heart" : "text-foreground"}`}
        />
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-semibold text-foreground text-sm truncate">{movie.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Star className="h-3.5 w-3.5 fill-star text-star" />
          <span className="text-xs text-foreground font-medium">{movie.rating}</span>
          <span className="text-xs text-muted-foreground">{movie.year}</span>
        </div>
      </div>

      <div className="p-3 group-hover:opacity-0 transition-opacity">
        <h3 className="font-semibold text-foreground text-sm truncate">{movie.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Star className="h-3.5 w-3.5 fill-star text-star" />
          <span className="text-xs text-foreground font-medium">{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
