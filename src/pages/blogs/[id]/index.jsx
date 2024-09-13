import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { SinglePostContent } from "@/components/single-post/SinglePostContent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const router = useRouter();
  const [articles, setArticles] = useState({});

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex bg-white gap-[80px] flex-col">
      {/* <p>{articles.title}</p> */}
      <Header/>
      <SinglePostContent articles={articles} />
      <Footer/>
    </div>
  );
};

export default SinglePost;
