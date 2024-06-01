import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Slider from "react-slick";
import Adabiyot from "../../Assets/Images/adabiyot.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import img from "../../Assets/Images/sidebar.png";
import img2 from "../../Assets/Images/arrow.svg";
import img3 from "../../Assets/Images/arrow2.svg";
import pic from "../../Assets/Images/download.svg";
import img4 from "../../Assets/Images/sidebar__img.png";

const Sidebar1_2 = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-[1280px] flex flex-col m-auto pt-[25px] items-center">
      <h3 className="font-roboto font-semibold text-[40px] leading-[38px] text-[#242424] bg-colorGrey w-[1280px] text-center mb-14">
        Kitoblar
      </h3>

      <Slider ref={sliderRef} {...settings} className="w-full">
        <div className="w-[298px] h-[417px] p-4 list-none">
          <div className="p-5 bg-white rounded-md border-[#3333331A] border">
            <img src={img4} width={258} alt="img" />
            <h4 className="font-roboto font-semibold text-lg text-[#242424] mt-3 leading-6 mb-2">
              Saodat Asri Qissalari
            </h4>
            <p className="font-roboto font-normal text-sm text-[#18181899] leading-[16.41px] mb-2">
              Artikul: Yo'q
            </p>
            <div className="w-[258px] flex justify-between items-center">
              <span className="font-normal text-sm text-[#18181899]">
                1-aprel 12:30
              </span>
              <img src={pic} alt="pic" />
            </div>
          </div>
        </div>
        <div className="w-[298px] h-[417px] p-4 list-none">
          <div className="p-5 bg-white rounded-md border-[#3333331A] border">
            <img src={img4} width={258} alt="img" />
            <h4 className="font-roboto font-semibold text-lg text-[#242424] mt-3 leading-6 mb-2">
              Saodat Asri Qissalari
            </h4>
            <p className="font-roboto font-normal text-sm text-[#18181899] leading-[16.41px] mb-2">
              Artikul: Yo'q
            </p>
            <div className="w-[258px] flex justify-between items-center">
              <span className="font-normal text-sm text-[#18181899]">
                1-aprel 12:30
              </span>
              <img src={pic} alt="pic" />
            </div>
          </div>
        </div>
        <div className="w-[298px] h-[417px] p-4 list-none">
          <div className="p-5 bg-white rounded-md border-[#3333331A] border">
            <img src={img4} width={258} alt="img" />
            <h4 className="font-roboto font-semibold text-lg text-[#242424] mt-3 leading-6 mb-2">
              Saodat Asri Qissalari
            </h4>
            <p className="font-roboto font-normal text-sm text-[#18181899] leading-[16.41px] mb-2">
              Artikul: Yo'q
            </p>
            <div className="w-[258px] flex justify-between items-center">
              <span className="font-normal text-sm text-[#18181899]">
                1-aprel 12:30
              </span>
              <img src={pic} alt="pic" />
            </div>
          </div>
        </div>
        <div className="w-[298px] h-[417px] p-4 list-none">
          <div className="p-5 bg-white rounded-md border-[#3333331A] border">
            <img src={img4} width={258} alt="img" />
            <h4 className="font-roboto font-semibold text-lg text-[#242424] mt-3 leading-6 mb-2">
              Saodat Asri Qissalari
            </h4>
            <p className="font-roboto font-normal text-sm text-[#18181899] leading-[16.41px] mb-2">
              Artikul: Yo'q
            </p>
            <div className="w-[258px] flex justify-between items-center">
              <span className="font-normal text-sm text-[#18181899]">
                1-aprel 12:30
              </span>
              <img src={pic} alt="pic" />
            </div>
          </div>
        </div>
      </Slider>
      <div className="w-[1250px] flex justify-between mt-8">
        <div className="flex w-[116px] justify-between">
          <div
            onClick={handleNext}
            className="cursor-pointer w-12 h-12 bg-[#C8DACB] rounded-[10px] flex justify-center"
          >
            <img src={img2} width={24} height={24} alt="img" />
          </div>
          <div
            onClick={handleNext}
            className="cursor-pointer w-12 h-12 border border-[#C8DACB] rounded-[10px] flex justify-center"
          >
            <img src={img3} width={24} height={24} alt="img" />
          </div>
        </div>
        <button
          onClick={() => navigate("/books")}
          className="px-8 py-3 rounded-[10px] border border-[#81c88e] text-lg font-bold text-[#53b164]"
        >
          Yana ko’rsatish
        </button>
      </div>
    </div>
  );
};

export default Sidebar1_2;
