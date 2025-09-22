export default function Details({ place }) {
  return (
    <div className="flex-1 bg-[#111111] min-h-screen mt-10">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16">
        {/* Title + tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {place.name}
          </h1>
          <p className="text-white mt-2 text-sm sm:text-base md:text-lg">{place.vibe}</p>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-5xl py-5">
          <div
            className="h-60 sm:h-80 md:h-96 lg:h-[30rem] w-full rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.6)), url(${place.image_source})`,
            }}
          ></div>
        </div>

        {/* Grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Left column */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              {/* About */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">About</h2>
                <p className="mt-4 text-sm sm:text-base text-[#9eb7a8] leading-relaxed">
                  {place.about ||
                    `Discover ${place.name}, located in ${place.county}. Perfect for ${place.activities.join(
                      ", "
                    )} with a vibe of ${place.vibe}.`}
                </p>
              </div>

              {/* Activities */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Activities</h2>
                <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {place.activities.map((act, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#29382f] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white"
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              {place.amenities && place.amenities.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Amenities</h2>
                  <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                    {place.amenities.map((amen, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#34463b] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white"
                      >
                        {amen}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 md:space-y-8">
            {/* Cost Breakdown */}
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Cost Breakdown</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4 text-xs sm:text-sm">
                  <p className="text-[#9eb7a8]">Budget</p>
                  <p className="font-medium text-white">{place.budget}</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4 text-xs sm:text-sm">
                  <p className="text-[#9eb7a8]">Estimated Fare</p>
                  <p className="font-medium text-white">{place.distance_tag}</p>
                </div>
              </div>
              <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#38e07b] py-2 sm:py-3 text-xs sm:text-sm font-bold text-[#111714]">
                🚖 Get a Ride
              </button>
            </div>

            {/* Details */}
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Details</h3>
              <div className="mt-4 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4">
                  <p className="text-[#9eb7a8]">Opening Times</p>
                  <p className="font-medium text-white">Daily from 8:00am – 7:00pm</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
              <div className="mt-4 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4">
                  <span className="text-[#9eb7a8]">📞</span>
                  <p className="font-medium text-white">+254 722 123 456</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4">
                  <span className="text-[#9eb7a8]">✉️</span>
                  <p className="font-medium text-white">info@example.com</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-3 sm:pt-4">
                  <span className="text-[#9eb7a8]">🌐</span>
                  <p className="font-medium text-white">www.example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
