import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-[#111] min-h-screen mt-7">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base font-semibold leading-7 text-[#38e07b]">
              About Us
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Discover Kenya, Personalized.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/70">
              Tour List is your dedicated partner in uncovering the wonders of
              Kenya. Our platform is meticulously crafted to help you discover
              tourist and recreational facilities perfectly tailored to your
              preferences. We believe exploring Kenya's diverse landscapes and
              vibrant culture should be an accessible, seamless, and deeply
              personal adventure for everyone.
            </p>
          </div>

          {/* Vision & Purpose */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 text-justify">
                For discovering and booking unique travel experiences in Kenya,
                seamlessly connecting travelers with the very best local
                destinations, hidden gems, and unforgettable activities.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-lg border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Our Purpose</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 text-justify">
                We aim to provide a beautifully simple and personalized
                experience for finding and booking your ideal Kenyan adventure.
                Whether it's a breathtaking safari, a tranquil beach vacation,
                or an immersive cultural tour, we are here to make it happen.
                Our passionate team is committed to showcasing the unparalleled
                beauty and diversity of Kenya, while actively supporting local
                tourism and vital conservation efforts.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigate("/onboarding")}
              className="mt-6 px-6 py-3 rounded-full cursor-pointer bg-[#38e07b] text-[#111714] text-sm sm:text-base font-bold hover:bg-[#2fe074] transition-colors"
            >
              Start Exploring Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
