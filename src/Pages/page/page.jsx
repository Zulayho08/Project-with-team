// Import
import { useNavigate } from "react-router-dom";

// Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

// Images
import water from "../../Assets/Images/water.png";
import flag from "../../Assets/Images/flag.png";
import solar from "../../Assets/Images/solar.png";
import ruin from "../../Assets/Images/ruin.png";
import erdogan from "../../Assets/Images/erdogan.png";
import pandemic from "../../Assets/Images/pandemic.png";
import mirziyoyev from "../../Assets/Images/mirziyoyev.png";
import jam from "../../Assets/Images/jam.png";
import soldier from "../../Assets/Images/soldier.png";
import tele from "../../Assets/Images/tele.png";
import doc from "../../Assets/Images/doc.png";
import majlis from "../../Assets/Images/majlis.png";
import market from "../../Assets/Images/market.png";
import wash from "../../Assets/Images/wash.png";
import calendar from "../../Assets/Images/calendar.svg";
import clock from "../../Assets/Images/clock.svg";
import eye from "../../Assets/Images/eye.svg";

// Videos
import video from "../../Assets/Videos/video.mp4";
import video2 from "../../Assets/Videos/video2.mp4";
import video22 from "../../Assets/Videos/video22.mp4";
import video222 from "../../Assets/Videos/video222.mp4";

export default function Page() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-zinc-100 px-80 w-[1920px] m-auto">
        <br />
        <div className=" w-[1280px] mx-auto">
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
          <br />
          <br />
          <br />
          <h1 className="fw-bolder text-4xl">Dolzarb yangiliklar</h1>
          <span className=" text-black w-80 text-sm font-normal">
            Prince Charles welcomed his mother's wish that Camilla
          </span>
          <br />
          <ul className="grid grid-cols-3 mt-4">
            <li className=" w-11/12 bg-white">
              <img src={water} className=" w-full" height={"auto"} alt="" />
              <h2 className=" p-2 font-semibold text-xl">
                Coronavirus could be behind mystery dog illness in UK – media
              </h2>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
              <img src={erdogan} className=" w-full" height={"auto"} alt="" />
              <h2 className=" p-2 font-semibold text-xl">
                Turkey’s president gets Covid-19 after Ukraine visit
              </h2>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
              <img src={flag} className=" w-full" height={"auto"} alt="" />
              <h3 className=" p-2 font-semibold text-xl">
                GOP says Capitol riot was ‘legitimate political discourse’
              </h3>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
            <li className=" mt-4 w-11/12 bg-white">
              <img src={water} className=" w-full" height={"auto"} alt="" />
              <h3 className=" p-2 font-semibold text-xl">
                Coronavirus could be behind mystery dog illness in UK – media
              </h3>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
            <li className=" mt-4 w-11/12 bg-white">
              <img src={erdogan} className=" w-full" height={"auto"} alt="" />
              <h3 className=" p-2 font-semibold text-xl">
                Turkey’s president gets Covid-19 after Ukraine visit
              </h3>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
            <li className=" mt-4 w-11/12 bg-white">
              <img src={flag} className=" w-full" height={"auto"} alt="" />
              <h4 className=" p-2 font-semibold text-xl">
                GOP says Capitol riot was ‘legitimate political discourse’
              </h4>
              <p className="text-black font-normal text-sm p-2">
                Prince Charles welcomed his mother's wish that Camilla, Duchess
                of Cornwall, be known as Queen...
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
          <br />
          <br />
          <br />
          <br />
          <h4 className="fw-bolder text-4xl">Economy</h4>
          <span className=" text-black w-80 text-sm font-normal">
            Prince Charles welcomed his mother's
          </span>
          <br />
          <ul className="grid w-full grid-cols-2" id="none">
            <li className="mt-4 h-52 w-[567px] flex bg-white">
              <img src={wash} className=" h-full w-auto" alt="" />
              <div className=" p-3">
                <h4 className="font-semibold text-sm">
                  Americans have become germaphob after pandemic – survey
                </h4>
                <p className=" font-normal text-xs mt-4">
                  Prince Charles welcomed his mother's wish that Camilla,
                  Duchess of Cornwall, be known as...
                </p>
                <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
              </div>
            </li>
            <li className="mt-4 w-[567px] flex bg-white">
              <img src={solar} className=" h-full w-auto" alt="" />
              <div className=" p-3">
                <h4 className="font-semibold text-sm">
                  Americans have become germaphob after pandemic – survey
                </h4>
                <p className=" font-normal text-xs mt-4">
                  Prince Charles welcomed his mother's wish that Camilla,
                  Duchess of Cornwall, be known as...
                </p>
                <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
              </div>
            </li>
            <li className="mt-4 h-52 w-[567px] flex bg-white">
              <img src={ruin} className=" h-full w-auto" alt="" />
              <div className=" p-3">
                <h4 className="font-semibold text-sm">
                  Americans have become germaphob after pandemic – survey
                </h4>
                <p className=" font-normal text-xs mt-4">
                  Prince Charles welcomed his mother's wish that Camilla,
                  Duchess of Cornwall, be known as...
                </p>
                <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
              </div>
            </li>
            <li className="mt-4 w-[567px] flex bg-white">
              <img src={market} className=" h-full w-auto" alt="" />
              <div className=" p-3">
                <h4 className="font-semibold text-sm">
                  Americans have become germaphob after pandemic – survey
                </h4>
                <p className=" font-normal text-xs mt-4">
                  Prince Charles welcomed his mother's wish that Camilla,
                  Duchess of Cornwall, be known as...
                </p>
                <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
              </div>
            </li>
          </ul>

          <br />
          <br />
          <button className="ml-[500px] bg-white rounded-md w-44 h-12" id="btn">
            More
          </button>
          <br />
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
          <br />
          <br />
          <br />
          <br />
          <h1 className="fw-bolder text-4xl">Uzb news</h1>
          <span className=" text-black w-80 text-sm font-normal">
            Prince Charles welcomed his mother's wish that Camilla
          </span>
          <div className="flex justify-between mt-4">
            <div className=" w-[567px] bg-white">
              <img
                src={mirziyoyev}
                className=" w-full"
                height={"auto"}
                alt=""
              />
              <h3 className=" p-4 font-semibold text-xl">
                Both Ramatov and Ganiev have learned to <br /> say 'let's do
                it'" - the{" "}
              </h3>
              <p className="text-black font-normal text-sm pl-6">
                UK Culture Secretary Nadine Dorries said Big Tech bosses could{" "}
                <br /> ‘absolutely’ be held responsible for failing to remove
                harmful <br /> online content
              </p>
              <div className="w-60 p-6 pb-3 justify-between flex">
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
            </div>
            <ul>
              <li className="w-[567px] h-44 flex bg-white">
                <img src={majlis} className=" h-full w-auto" alt="" />
                <div className=" p-3">
                  <h4 className="font-semibold text-sm">
                    Americans have become germaphob after pandemic – survey
                  </h4>
                  <p className=" font-normal text-xs mt-4">
                    Prince Charles welcomed his mother's wish that Camilla,
                    Duchess of Cornwall, be known as...
                  </p>
                  <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
                </div>
              </li>
              <li className="mt-4 h-44 w-[567px] flex bg-white">
                <img src={tele} className=" h-full w-auto" alt="" />
                <div className=" p-3">
                  <h4 className="font-semibold text-sm">
                    Americans have become germaphob after pandemic – survey
                  </h4>
                  <p className=" font-normal text-xs mt-4">
                    Prince Charles welcomed his mother's wish that Camilla,
                    Duchess of Cornwall, be known as...
                  </p>
                  <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
                </div>
              </li>
              <li className="mt-4 h-44 w-[567px] flex bg-white">
                <img src={doc} className=" h-full w-auto" alt="" />
                <div className=" p-3">
                  <h4 className="font-semibold text-sm">
                    Americans have become germaphob after pandemic – survey
                  </h4>
                  <p className=" font-normal text-xs mt-4">
                    Prince Charles welcomed his mother's wish that Camilla,
                    Duchess of Cornwall, be known as...
                  </p>
                  <div className="w-60 p-2 pb-3 mt-3 justify-between flex">
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
                </div>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h1 className="fw-bolder text-4xl">Video news</h1>
          <span className=" text-black w-80 text-sm font-normal">
            Prince Charles welcomed his mother's wish that Camilla
          </span>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ul className="grid grid-cols-4 mt-4">
                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video2}
                      controls
                      className=" w-full"
                      height={"auto"}
                    ></video>
                    <h2 className=" p-2 font-semibold text-xl">
                      Queen Elizabeth, Anchor in a Storm Tossed Britain, Marks
                      70-Year...
                    </h2>
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
                  <li className=" w-[280px] rounded-md bg-white">
                    <video src={video} controls className=" w-full"></video>
                    <h2 className=" p-2 font-semibold text-xl">
                      Thrash metal sirens taking an axe to Middle East’s taboos
                    </h2>
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
                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video22}
                      className="w-full h-auto"
                      controls
                    ></video>
                    <h3 className=" p-2 fontsemibold text-xl">
                      WATCH oil tanker explode off Nigerian coast
                    </h3>
                    -
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
                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video222}
                      className="w-full h-auto"
                      controls
                    ></video>
                    <h3 className=" p-2 font-semibold text-xl">
                      Biden reveals ISIS leader was ‘removed’ in recent US op in
                      Syria
                    </h3>

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
                <ul className="grid grid-cols-4 mt-4">
                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video222}
                      className="w-full h-auto"
                      controls
                    ></video>
                    <h3 className=" p-2 font-semibold text-xl">
                      Biden reveals ISIS leader was ‘removed’ in recent US op in
                      Syria
                    </h3>

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

                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video22}
                      className="w-full h-auto"
                      controls
                    ></video>
                    <h3 className=" p-2 fontsemibold text-xl">
                      WATCH oil tanker explode off Nigerian coast
                    </h3>
                    -
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
                  <li className=" w-[280px] rounded-md bg-white">
                    <video
                      src={video2}
                      controls
                      className=" w-full"
                      height={"auto"}
                    ></video>
                    <h2 className=" p-2 font-semibold text-xl">
                      Queen Elizabeth, Anchor in a Storm Tossed Britain, Marks
                      70-Year...
                    </h2>
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
                  <li className=" w-[280px] rounded-md bg-white">
                    <video src={video} controls className=" w-full"></video>
                    <h2 className=" p-2 font-semibold text-xl">
                      Thrash metal sirens taking an axe to Middle East’s taboos
                    </h2>
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
              data-bs-target="#carouselExample"
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
              data-bs-target="#carouselExample"
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
        {/* FOOTER UCHUN JOY  */}
      </div>
      <Footer />
    </>
  );
}
