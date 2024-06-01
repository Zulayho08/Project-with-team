// Import
import { useNavigate } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Article from "../../Components/Article/Article";
import Pend from "../../Components/Pend/Pend";

export default function Books() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-colorGrey m-auto w-[1920px]">
        <div className="w-[1230px] m-auto flex justify-between items-center pl-3">
          <ul className="w-[335px] list-none flex m-auto pt-10 pb-10 ml-0 mb-0">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-[#242424] opacity-70"
            >
              Bosh sahifa <span className="ml-3 mr-3">|</span>
            </li>
            <li
              onClick={() => navigate("/about")}
              className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
            >
              kitoblar va video darsliklar
            </li>
          </ul>
          <div className="">
            <select className="text-center w-[125px] h-12 bg-[#53B164] text-white font-roboto font-normal text-base rounded-[4px]">
              <option value="uzbek">May</option>
              <option value="jahon">Iyun</option>
              <option value="uzbek">Iyul</option>
              <option value="uzbek">Avgust</option>
              <option value="uzbek">Sentyabr</option>
              <option value="uzbek">Oktyabr</option>
              <option value="uzbek">Noyabr</option>
              <option value="uzbek">Dekabr</option>
              <option value="uzbek">Yanvar</option>
              <option value="uzbek">Fevral</option>
              <option value="uzbek">Mart</option>
              <option value="uzbek">Aprel</option>
            </select>
            <select className="text-center w-[130px] h-12 bg-[#53B164] text-white font-roboto font-normal text-base rounded-[4px] ml-[30px]">
              <option value="uzbek">2020</option>
              <option value="uzbek">2021</option>
              <option value="uzbek">2022</option>
              <option value="jahon">2023</option>
              <option value="jahon">2024</option>
            </select>
          </div>
        </div>
        <Pend />
        <Article />
      </div>
      <Footer />
    </>
  );
}
