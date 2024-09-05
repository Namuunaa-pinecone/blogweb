import { useEffect, useState } from "react";
import Link from 'next/link';

const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);

  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };

  return (
    <div className="w-[392px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div
          style={{
            backgroundImage: `url(${article.cover_image})`,
            width: "100%",
            height: "240px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        ></div>
        <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
          {article.tag_list[0]}
        </div>
        <div className="overflow-hidden h-[100px]">
          <p className="text-2xl font-semibold text-ellipsis ">
            {article.description}
          </p>
        </div>
      </div>

      <p className=" text-[#97989F]">
        {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}-
        {publishedDate.getDay()}
      </p>
    </div>
  );
};

export default function Article() {
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
}
