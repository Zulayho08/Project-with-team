// import
import { useState } from "react";

// Components
// import Lang from "../Language/Language";

// Images
import logo from "../../Assets/Images/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  // const [searchData, setSearchData] = useState("");

  // const [lang, setLang] = useState("ru");
  // console.log(Lang[lang].header.title1);

  const navigate = useNavigate();

  return (
    <div className="bg-commonBg">
      <div className="w-[1280px] justify-between m-auto flex p-[18px] items-center">
        <img src={logo} alt="img" />
        <input
          // onChange={(evt) => setSearchData(evt.target.value)}
          className="bg-[url(./Assets/Images/search.svg)] bg-no-repeat w-[348px] h-5 py-6 px-5 bg-[310px] bg-white rounded-md border-greyy "
          type="search"
          name="search"
          placeholder="Qidiruv"
        />
        <div className="w-[407px] flex justify-between h-12 items-center">
          <a href="" className="font-roboto font-normal text-base text-white">
            Biz haqimizda
          </a>
          <a href="" className="font-roboto font-normal text-base text-white">
            FAQ
          </a>
          <select className="bg-commonBg text-white font-roboto font-normal text-base">
            <option className="bg-white text-black" value={"uz"}>
              Uzb
            </option>
            <option className="bg-white text-black" value={"ru"}>
              Rus
            </option>
            <option className="bg-white text-black" value={"en"}>
              Eng
            </option>
          </select>
          <button
            onClick={() => navigate("/profile")}
            className="font-normal text-base font-roboto bg-colorGrey py-3 px-8 rounded-md"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
}
