import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { SinglePostContent } from "../single-post/SinglePostContent";

export const SinglePost = () => {
  return (
    <div className="bg-white">
      <Header />
      <SinglePostContent />
      <Footer />
    </div>
  );
};
