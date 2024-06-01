// Images
import img from "../../Assets/Images/hero.png";
import img2 from "../../Assets/Images/clock.svg";
import img3 from "../../Assets/Images/hero2.png";
import eye from "../../Assets/Images/eye.svg";
import i from "../../Assets/Images/i.png";

export default function Hero() {
  return (
    <div className="flex justify-between m-auto w-[1280px] pb-20">
      <div className=" w-[516px] bg-white ">
        <img src={img} alt="img" />
        <h1 className="w-[467px] font-roboto font-semibold text-[22px] leading-[36px] ml-6 mt-8">
          What it means for a woman to be cut – and will FGM end any time
        </h1>
        <p className="w-[444px] text-textColor font-roboto font-normal text-base leading-[24px] ml-6 mt-3">
          Prince Charles welcomed his mother's wish that Camilla, Duchess of
          Cornwall, be known as Queen Consort when he...
        </p>

        <div className="mt-6 mb-5 ml-6 flex w-[215px] justify-between">
          <input
            type="date"
            className="w-[84px] flex-row-reverse text-xs font-normal font-roboto text-textColor"
            max="2020-06-03"
            value="2022-06-02"
          />
          <div className="flex items-center justify-between">
            <img src={img2} alt="img" className="text-textColor" />
            <span className="text-textColor text-xs font-roboto font-normal ml-1">
              11:15
            </span>
          </div>
          <div className="flex items-center justify-between">
            <img src={eye} alt="img" />
            <span className="text-textColor text-xs font-roboto font-normal ml-1">
              222
            </span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="">
        <div className="flex rounded-md w-[734px] bg-white ">
          <img src={i} alt="img" className="" />
          <div className="">
            <h2 className="w-[356px] font-roboto font-semibold text-[22px] leading-[36px] ml-5 mt-6">
              Prince Charles leads Jubilee tributes to 'remarkable' Queen
            </h2>
            <p className="w-[357px] text-textColor font-roboto font-normal text-base leading-[24px] ml-5 mt-3">
              Prince Charles welcomed his mother's wish that Camilla, Duchess of
              Cornwall, be known as Queen Consort when he becomes King...
            </p>

            <div className="mt-6 mb-5 ml-5 flex w-[215px] justify-between">
              <input
                type="date"
                className="w-[84px] text-xs font-normal font-roboto text-textColor"
                max="2020-06-03"
                value="2022-06-02"
              />
              <div className="flex items-center justify-between">
                <img src={img2} alt="img" className="text-textColor" />
                <span className="text-textColor text-xs font-roboto font-normal ml-1">
                  11:15
                </span>
              </div>
              <div className="flex items-center justify-between">
                <img src={eye} alt="img" />
                <span className="text-textColor text-xs font-roboto font-normal ml-1">
                  222
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex rounded-md w-[734px] bg-white mt-7">
          <img src={img3} alt="img" className="" />
          <div className="">
            <h2 className="w-[356px] font-roboto font-semibold text-[22px] leading-[36px] ml-5 mt-6">
              Prince Charles leads Jubilee tributes to 'remarkable' Queen
            </h2>
            <p className="w-[357px] text-textColor font-roboto font-normal text-base leading-[24px] ml-5 mt-3">
              Prince Charles welcomed his mother's wish that Camilla, Duchess of
              Cornwall, be known as Queen Consort when he becomes King...
            </p>

            <div className="mt-6 mb-5 ml-5 flex w-[215px] justify-between">
              <input
                type="date"
                className="w-[84px] text-xs font-normal font-roboto text-textColor"
                max="2020-06-03"
                value="2022-06-02"
              />
              <div className="flex items-center justify-between">
                <img src={img2} alt="img" className="text-textColor" />
                <span className="text-textColor text-xs font-roboto font-normal ml-1">
                  11:15
                </span>
              </div>
              <div className="flex items-center justify-between">
                <img src={eye} alt="img" />
                <span className="text-textColor text-xs font-roboto font-normal ml-1">
                  222
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
