import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GenreFilter from "@/components/GenreFilter";
import MovieCard from "@/components/MovieCard";
import MovieModal from "@/components/MovieModal";
import MovieCarousel from "@/components/MovieCarousel";
import FeaturedBanner from "@/components/FeaturedBanner";
import { movies, Movie } from "@/data/movies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("Tous");
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("cinematch-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      localStorage.setItem("cinematch-favorites", JSON.stringify(next));
      return next;
    });
  };

  const isFiltering = searchQuery.trim() !== "" || activeGenre !== "Tous" || showFavorites;

  const filteredMovies = useMemo(() => {
    let result = movies;
    if (showFavorites) result = result.filter((m) => favorites.includes(m.id));
    if (activeGenre !== "Tous") result = result.filter((m) => m.genre.includes(activeGenre));
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.director.toLowerCase().includes(q) ||
          m.genre.some((g) => g.toLowerCase().includes(q))
      );
    }
    return result;
  }, [searchQuery, activeGenre, favorites, showFavorites]);

  const trending = useMemo(() => [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10), []);
  const newest = useMemo(() => [...movies].sort((a, b) => b.year - a.year).slice(0, 10), []);
  const actionMovies = useMemo(() => movies.filter((m) => m.genre.includes("Action")), []);
  const dramaMovies = useMemo(() => movies.filter((m) => m.genre.includes("Drame")), []);
  const comedyMovies = useMemo(() => movies.filter((m) => m.genre.includes("Comédie")), []);
  const scifiMovies = useMemo(() => movies.filter((m) => m.genre.includes("Science-Fiction")), []);

  const featured = trending[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        favoritesCount={favorites.length}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((v) => !v)}
      />

      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl text-foreground">
            {showFavorites ? "Vos favoris" : "Explorer"}
          </h2>
          <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} />
        </div>

        {isFiltering ? (
          <>
            {filteredMovies.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Aucun film trouvé.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredMovies.map((movie, i) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    isFavorite={favorites.includes(movie.id)}
                    onToggleFavorite={toggleFavorite}
                    onSelect={setSelectedMovie}
                    index={i}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-14">
            {featured && (
              <FeaturedBanner movie={featured} onSelect={setSelectedMovie} />
            )}

            <MovieCarousel
              title="🔥 Tendances"
              movies={trending}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedMovie}
            />

            <MovieCarousel
              title="🆕 Nouveautés"
              movies={newest}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedMovie}
            />

            <MovieCarousel
              title="💥 Action"
              movies={actionMovies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedMovie}
            />

            <MovieCarousel
              title="🎭 Drame"
              movies={dramaMovies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedMovie}
            />

            <MovieCarousel
              title="😂 Comédie"
              movies={comedyMovies}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onSelect={setSelectedMovie}
            />

            {scifiMovies.length > 0 && (
              <MovieCarousel
                title="🚀 Science-Fiction"
                movies={scifiMovies}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onSelect={setSelectedMovie}
              />
            )}
          </div>
        )}
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          onToggleFavorite={toggleFavorite}
          onClose={() => setSelectedMovie(null)}
          onSelect={setSelectedMovie}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default Index;
