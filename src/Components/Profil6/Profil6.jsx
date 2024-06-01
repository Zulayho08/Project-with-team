// Images
import Mycard from "../../Assets/Images/card.svg";
import Profil from "../../Assets/Images/user.svg";
import Menu from "../../Assets/Images/bookmark.svg";
import Obuna from "../../Assets/Images/book.svg";
import Longout from "../../Assets/Images/longout.svg";

// Import
import { useNavigate } from "react-router-dom";

export default function Profil6() {
  const navigate = useNavigate();

  return (
    <div className="w-[332px] h-[746px] relative">
      <div className="w-[332px] h-[746px] absolute left-[-1px] top-[-1px] rounded-[20px] bg-[#00991c]" />
      <div
        onClick={() => navigate("/profile")}
        className="w-[155px] h-8 opacity-50"
      >
        <img
          src={Mycard}
          className="w-8 h-8 absolute left-[49px] top-[204px]"
          alt=""
        />
        <a
          href="#"
          className="absolute left-24 top-[204px] text-2xl font-semibold text-left text-white"
        >
          My profile
        </a>
      </div>
      <div
        onClick={() => navigate("/profile/follow")}
        className="w-[193px] h-8 opacity-50"
      >
        <img
          src={Profil}
          className="w-8 h-8 absolute left-[49px] top-[276px]"
          alt=""
        />
        <a
          href="#"
          className="absolute left-24 top-[278px] text-2xl font-semibold text-left text-white"
        >
          Obuna bo’lish
        </a>
      </div>
      <div onClick={() => navigate("/profile/card")} className="w-[132px] h-8">
        <img
          src={Menu}
          className="w-8 h-8 absolute left-[49px] top-[60px]"
          alt=""
        />
        <a
          href="#"
          className="absolute left-24 top-[60px] text-2xl font-semibold text-left text-white"
        >
          My Cart
        </a>
      </div>
      <div className="w-[147px] h-8 opacity-50">
        <img
          src={Obuna}
          className="w-8 h-8 absolute left-[49px] top-[132px]"
          alt=""
        />
        <a
          href="#"
          className="absolute left-24 top-[132px] text-2xl font-semibold text-left text-white"
        >
          My Menu
        </a>
      </div>
      <div className="w-[125px] h-7 opacity-50">
        <img
          src={Longout}
          className="w-6 h-6 absolute left-[53px] top-[676px]"
          alt=""
        />
        <button className="absolute left-24 top-[672px] text-2xl font-semibold text-left text-white">
          Log out
        </button>
      </div>
    </div>
  );
}
