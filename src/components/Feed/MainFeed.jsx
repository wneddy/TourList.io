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
    <main className="bg-[#111111] px-4 sm:px-6 lg:px-10 py-12 min-h-screen mt-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Recommended Places for You
          </h1>
          <p className="mt-2 text-base sm:text-lg text-white/60 max-w-2xl">
            Based on your preferences for beaches, wildlife, and hiking.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`flex h-9 sm:h-10 items-center justify-center gap-x-2 rounded-full px-3 sm:px-4 text-xs sm:text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--primary-500)] font-semibold text-white"
                  : "bg-[#29382f] font-medium text-white/80 hover:bg-[#34463b]"
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={clearFilters}
            className="flex h-9 sm:h-10 items-center justify-center gap-x-2 rounded-full bg-red-600 px-3 sm:px-4 text-xs sm:text-sm font-medium text-white hover:bg-red-700"
          >
            Clear Filters
          </button>
        </div>

        {/* Places */}
        {destinations.length === 0 ? (
          <p className="text-white/60 text-sm sm:text-base">
            No matches found. Try adjusting your answers.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
