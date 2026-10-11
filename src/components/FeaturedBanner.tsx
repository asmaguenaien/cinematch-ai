import { Star, Play } from "lucide-react";
import { Movie } from "@/data/movies";

interface FeaturedBannerProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const FeaturedBanner = ({ movie, onSelect }: FeaturedBannerProps) => {
  return (
    <div
      className="relative w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden cursor-pointer group"
      onClick={() => onSelect(movie)}
    >
      <img
        src={movie.backdrop || movie.poster}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          Film à la une
        </span>
        <h2 className="text-4xl md:text-5xl text-foreground leading-none mb-3">
          {movie.title}
        </h2>
        <div className="flex items-center gap-3 mb-3 text-sm">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-star text-star" />
            <span className="text-foreground font-semibold">{movie.rating}</span>
          </span>
          <span className="text-muted-foreground">{movie.year}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{movie.director}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {movie.overview}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all">
            <Play className="h-4 w-4" />
            Voir les détails
          </button>
          <div className="flex gap-2">
            {movie.genre.slice(0, 3).map((g) => (
              <span key={g} className="px-3 py-1.5 rounded-full text-xs bg-secondary/80 text-secondary-foreground backdrop-blur-sm">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
