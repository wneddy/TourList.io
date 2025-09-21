export default function Details() {
  return (
    <div className="flex-1 bg-[#111111] min-h-screen">
      <div className="px-20 py-25">
        <div>
          <h1 className="text-4xl font-bold text-white">Maasai Mara</h1>
          <p className="text-white mt-2 text-md  ">
            Where wildlife meets resilience
          </p>
        </div>
        <div className="mx-auto max-w-4xl py-5">
          <div
            className="h-96 w-full rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%),
      url('./src/assets/hero-nature.jpg')`,
            }}
          ></div>
        </div>
        <div className="py-10 grid grid-cols md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white">About</h2>
                <p className="mt-4 text-base text-[#9eb7a8]">
                  The Maasai Mara National Reserve is a vast wilderness in
                  southwestern Kenya, famed for its exceptional populations of
                  lions, leopards, elephants, and numerous other wildlife
                  species. The annual wildebeest migration, a spectacular event
                  involving millions of animals, is a major attraction. The
                  reserve offers diverse landscapes, from savannah plains to
                  riverine forests, providing a rich habitat for a wide array of
                  flora and fauna.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Activities</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Game Drives
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Hiking
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Cycling
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Swimming
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Mudding
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Amenities</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Parking
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Restrooms
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Picnic
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    First Aid
                  </span>
                  <span className="rounded-full bg-[#29382f] px-4 py-2 text-sm font-medium text-white">
                    Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-6">
              <h3 className="text-xl font-bold text-white">Cost Breakdown</h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <p className="text-sm text-[#9eb7a8]">Entry Fee</p>
                  <p className="text-sm font-medium text-white">Ksh 1000</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <p className="text-sm text-[#9eb7a8]">
                    Accomodation (per night)
                  </p>
                  <p className="text-sm font-medium text-white">
                    Ksh 5000 - Ksh 10,000
                  </p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <p className="text-sm text-[#9eb7a8]">
                    Estimated Fare (per day)
                  </p>
                  <p className="text-sm font-medium text-white">
                    Ksh 3000 - Ksh 8000
                  </p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <p className="text-sm text-[#9eb7a8]">Total Estimates</p>
                  <p className="text-sm font-medium text-white">Ksh 10,000</p>
                </div>
              </div>
              <button className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#38e07b] py-3 text-sm font-bold text-[#111714]">
                <span className="material-symbols-outlined"> Get a Ride </span>
              </button>
            </div>
            
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-6">
              <h3 className="text-xl font-bold text-white">Details</h3>
              <div className="mt-4 space-y-4">
              <div className="flex justify-between border-t border-[#3d5245] pt-4">
                
                <p className="text-sm text-[#9eb7a8]">Opening Times</p>
                <p className="text-sm font-medium text-white">
                  Daily from 8:00am - 7:00pm
                </p>
              </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#29382f] bg-[#1a241f] p-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <span className="material-symbols-outlined text-[#9eb7a8]">
                    call
                  </span>
                  <p className="text-sm font-medium text-white">+254 722 123 456</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <span className=" text-[#9eb7a8]">
                    email
                  </span>
                  <p className="text-sm font-medium text-white">info@maasaimara.com</p>
                </div>
                <div className="flex justify-between border-t border-[#3d5245] pt-4">
                  <span className="material-symbols-outlined text-[#9eb7a8]">
                    Website
                  </span>
                  <p className="text-sm font-medium text-white">www.maasaimara.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
