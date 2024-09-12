import { MetaIcon } from "../svg/header-icon/MetaIcon";
import { SearchIcon } from "../svg/header-icon/SearchIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[32px] bg-white">
      <div className="flex container max-w-[1216px] justify-between items-center">
        <MetaIcon />
        <div className="flex gap-[40px]">
          <Link href="/">Home</Link>
          <Link href="/blog-listing">Blog</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <button className="flex items-center gap-[12px] rounded-[5px] py-[8px] px-[16px] bg-gray-200">
          <input type="text" placeholder="Search`" />
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
