import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Details from "./Details";
import Footer from "../Footer";
import { destination } from "../../data/destination";

export default function Explore() {
  const { id } = useParams();
  const location = useLocation();

  const place = location.state?.place || destination.find((d) => d.id === Number(id));

  if (!place) {
    return (
      <main className="bg-[#111] min-h-screen flex items-center justify-center text-white">
        <p>Destination not found.</p>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Details place={place} />
      <Footer />
    </main>
  );
}
