// Import
import { useNavigate } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Inner from "../../Components/InnerList/Inner";

export default function Feature() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-colorGrey m-auto w-[1920px]">
        <div className="w-[1280px] m-auto flex justify-between items-center pl-3">
          <ul className="w-[235px] list-none flex m-auto pt-10 pb-10 ml-0 mb-0">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-[#242424] opacity-70"
            >
              Bosh sahifa <span className="ml-3 mr-3">|</span>
            </li>
            <li
              onClick={() => navigate("/feature")}
              className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
            >
              Maqola berish
            </li>
          </ul>
        </div>
        <Inner />
      </div>
      <Footer />
    </>
  );
}
