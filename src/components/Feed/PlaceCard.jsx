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
        <div className="absolute top-2 left-2  pb-1 pl-2 pr-2 rounded-full bg-black/70 text-white hover:bg-black/70">
          <span className="text-sm justify-self-center-safe text-white/70">
            {place.vibe}
          </span>
        </div>

        <button
          onClick={onToggleFavorite}
          className="absolute bottom-1 right-4 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
        >
          {isFavorite ? "💚" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col py-3 px-2">
        <h3 className="text-lg font-bold text-white px-1">{place.name}</h3>
        <div className="flex mt-2 px-1">
          <img src="./src/assets/2location.svg" alt="location" className="mr-1" />
          <p className="text-sm font-medium text-white/60 mr-2">{place.county},</p>
          <span className="text-sm text-white/60">{place.distance_tag}</span>
        </div>
        <div className="flex mt-2 justify-between bg-black/13 py-2 px-3 rounded-xl">
          <div className="">
            <p className="text-md text-white/70">Budget</p>
            <p className="text-white text-sm">{place.budget}</p>
          </div>
          <div className="">
            <p className="text-white/70 text-md">Open Between</p>
            <p className="text-white text-sm">8am - 10pm</p>
          </div>
        </div>

        {/* Footer with Explore button */}
        <div className="mt-4 flex items-center justify-between bottom-2 px-1">
          <p className=" text-white/70 text-sm">
            Activities: {place.activities.join(", ")}
          </p>
          <button
            onClick={onExplore}
            className=" py-2 rounded-full cursor-pointer bg-[var(--primary-500)] w-25 text-sm font-medium text-white hover:bg-[var(--primary-600)]"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
