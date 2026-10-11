import { Film, Heart } from "lucide-react";

interface NavbarProps {
  favoritesCount: number;
  showFavorites: boolean;
  onToggleShowFavorites: () => void;
}

const Navbar = ({ favoritesCount, showFavorites, onToggleShowFavorites }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}>
            CinéMatch AI
          </span>
        </div>
        <button
          onClick={onToggleShowFavorites}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            showFavorites
              ? "bg-heart/15 text-heart border border-heart/30"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          <Heart className={`h-4 w-4 ${showFavorites ? "fill-heart" : ""}`} />
          Favoris
          {favoritesCount > 0 && (
            <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs bg-primary text-primary-foreground">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
