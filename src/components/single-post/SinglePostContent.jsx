export const SinglePostContent = ({ articles }) => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="container max-w-[1216px] pb-[50px]">
        <div className="gap-[20px] flex flex-col pl-[208px] pr-[208px] justify-center ">
          <div className="text-[36px] max-w-[800px] font-[600]">
            {articles.title}
          </div>
          <div className="flex gap-[24px] ">
            <div className="flex gap-[8px]">
              <img
                src={articles.user?.profile_image}
                alt=""
                className="max-w-[28px] max-h-[28px] rounded-[50%]"
              />
              <div className="text-[#696A75]">{articles.user?.name}</div>
            </div>
            <div className="text-[#696A75]">{articles?.readable_publish_date}</div>
          </div>
          <div>
            <img
              src={articles?.cover_image}
              alt=""
              className="rounded-[12px] w-full h-[462px] "
            />
          </div>
          <div className="text-[#3B3C4A]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </div>
          <div className="text-[#3B3C4A]">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </div>
          <div className="text-[24px] font-[600]">
            Research Your Destination
          </div>
          <div className="text-[#3B3C4A]">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </div>
          <div className="text-[#3B3C4A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </div>
          <div className="text-[24px] font-[600]">Plan Your Itenary</div>
          <div className="text-[#3B3C4A]">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </div>
          <div className="text-[#3B3C4A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor.
          </div>
        </div>
      </div>
    </div>
  );
};
