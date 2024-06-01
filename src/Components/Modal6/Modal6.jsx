import React from "react";
import { useNavigate } from "react-router-dom";

const Modal6 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="w-[640px] h-[434px] rounded-[10px] bg-white p-6 flex flex-col items-center">
        <h1 className="text-[40px] font-medium text-center text-[#00302e] mb-4">
          Parolni kiriting
        </h1>
        <p className="w-[464px] text-sm text-center text-black mb-4">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard
        </p>
        <span className="text-2xl text-center text-[#00302e] mb-4">
          +998 9x xxx xx xx
        </span>
        <input
          type="number"
          placeholder="Telefon raqamizni kiriting"
          className="w-[488px] h-16 rounded-[5px] bg-white border border-[#242424]/20 mb-4"
        />
        <button
          onClick={() => navigate("/profile/follow")}
          className="w-[488px] h-16 rounded-[5px] bg-[#00991c] text-xl font-semibold text-center text-white"
        >
          Yuborish
        </button>
      </div>
    </div>
  );
};

export default Modal6;
