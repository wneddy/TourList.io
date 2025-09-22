import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import MainFeed from "./MainFeed";
import Footer from "../Footer";
import { destination } from "../../data/destination";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Feed() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const [results, setResults] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  // ✅ Toggle favorites
  function toggleFavorite(placeId) {
    setFavorites((prev) =>
      prev.includes(placeId)
        ? prev.filter((id) => id !== placeId)
        : [...prev, placeId]
    );
  }

  // ✅ Handle explore navigation
  function handleExplore(place) {
    navigate(`/explore/${place.id}`, { state: { place } });
  }

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setLoading(true);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `
          You are a travel recommender.
          The user gave these answers: 
          ${JSON.stringify(answers, null, 2)}

          Here is the dataset of destinations: 
          ${JSON.stringify(destination, null, 2)}

          Task: Recommend 24 destinations from the dataset only.
          The selection should match the user's preference (budget, time, distance, activities, vibe).
          Return ONLY a valid JSON array of IDs like: [1, 5, 7, 12]
        `;

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        const jsonMatch = text.match(/\[.*\]/s);
        if (!jsonMatch) throw new Error("No JSON array found in response");

        let ids = [];
        try {
          ids = JSON.parse(jsonMatch[0]);
        } catch {
          return;
        }

        const recommended = destination.filter((d) => ids.includes(d.id));
        setResults(recommended);
      } catch (error) {
        console.error("Error fetching AI recommendations:", error);
        setResults(destination.slice(0, 8));
      } finally {
        setLoading(false);
      }
    }

    if (answers) fetchRecommendations();
  }, [answers]);

  const filteredResults = results.filter((place) => {
    if (
      activeCategory &&
      !place.activities.some((a) =>
        a.toLowerCase().includes(activeCategory.toLowerCase())
      )
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex bg-[#111111] justify-center items-center h-screen text-white px-4">
          <p className="text-lg sm:text-xl text-center leading-relaxed">
            Fetching your recommendations...
          </p>
        </div>
      ) : (
        <MainFeed
          destinations={filteredResults}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          clearFilters={() => setActiveCategory(null)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onExplore={handleExplore}
        />
      )}
      <Footer />
    </>
  );
}
