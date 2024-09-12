export const ArticleCard = ({ article }) => {
    return (
      <div className="w-[289px] h-[320px] rounded-[12px] flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          {/* Container for background image and tag */}
          <div className="relative w-full h-[320px] bg-cover bg-center rounded-[6px] overflow-hidden">
            {/* Background image */}
            <div
              className="w-full h-full"
              style={{ backgroundImage: `url(${article.cover_image})` }}
            >
              {/* Flex container for overlaying tag */}
              <div className="flex justify-center">
                <div className="flex flex-col  pt-[150px] max-w-[230px]">
                  <div className="flex items-start justify-start p-2">
                    {article.tag_list[0] && (
                      <div className="bg-[#4B6BFB] text-white px-2 py-1 rounded-md text-sm">
                        {article.tag_list[0]}
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-start p-2">
                    <p className="text-[14px] text-white font-[600] text-ellipsis">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };