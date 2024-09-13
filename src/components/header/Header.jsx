import { useEffect, useState } from "react";
import { MetaIcon } from "../svg/header-icon/MetaIcon";
import { SearchIcon } from "../svg/header-icon/SearchIcon";
import Link from "next/link";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);

  const filteredArticles = articlesForSearch.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const fetchSearchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };

  useEffect(() => {
    fetchSearchData();
    setSearchValue("");
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center py-[32px] relative">
      <div className="flex container max-w-[1216px] justify-between items-center">
        <MetaIcon />
        <div className="flex gap-[40px]">
          <Link href="/">Home</Link>
          <Link href="/blog-listing">Blog</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <div>
          <button className="flex items-center rounded-[5px] py-[8px] px-[16px] bg-gray-200">
            <input className="bg-gray-200"
              onChange={handleInputChange}
              type="text"
              placeholder="Search"
            />
            <div></div>
            <SearchIcon />
          </button>
          {searchValue && (
            <SearchDropDown 
            searchValue={searchValue}
            filteredArticles={filteredArticles} />
          )}
        </div>
      </div>
    </div>
  );
};

const SearchDropDown = ({ filteredArticles, searchValue }) => {
  filteredArticles.length = 4;
  return (
    <div
  className={`${
    searchValue ? "h-[200px]" : "h-0"
  } flex flex-col gap-2 transition-all duration-200 overflow-hidden absolute `}
>
      {filteredArticles?.map((article) => {
        return (
          <Link href={`blogs/${article?.id}`}>
            <div>{article?.title}</div>
          </Link>
        );
      })}
    </div>
  );
};
