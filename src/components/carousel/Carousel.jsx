import { useState } from "react";
import { BackIcon } from "../svg/hero-icon/BackIcon";
import { ForwardIcon } from "../svg/hero-icon/ForwardIcon";

export const Carousel = () => {

  const [post, setPost] = useState(0);

  const previousPost = () => {
    setPost((post) => {
      post === 0 ? slides.length - 1 : post -1;
    });
  };

  return (
    <div className="w-full flex-col flex justify-center items-center gap-4">
      <div
        className="bg-cover bg-center container max-w-[1216px] h-[700px] flex items-center justify-center relative rounded-[12px]"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOv1Sv0nZsc-7aG08OA0bM-c5I4UQcBj76wy1pKi0Bn21U-UsfiuD35-r5tZrTah4Ew8JEif8pV3i-KtHOZ~U-ag587jL4qM3y4YdvO8UP79kNEUuCRBTzzYDXUrmdXciuWsb9eTaGK0GJdHYeVaJWCl30rPRSUBvfXryRc~SSsND9Rx0DMciKWix0uBEAch94qBJ~-Y8RWL4O9UR1m~-tOCN-t4s4KHTc93XQx74nWmDCsOBsw6AqET2SBfeK~VMQmI~Q9~uzxHfTslPeK8iXLhnrBsZXX~13kXV-F9stsonWepo7UBThJCg6UJJifReHGW8PM5khO6WQ-y3siAww__`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="flex max-w-[598px] max-h-[252px] rounded-[12px] flex-col justify-center gap-[24px] bg-white p-[40px]">
            <div className="gap-[16px] flex flex-col">
              <div>
                {" "}
                <div className="bg-[#4B6BFB] text-white py-1 px-2 rounded-md inline-block">
                  Technology
                </div>
              </div>
              <div className=" text-[36px] font-semibold">
                Grid system for better Design User Interface
              </div>
            </div>
            <div className="text-gray-400">August 20, 2022</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full max-w-[1216px]">
        <div className="flex justify-between gap-4">
          <button onClick={previousPost}>
            {post}
            <BackIcon className="text-white" />
          </button>
          <button>
            <ForwardIcon className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
