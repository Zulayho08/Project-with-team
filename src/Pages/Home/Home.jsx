// Import
import { useNavigate } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Aside from "../../Components/Aside/Aside";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Article from "../../Components/Article/Article";
import Sidebar1_2 from "../../Components/Sidebar1_2/Sidebar1_2";
import Content from "../../Components/Content/Content";
import Wrapp from "../../Components/Wrapp/Wrapp";
import Wrapper from "../../Components/Wrapper/Wrapper";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-colorGrey m-auto w-[1920px]">
        <ul className="list-none w-[1193px] flex justify-between m-auto pt-10 pb-10">
          <li
            onClick={() => navigate("/feature2")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            Maqola berish
          </li>
          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            Adabiy taqvim
          </li>
          <li
            onClick={() => navigate("/journal")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            BOSMA Jurnal
          </li>
          <li
            onClick={() => navigate("/electron")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            ELEKTRON JURNAL
          </li>
          <li
            onClick={() => navigate("/choice")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            Tanlovlar
          </li>
          <li
            onClick={() => navigate("/news")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            Yangiliklar
          </li>
          <li
            onClick={() => navigate("/books")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            kitoblar
          </li>
          <li
            onClick={() => navigate("/device")}
            className="cursor-pointer hover:underline decoration-commonBg uppercase font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
          >
            turli jihozlar
          </li>
        </ul>
        <Hero />
        <Aside />
        <Sidebar />
        <Article />
        <Sidebar1_2 />
        <Content />
        <Wrapp />
        <Wrapper />
      </div>
      <Footer />
    </>
  );
}
