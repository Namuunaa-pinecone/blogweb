import { FbIcon } from "../svg/footer-icon/FbIcon";
import { IgIcon } from "../svg/footer-icon/IgIcon";
import { LinkdnIcon } from "../svg/footer-icon/LinkdnIcon";
import { TwitterIcon } from "../svg/footer-icon/TwitterIcon";
import { MetaIcon } from "../svg/header-icon/MetaIcon";

export const Footer = () => {
  return (
    <div className="w-full pt-[64px] gap-25px] bg-[#f6f6f7] flex justify-center items-center">
      <div className="flex flex-col justify-center container max-w-[1216px]">
        <div className="gap-[20px] flex ">
          <div className="max-w-[289px] flex flex-col  gap-[16px] pl-[50px]">
            <div>About</div>
            <div >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div>
              <div>Email : info@jstemplate.net</div>
              <div>Phone : 880 123 456 789</div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px] pl-[200px] pr-[200px]">
            <div>Home</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
          <div className="flex gap-[16px]">
            <FbIcon />
            <TwitterIcon />
            <IgIcon />
            <LinkdnIcon />
          </div>
        </div>
        <div className="w-full flex justify-between p-[50px]">
          <div>
            <MetaIcon/>
          </div>
          <div className="gap-[40px] flex pr-[20px]">
            <div>Term of use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};
