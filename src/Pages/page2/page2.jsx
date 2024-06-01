// Import
import { useNavigate } from "react-router-dom";

// Images
import president from "../../Assets/Images/president.png";
import deputy from "../../Assets/Images/deputy.png";
import water from "../../Assets/Images/water.png";
import flag from "../../Assets/Images/flag.png";
import erdogan from "../../Assets/Images/erdogan.png";
import pandemic from "../../Assets/Images/pandemic.png";
import jam from "../../Assets/Images/jam.png";
import soldier from "../../Assets/Images/soldier.png";
import calendar from "../../Assets/Images/calendar.svg";
import clock from "../../Assets/Images/clock.svg";
import eye from "../../Assets/Images/eye.svg";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function Pagee() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-zinc-100 px-80 w-[1920px] m-auto">
        <div className="w-10/12 mx-auto">
          {/* <div className="justify-between w-48 font-sans font-normal text-base flex">
            <span className=" text-zinc-400">Bosh sahifa</span>|
            <span className=" text-black">Bosma jurnal</span>
          </div> */}
          <div className="w-[1280px] m-auto flex justify-between items-center pl-3">
            <ul className="w-[235px] list-none flex m-auto pt-10 pb-10 ml-0 mb-0">
              <li
                onClick={() => navigate("/")}
                className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-[#242424] opacity-70"
              >
                Bosh sahifa <span className="ml-3 mr-3">|</span>
              </li>
              <li
                onClick={() => navigate("/news")}
                className="cursor-pointer hover:underline decoration-commonBg font-roboto font-normal text-[17px] leading-[19.92px] text-colorLink"
              >
                Bosma Jurnal
              </li>
            </ul>
          </div>
          <div className=" w-4/5 mx-auto">
            <h6 className=" font-bold text-4xl mt-7">
              O'zbekiston neft va gaz qazib olishni kengaytirish
            </h6>
            <p className="font-bold text-2xl mt-4 mb-8">
              Prezident Shavkat Mirziyoyev 24-may kuni neft va gaz qazib olish
              va qazib chiqarishni kengaytirish masalalariga bag‘ishlangan
              yig‘ilish o‘tkazdi.
            </p>
            <img src={president} width="100%" height={"auto"} alt="" />
            <p className="font-normal text-lg w-full h-auto mt-4 text-black">
              Mamlakat taraqqiyot strategiyasida iqtisodiyotni liberallashtirish
              va yetakchi tarmoqlarni o‘zgartirish maqsadlari belgilab berilgan.
              Xususan, neft-gaz sohasida transformatsiya jarayonlari
              boshlandi,xabar berdidavlat rahbari matbuot xizmatida. Yig‘ilishda
              prezident, birinchi navbatda, o‘zgarishlar masalalariga e’tibor
              qaratib, bu jarayonni jadallashtirish zarurligini ta’kidladi.
              Xalqaro maslahatchilarni jalb etish, strategik yondashuvlarni
              belgilash, neft-gaz sanoatida buxgalteriya hisobi mexanizmlarining
              shaffofligini ta’minlash bo‘yicha vazifalar belgilandi.
              <br />
              <br />
              Bundan tashqari, korxonalarni moliyaviy sog‘lomlashtirish,
              faoliyat samaradorligini oshirish hisobiga xarajatlarni
              kamaytirish, ilg‘or xalqaro tajribaga asoslangan boshqaruv
              tizimini yaratish chora-tadbirlari belgilandi.Prezidentimiz aholi
              va korxonalarni yoqilg‘i-energetika resurslari bilan uzluksiz
              ta’minlash yuzasidan soha rahbarlariga ham aniq topshiriqlar
              berdi.
              <img
                src={deputy}
                width="100%"
                height={"auto"}
                alt=""
                className=" mt-4 mb-4"
              />
              Bundan tashqari, korxonalarni moliyaviy sog‘lomlashtirish,
              faoliyat samaradorligini oshirish hisobiga xarajatlarni
              kamaytirish, ilg‘or xalqaro tajribaga asoslangan boshqaruv
              tizimini yaratish chora-tadbirlari belgilandi.Prezidentimiz aholi
              va korxonalarni yoqilg‘i-energetika resurslari bilan uzluksiz
              ta’minlash yuzasidan soha rahbarlariga ham aniq topshiriqlar
              berdi.Tabiiy gaz iste’molini monitoring qilish va hisobga
              olishning avtomatlashtirilgan tizimini to‘liq joriy etgan holda
              yo‘qotishlarni bartaraf etish chora-tadbirlari belgilandi.
              Resurslarni tejash va muqobil energiya manbalaridan foydalanishni
              rag'batlantirish muhimligi ko'rsatilgan.
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h1 className="fw-bolder text-4xl">World news</h1>
          <span className=" text-black w-80 text-sm font-normal">
            Prince Charles welcomed his mother's wish that Camilla
          </span>
          <br />

          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="grid grid-cols-3 mt-4">
                  <li className=" w-11/12 bg-white">
                    <img
                      src={pandemic}
                      className=" w-full"
                      height={"auto"}
                      alt=""
                    />
                    <h2 className=" p-2 font-semibold text-xl">
                      Coronavirus could be behind mystery dog illness in UK –
                      media
                    </h2>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                  <li className=" w-11/12 bg-white">
                    <img src={jam} className=" w-full" height={"auto"} alt="" />
                    <h2 className=" p-2 font-semibold text-xl">
                      Turkey’s president gets Covid-19 after Ukraine visit
                    </h2>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                  <li className=" w-11/12 bg-white">
                    <img
                      src={soldier}
                      className=" w-full"
                      height={"auto"}
                      alt=""
                    />
                    <h3 className=" p-2 font-semibold text-xl">
                      GOP says Capitol riot was ‘legitimate political discourse’
                    </h3>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="carousel-item ">
                <ul className="grid grid-cols-3 mt-4">
                  <li className=" w-11/12 bg-white">
                    <img
                      src={water}
                      className=" w-full"
                      height={"auto"}
                      alt=""
                    />
                    <h2 className=" p-2 font-semibold text-xl">
                      Coronavirus could be behind mystery dog illness in UK –
                      media
                    </h2>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                  <li className=" w-11/12 bg-white">
                    <img
                      src={erdogan}
                      className=" w-full"
                      height={"auto"}
                      alt=""
                    />
                    <h2 className=" p-2 font-semibold text-xl">
                      Turkey’s president gets Covid-19 after Ukraine visit
                    </h2>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                  <li className=" w-11/12 bg-white">
                    <img
                      src={flag}
                      className=" w-full"
                      height={"auto"}
                      alt=""
                    />
                    <h3 className=" p-2 font-semibold text-xl">
                      GOP says Capitol riot was ‘legitimate political discourse’
                    </h3>
                    <p className="text-black font-normal text-sm p-2">
                      Prince Charles welcomed his mother's wish that Camilla,
                      Duchess of Cornwall, be known as Queen...
                    </p>
                    <div className="w-60 p-2 pb-3 justify-between flex">
                      <div className="flex">
                        <img src={calendar} alt="" />
                        06/02/2022
                      </div>
                      <div className="flex">
                        <img src={clock} alt="" />
                        11:15
                      </div>
                      <div className="flex">
                        <img src={eye} alt="" /> 222
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
