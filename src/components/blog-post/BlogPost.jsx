import React from "react";

const posts = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dTRpmv4H~YaYp9yqW55wHskTUIdnvaz9bEbXwc-B8jxv05UJ1eG8by5NRc8vJXVU0SunHBf2P0Ibzde451mBYhMGRlmze3OKAYNjZgg2WfO~79WZ5mI~fwytg0OdqgRPiWVPGNpG6Yvch-f9HHf0CyakbdFhuJcGs4g62Y8prYafHwGHwZlnp81n9Pt1MMCO47NXUzAsrnlkNPy3Nnuek58~tNM5aQlk7RXzFh-4ctpYwXC3Qa0I-w~7jxkfZSYFL~6gIonMDbf9stC9wnoJAlhiwutJi4DLoE3kOp71yZ1ASTc8tVVeKWxA0eAaC2u7~AXfIz3qHNt7LCs3sunPFA__",
    tag: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const Post = ({ title, image, tag, date }) => (
  <div className="border-2 max-w-[392px] p-[16px] rounded-[12px] gap-[16px] flex flex-col">
    <img src={image} alt={title} className="w-full h-auto mb-[16px]" />
    <div className="pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-[#4B6BFB0D] rounded-[6px] text-blue-600">
      {tag}
    </div>
    <div className="text-[24px] font-[600]">{title}</div>
    <div>{date}</div>
  </div>
);

export const BlogPost = () => (
  <div className="w-full flex justify-center pt-8 pb-8">
    <div className="container max-w-[1216px] flex flex-col gap-[32px]">
      <div className="text-[24px] font-[700]">All Blog Post</div>
      <div className="flex justify-between">
        <div className="gap-5 flex">
          <button className="text-[12px] font-[700] text-[#D4A373]">All</button>
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
      <div className="flex gap-5 flex-wrap justify-between">
        {posts.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
            tag={post.tag}
            date={post.date}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="pt-[12px] pr-[20px] pb-[12px] pl-[20px] border-2 rounded-[6px]">
          Load more
        </button>
      </div>
    </div>
  </div>
);
