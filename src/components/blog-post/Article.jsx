import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import Link from "next/link";

export const Article = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" max-w-[1216px] flex flex-col gap-[32px]">
        {" "}
        <div className="text-[24px] font-[700]">All Blog Post</div>
        <div className="flex justify-between">
          <div className="gap-5 flex">
            <button className="text-[12px] font-[700] text-[#D4A373]">
              All
            </button>
            <button className="text-[12px] font-[700] text-[#495057]">
              Design
            </button>
            <button className="text-[12px] font-[700] text-[#495057]">
              Travel
            </button>
            <button className="text-[12px] font-[700] text-[#495057]">
              Fashion
            </button>
            <button className="text-[12px] font-[700] text-[#495057]">
              Technology
            </button>
            <button className="text-[12px] font-[700] text-[#495057]">
              Branding
            </button>
          </div>
          <button className="text-[12px] font-[700] text-[#495057]">
            View All
          </button>
        </div>
        <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
          {articles.map((article) => {
            return (
              <Link href={`/${article.id}`}>
                <ArticleCard article={article} />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button className="pt-[12px] pr-[20px] pb-[12px] pl-[20px] border-2 rounded-[6px] mt-[50px] mb-[50px]">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};
