import React, { useState, useEffect } from "react";
import { ArticleCard } from "./TrendingArticleCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4$$top=1")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-[30px]">
        <div className="text-[24px] font-[700]">Trending</div>
        <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
