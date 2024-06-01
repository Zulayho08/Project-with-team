// Import
import { useNavigate } from "react-router-dom";

// Images
import logo from "../../Assets/Images/footer__logo.svg";
import img from "../../Assets/Images/insta.svg";
import img2 from "../../Assets/Images/icon__face.svg";
import img3 from "../../Assets/Images/icon__twit.svg";
import img4 from "../../Assets/Images/icon__tg.svg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="mt-0">
      <div className="m-auto w-[1920px] bg-[#F4F4F4]">
        <div className="w-[1280px] h-[337px] border border-[#56565633] rounded-[20px] m-auto bg-commonBg translate-y-36 shadow-2xl">
          <h6 className="font-roboto font-medium text-5xl text-center text-white mt-[70px]">
            Jurnalga obuna bo‘ling
          </h6>
          <p className="font-roboto font-normal text-base text-center text-white mt-5">
            chegirmalarni oling va yangi mahsulotlar haqida bilib oling
          </p>
          <form className="w-[1280px] text-center mt-10">
            <input
              type="email"
              className="w-[635px] h-[52px] bg-commonBg border border-[#F5EFDB80] rounded-[10px] pl-[19px] placeholder:font-medium placeholder:font-roboto text-base placeholder:text-white"
              placeholder="Email Address"
            />
            <button className=" w-[133px] h-[52px] rounded-[10px] border border-white text-white font-roboto font-bold text-base ml-8">
              Yuborish
            </button>
          </form>
        </div>
      </div>
      <div className="m-auto bg-commonBg">
        <div className="m-auto w-[1920px] bg-footerBg bg-no-repeat bg-right-bottom">
          <div className="w-[1280px] m-auto flex justify-between pt-48 mb-[107px]">
            {/* Footer__top */}
            <div className="">
              <img src={logo} alt="img" />
              <p className="w-[281px] font-roboto font-normal text-sm text-white opacity-80 mt-[30px]">
                Copyright © 1991 «Til va adabiyot ta’limi» – «Преподавание языка
                и литературы» – «Language and literature teaching»
              </p>
            </div>
            <ul className="list-none -ml-10">
              <li
                onClick={() => navigate("/about")}
                className="cursor-pointer mb-[30px] font-roboto font-normal text-[17px] text-white uppercase"
              >
                Adabiy taqvim
              </li>
              <li
                onClick={() => navigate("/journal")}
                className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white"
              >
                BOSMA NASHR
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Imtiyozlar
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Tanlovlar
              </li>
            </ul>
            <ul className="list-none -ml-10">
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Yangiliklar
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Tahririyat haqida
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                ELEKTRON JURNAL
              </li>
            </ul>
            <ul className="list-none -translate-x-20">
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Kitoblar
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Chegirmalar
              </li>
              <li className="cursor-pointer uppercase mb-[30px] font-roboto font-normal text-[17px] text-white">
                Imtiyozlar
              </li>
            </ul>
          </div>
          <hr className="bg-white opacity-10" />
          <div className="w-[1280px] m-auto flex justify-between mt-[43px] pb-[52px]">
            <div className="w-[426px]">
              <p className="font-roboto font-normal text-sm text-white opacity-80 w-64">
                Illustration graphic art design format Public domain license
              </p>
            </div>
            <div className="w-[352px] flex justify-between -ml-40">
              <div className="w-[73px] h-[73px] bg-[#ffffff1c] rounded-[50px] flex justify-center items-center">
                <img src={img2} width={12.39} height={24} alt="img" />
              </div>
              <div className="w-[73px] h-[73px] bg-[#ffffff1c] rounded-[50px] flex justify-center items-center">
                <img src={img} alt="img" />
              </div>
              <div className="w-[73px] h-[73px] bg-[#ffffff1c] rounded-[50px] flex justify-center items-center">
                <img src={img3} alt="img" />
              </div>
              <div className="w-[73px] h-[73px] bg-[#ffffff1c] rounded-[50px] flex justify-center items-center">
                <img src={img4} alt="img" />
              </div>
            </div>
            <div className="">
              <p className="font-roboto font-normal text-sm text-right text-white opacity-80 w-[228px]">
                Illustration graphic art design format Public domain license
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
