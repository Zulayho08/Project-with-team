// Import

// Images
import img from "../../Assets/Images/phone.svg";
import img2 from "../../Assets/Images/mail.svg";
import img3 from "../../Assets/Images/004-instagram.svg";
import img4 from "../../Assets/Images/tg.svg";
import img5 from "../../Assets/Images/facebook.svg";
import img6 from "../../Assets/Images/map.png";

export default function Wrapper() {
  return (
    <>
      <div className="m-auto w-[1920px] mt-40">
        <div className="w-[1280px] h-[1319px] m-auto">
          <div>
            <h5 className="font-semibold text-[40px] font-roboto leading-[38px] text-[#242424] mb-[17px]">
              Biz bilan bog’lanish
            </h5>
            <hr className="w-[106px] h-1 bg-[#242424] border-none" />
            <div className="w-[1280px] flex justify-between mt-8">
              <ul className="list-none">
                <li className="flex w-[407px] h-[110px] border border-[#3333331A] rounded-[10px] bg-white mb-[15px]">
                  <div className="w-[60px] h-[60px] bg-[#F4F4F4] rounded-[50px] flex items-center justify-center ml-5 mt-[25px]">
                    <img src={img} alt="img" />
                  </div>
                  <div className="mt-[29px] ml-7">
                    <h5 className="font-roboto font-normal text-[22px] leading-[34px] text-[#333333] mb-0">
                      Phone Number
                    </h5>
                    <a
                      className="font-roboto font-bold text-[14px] leading-[16.41px] text-[#333333] mt-0 opacity-70"
                      href="tel:+998 94 625 85 24"
                    >
                      +998 94 625 85 24
                    </a>
                  </div>
                </li>
                <li className="flex w-[407px] h-[110px] border border-[#3333331A] rounded-[10px] bg-white mb-[15px]">
                  <div className="w-[60px] h-[60px] bg-[#F4F4F4] rounded-[50px] flex items-center justify-center ml-5 mt-[25px]">
                    <img src={img2} alt="img" />
                  </div>
                  <div className="mt-[29px] ml-7">
                    <h5 className="font-roboto font-normal text-[22px] leading-[34px] text-[#333333] mb-0">
                      Email Address
                    </h5>
                    <a className="font-roboto font-bold text-[14px] leading-[16.41px] text-[#333333] mt-0 opacity-70">
                      logeekascience@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex w-[407px] h-[110px] border border-[#3333331A] rounded-[10px] bg-white mb-[15px]">
                  <div className="w-[60px] h-[60px] bg-[#F4F4F4] rounded-[50px] flex items-center justify-center ml-5 mt-[25px]">
                    <img src={img3} alt="img" />
                  </div>
                  <div className="mt-[29px] ml-7">
                    <h5 className="font-roboto font-normal text-[22px] leading-[34px] text-[#333333] mb-0">
                      Instagram
                    </h5>
                    <a className="font-roboto font-bold text-[14px] leading-[16.41px] text-[#333333] mt-0 opacity-70">
                      logeekascience
                    </a>
                  </div>
                </li>
                <li className="flex w-[407px] h-[110px] border border-[#3333331A] rounded-[10px] bg-white mb-[15px]">
                  <div className="w-[60px] h-[60px] bg-[#F4F4F4] rounded-[50px] flex items-center justify-center ml-5 mt-[25px]">
                    <img src={img4} alt="img" />
                  </div>
                  <div className="mt-[29px] ml-7">
                    <h5 className="font-roboto font-normal text-[22px] leading-[34px] text-[#333333] mb-0">
                      Telegram
                    </h5>
                    <a className="font-roboto font-bold text-[14px] leading-[16.41px] text-[#333333] mt-0 opacity-70">
                      Logeekascince
                    </a>
                  </div>
                </li>
                <li className="flex w-[407px] h-[110px] border border-[#3333331A] rounded-[10px] bg-white mb-[15px]">
                  <div className="w-[60px] h-[60px] bg-[#F4F4F4] rounded-[50px] flex items-center justify-center ml-5 mt-[25px]">
                    <img src={img5} alt="img" />
                  </div>
                  <div className="mt-[29px] ml-7">
                    <h5 className="font-roboto font-normal text-[22px] leading-[34px] text-[#333333] mb-0">
                      Facebook
                    </h5>
                    <a className="font-roboto font-bold text-[14px] leading-[16.41px] text-[#333333] mt-0 opacity-70">
                      Logeekascince
                    </a>
                  </div>
                </li>
              </ul>
              <div className="w-[770px] h-[610px] bg-white border border-[#3333331A] rounded-[10px]">
                <div className="ml-10 mt-10">
                  <h5 className="font-roboto font-normal text-[38px] text-[#333333]">
                    Send Messege
                  </h5>
                  <p className="w-[565px] font-roboto font-bold text-base text-[#333333] opacity-70">
                    If you have any questions, you can send us an SMS or contact
                    us by phone you can also contact us via social networks.
                  </p>
                  <form className="flex w-[690px] flex-wrap justify-between mt-10">
                    <input
                      type="text"
                      className="w-[335px] h-[58px] pl-5 border border-[#3333331A] rounded-[10px] bg-white placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-[#333333] opacity-50 mb-[15px]"
                      placeholder="Your name"
                    />
                    <input
                      type="email"
                      className="w-[335px] h-[58px] pl-5 border border-[#3333331A] rounded-[10px] bg-white placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-[#333333] opacity-50 mb-[15px]"
                      placeholder="Email address"
                    />

                    <input
                      type="tel"
                      className="w-[335px] h-[58px] pl-5 border border-[#3333331A] rounded-[10px] bg-white placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-[#333333] opacity-50 mb-[15px]"
                      placeholder="Phone number"
                    />
                    <input
                      type="text"
                      className="w-[335px] h-[58px] pl-5 border border-[#3333331A] rounded-[10px] bg-white placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-[#333333] opacity-50 mb-[15px]"
                      placeholder="Telegram"
                    />
                    <textarea className="w-[690px] h-[150px] border border-[#3333331A] rounded-[10px] placeholder:font-roboto placeholder:font-bold placeholder:text-base placeholder:text-[#333333] opacity-50"></textarea>
                    <button className="bg-[#53B164] w-[209px] h-[57px] rounded-[10px] font-roboto font-bold text-lg text-white mt-[25px]">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end of top */}
          <div className="mt-[43px]">
            <img
              className="map__right--img"
              src={img6}
              alt="img"
              useMap="#map"
              width={1280}
              height={560}
            />
            <map name="map">
              <area
                shape={"rect"}
                coords={"34, 44, 270, 350, 0, 100, 50, 20, 200, 150, 88"}
                href={
                  "https://www.google.com/maps/@37.535616,67.4522652,10087m/data=!3m1!1e3?entry=ttu"
                }
                alt="img"
              />
            </map>
          </div>
        </div>
      </div>
    </>
  );
}
