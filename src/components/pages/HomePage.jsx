import { Article } from "../blog-post/Article";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="bg-white flex flex-col gap-[80px]">
      <Header />
      <Carousel />
      <Trending />
      <Article />
      <Footer />
    </div>
  );
}
