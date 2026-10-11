import { Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end">
      <img
        src={heroBg}
        alt="Cinematic theater"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 container mx-auto px-4 pb-16 space-y-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-none">
          Trouvez votre <span className="text-gradient">prochain film</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Des recommandations personnalisées basées sur vos goûts cinématographiques.
        </p>
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher un film, un genre, un réalisateur..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-secondary/80 backdrop-blur-md border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
