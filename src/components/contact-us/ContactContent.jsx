const ContactContent = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container max-w-[1920px] flex justify-center items-center">
        <div className="max-w-[895px] pb-[150px]">
          <div className="flex justify-center flex-col gap-[20px] pb-[45px]">
            <div className="pt-[14px]  pr-[10px]  pl-[10px] max-w-[624px] gap-[20px] flex flex-col">
              <div className="text-[36px] font-[600]">Contact us</div>
              <div className="text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </div>
            </div>
            <div className="inline-flex gap-[50px] pt-[10px] pb-[10px] justify-center ">
              <div className="border border-[#E8E8EA] w-[294px] max-h-[133px] rounded-[12px] p-[16px] gap-[10px] flex flex-col ">
                <div className="text-[24px] font-[600]">Address</div>
                <div className="text-[#696A75]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </div>
              </div>
              <div className="border border-[#E8E8EA] w-[294px] max-h-[133px] rounded-[12px] p-[16px] gap-[10px] flex flex-col">
                <div className="text-[24px] font-[600]">Contact</div>
                <div className="text-[#696A75] max-w-[160px]">
                  313-332-8662 info@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col gap-[20px] bg-[#F6F6F7] pb-[60px] rounded-[10px]">
            <div className="pt-[29px] pl-[35px] gap-[24px] flex flex-col">
              <div className="text-[18px] font-[600]">Leave a message</div>
              <div className="flex flex-col gap-[24px]">
                <div className="gap-[30px] inline-flex">
                <input type="text" placeholder="Your name" className="pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-[225px] h-[38px] rounded-[5px] border border-[#DCDDDF]"/>
                <input type="text" placeholder="Your email" className="pt-[14px] pr-[14px] pb-[14px] pl-[20px] w-[225px] h-[38px] rounded-[5px] border border-[#DCDDDF]" />
                </div>
                <input type="text" placeholder="Subject" className="pt-[14px] pr-[14px] pb-[14px] pl-[20px] max-w-[478px] h-[38px] rounded-[5px] border border-[#DCDDDF]"/>
                <input type="text" placeholder="Write a message" className="pt-[14px] pr-[14px] pb-[14px] pl-[20px] max-w-[478px] h-[134px] rounded-[5px] border border-[#DCDDDF]" />
                <button className="text-[14px] text-white bg-[#4B6BFB] pt-[10px] pr-[16px] pb-[10px] pl-[16px] rounded-[6px] max-w-[130px]">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
