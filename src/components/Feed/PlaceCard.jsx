export default function PlaceCard({
  place,
  isFavorite,
  onToggleFavorite,
  onExplore,
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[#1c2620] shadow-lg transition-transform hover:scale-105">
      {/* Image with wishlist button */}
      <div className="relative aspect-video w-full">
        <img
          src={place.image_source}
          alt={place.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-black/70 text-white">
          <span className="text-xs sm:text-sm text-white/70">{place.vibe}</span>
        </div>

        <button
          onClick={onToggleFavorite}
          className="absolute bottom-2 right-3 rounded-full bg-black/50 p-1.5 sm:p-2 text-white hover:bg-black/70"
        >
          {isFavorite ? "💚" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col py-3 px-3 sm:px-4">
        <h3 className="text-base sm:text-lg font-bold text-white">
          {place.name}
        </h3>

        {/* Location */}
        <div className="flex mt-2 items-center text-xs sm:text-sm text-white/60">
          <img src="./2location.svg" alt="location" className="w-3 h-3 mr-1" />
          <p className="mr-1">{place.county},</p>
          <span>{place.distance_tag}</span>
        </div>

        {/* Budget and Opening */}
        <div className="flex mt-3 justify-between bg-black/20 py-2 px-3 rounded-lg text-xs sm:text-sm">
          <div>
            <p className="text-white/70">Budget</p>
            <p className="text-white">{place.budget}</p>
          </div>
          <div className="text-right">
            <p className="text-white/70">Open Between</p>
            <p className="text-white">8am - 10pm</p>
          </div>
        </div>

        {/* Activities + Explore button in one row */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-white/70 truncate">
            Activities: {place.activities.join(", ")}
          </p>
          <button
            onClick={onExplore}
            className="px-4 py-2 rounded-full cursor-pointer bg-[var(--primary-500)] text-xs sm:text-sm font-medium text-white hover:bg-[var(--primary-600)]"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
