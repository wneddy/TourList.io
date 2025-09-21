import { useNavigate } from "react-router-dom";


export default function Hero() {

  const navigate = useNavigate();

  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%),
      url('./src/assets/hero-nature.jpg')`,
      }}
    >
      <div className="relative flex flex-col text-white justify-center items-center ">
        <h2 className="text-6xl font-bold text-center">
          Discover Kenya's Hidden Gems
        </h2>
        <p className="text-white/90 mx-auto max-w-3xl text-center md:text-xl mt-3">
          Explore curated tours and recreational facilities tailored to your
          prefrence. Start your unforgettable adventure today!
        </p>
        <button
          onClick={() => navigate("/onboarding")}
          className="min-w-[84px] max-w-[480px] bg-[#38e07b] text-[#111714] h-10 px-5 mt-10 cursor-pointer font-bold rounded-full hover:bg-[#2fe074] transition-transform transform animate-fade-in-up">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}
