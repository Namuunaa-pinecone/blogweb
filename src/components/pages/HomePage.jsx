import { Article } from "../blog-post/Article";
import { Carousel } from "../carousel/Carousel";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="bg-white flex flex-col gap-[80px]">
      <Carousel />
      <Trending />
      <Article />
    </div>
  );
}
