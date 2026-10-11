import { Star, Heart, X, Clock, User } from "lucide-react";
import { Movie, movies } from "@/data/movies";

interface MovieModalProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClose: () => void;
  onSelect: (movie: Movie) => void;
  favorites: number[];
}

const MovieModal = ({ movie, isFavorite, onToggleFavorite, onClose, onSelect, favorites }: MovieModalProps) => {
  const similar = movies
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-xl border border-border animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 p-6">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full sm:w-48 rounded-lg object-cover aspect-[2/3]"
          />
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl text-foreground">{movie.title}</h2>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-star text-star" />
                <span className="text-foreground font-semibold">{movie.rating}/10</span>
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" /> {movie.year}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <User className="h-4 w-4" /> {movie.director}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground">
                  {g}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{movie.overview}</p>
            <button
              onClick={() => onToggleFavorite(movie.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isFavorite
                  ? "bg-heart/15 text-heart border border-heart/30"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-heart" : ""}`} />
              {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            </button>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <h3 className="text-xl text-foreground">Films similaires</h3>
            <div className="grid grid-cols-4 gap-3">
              {similar.map((m) => (
                <div
                  key={m.id}
                  className="cursor-pointer rounded-md overflow-hidden hover:ring-2 ring-primary/50 transition-all"
                  onClick={() => onSelect(m)}
                >
                  <img src={m.poster} alt={m.title} loading="lazy" className="w-full aspect-[2/3] object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
