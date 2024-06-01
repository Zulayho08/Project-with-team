import React from "react";
import Profil from "../Profil6/Profil6";

const Obuna = () => {
  return (
    <div className="w-[1280px] justify-between m-auto  flex pt-[25px] items-center">
      <Profil />

      <div
        className=" w-[908px] h-[746px] p-3.5  rounded-[20px] bg-white"
        style={{ boxShadow: "0px 4px 30px 0 rgba(187,35,57,0.15)" }}
      >
        <div className="w-[458px] h-[302px]   p-[20px] rounded-[10px] bg-white border border-[#0075ff]/30">
          <h3 className="text-2xl font-bold  text-left top-[5rem] text-[#005f11]">
            1 yillik obuna Imtiyozli narxda !
          </h3>
          <p className="w-[342px] opacity-70  pt-[20px]    text-sm text-left text-[#005f11]">
            - Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от
            года...
          </p>
          <p className="text-[17px] pt-[50px]   text-left text-[#00991c]">
            <span className="text-[17px] font-bold text-left text-[#00991c]">
              10 000 000 uzs dan – 8 000 000 uzs{" "}
            </span>
            <span className="text-[17px] text-left text-[#00991c]">gacha</span>
          </p>
          <hr className="text-[#0075FF] mt-4" />
          <button className="mt-5 w-[190px] h-[50px] text-center top-[695px] text-[17px]  rounded-[10px] bg-[#1d7f0e] font-semibold  text-[#ffffff]">
            Obuna bolish
          </button>
        </div>
        <br />
        <br />
        <div className="w-[458px] h-[302px]  p-[20px] rounded-[10px] bg-white border border-[#0075ff]/30">
          <h3 className="text-2xl font-bold text-left top-[20px] text-[#005f11]">
            6 oylik obuna Imtiyozli narxda !
          </h3>
          <p className="w-[342px] opacity-70 text-sm pt-[20px] text-left text-[#005f11]">
            - Опыт работы дизайнером (веб, десктоп или мобильных интерфейсов) от
            года...
          </p>
          <p className="text-[17px]  pt-[45px]  text-left text-[#00991c]">
            <span className="text-[17px]    font-bold text-left text-[#00991c]">
              10 000 000 uzs dan – 4000 000 uzs{" "}
            </span>
            <span className="text-[17px] text-left text-[#00991c]">gacha</span>
          </p>
          <hr className="text-[#0075FF] mt-4" />
          <button className="mt-5 w-[190px] h-[50px] text-center top-[695px] text-[17px]  rounded-[10px] bg-[#1d7f0e] font-semibold  text-[#ffffff]">
            Obuna bolish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Obuna;
