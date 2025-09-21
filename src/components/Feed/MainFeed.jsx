import PlaceCard from "./PlaceCard";

export default function MainFeed({
  destinations,
  activeCategory,
  setActiveCategory,
  clearFilters,
  favorites,
  onToggleFavorite,
  onExplore,
}) {
  const categories = ["Beach", "Wildlife", "Hiking", "Cultural", "City"];

  return (
    <main className="bg-[#111111] px-10 py-25 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recomended Places for You
          </h1>
          <p className="mt-2 text-lg text-white/60">
            Based on your preferences for beaches, wildlife, and hiking.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`flex h-10 items-center justify-center gap-x-2 rounded-full px-4 text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--primary-500)] font-semibold text-white"
                  : "bg-[#29382f] font-medium text-medium text-white/80 hover:bg-[#34463b]"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={clearFilters}
            className="flex justify-end h-10 items-center gap-x-2 rounded-full bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700"
          >
            Clear Filters
          </button>
        </div>

        {/* Places */}
        {destinations.length === 0 ? (
          <p className="text-white/60">No matches found. Try adjust your answers.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                isFavorite={favorites.includes(place.id)}
                onToggleFavorite={() => onToggleFavorite(place.id)}
                onExplore={() => onExplore(place)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
