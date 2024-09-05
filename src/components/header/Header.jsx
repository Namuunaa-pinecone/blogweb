import { MetaIcon } from "../svg/header-icon/MetaIcon";
import { SearchIcon } from "../svg/header-icon/SearchIcon";

export const Header = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-[32px] bg-white">
      <div className="flex container max-w-[1216px] justify-between items-center">
        <MetaIcon />
        <div className="flex gap-[40px]">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <button className="flex items-center gap-[12px] rounded-[5px] py-[8px] px-[16px] bg-gray-200">
          <div>Search</div>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
