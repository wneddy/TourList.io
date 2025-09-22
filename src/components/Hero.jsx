import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-6 mt-10"
      style={{
        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%),
        url('./hero-nature.jpg')`,
      }}
    >
      <div className="relative flex flex-col text-white justify-center items-center text-center max-w-3xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Discover Kenya&apos;s Hidden Gems
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
          Explore curated tours and recreational facilities tailored to your
          preference. Start your unforgettable adventure today!
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/onboarding")}
          className="mt-6 cursor-pointer sm:mt-8 w-auto min-w-[120px] bg-[#38e07b] text-[#111714] py-2 px-4 text-sm sm:text-base font-bold rounded-full hover:bg-[#2fe074] transition-colors"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
