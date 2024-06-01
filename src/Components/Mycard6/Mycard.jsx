import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import Sonka from "../../Assets/Images/sonka.png";
import Profil6 from "../Profil6/Profil6";

const Mycard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[1280px] justify-between m-auto  flex pt-[25px] items-center">
      <Profil6 />

      <div
        className="w-[908px] h-[746px] p-[45px] rounded-[20px] bg-white"
        style={{ boxShadow: "0px 4px 30px 0 rgba(187,35,57,0.15)" }}
      >
        <h1 className="text-[40px] font-medium text-left text-[#333]">
          My Cart
        </h1>
        <p className="w-[328px]  text-lg text-left capitalize text-[#53b164]">
          Hozircha savatga boring. Agar biror narsaga buyurtma berishni
          istasangiz, quyidagi buyurtma tugmasini bosing
        </p>
        <img
          src={Sonka}
          className="w-[482px] ml-[65px] h-[482px] opacity-40 object-cover"
        />
        <div className="flex flex-col justify-center items-center  relative px-8 py-2 rounded-[10px] bg-[#53b164] border border-[#53b164]">
          <button
            onClick={() => navigate("/profile/mycard")}
            className="flex-grow-0  flex-shrink-0 text-base font-bold text-left text-white"
          >
            Hoziroq buyurtma bering
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
