import green from "../../Assets/Images/green.png";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="flex flex-row mt-[84px]">
        <div className=" p-[20px] bg-sky-50 w-[308px] h-[349px]">
          <Link to={"/feature2"}>
            <div className=" bg-sky-100 h-10  rounded-full">
              <h2 className=" w-[86px] h-[20px] pt-2 ml-6 mt-[63px] text-[#0075FF] font-bold cursor-pointer">
                Talablar
              </h2>
            </div>
          </Link>

          <Link to={"/feature"}>
            <h2 className=" active:bg-slate-700  w-[82px] h-[20px] mt-[40px] ml-6 text-[#0075FF]  cursor-pointer">
              Narxlar
            </h2>
          </Link>
        </div>

        <div className=" ml-[149px]">
          <h1 className=" text-3xl w-[532px] h-[38px] size-[24px]  text-[#1D4573] text-center">
            Maqola topshirishga qo‘yilgan talablar
          </h1>

          <h6 className=" ml-[200px] mt-2  w-[197px] h-[21px] font-size-[19px] text-center">
            Ҳурматли муаллифлар!
          </h6>

          <p className=" mt-[32px] w-[764px] h-[330px] left-[777px] size-[18px]">
            «Til va adabiyot ta’limi» – «Преподавание языка и литературы» –
            «Language and literature teaching» илмий-методик журнали ва электрон
            журнали фан номзодлари ва фан докторлари, ёш олимлар, илмий тадқиқот
            олиб бораётган изланувчилар, мустақил тадқиқотчилар, ўқитувчилар,
            магистрантлар ва талабалар томонидан таҳририятга юборилган
            мақолаларни оммалаштириш, эълон қилиш учун қабул қилади. Таҳририятга
            юборилган барча материаллар журналнинг Таҳрир ҳайъати томонидан
            экспертизадан ўтказилади. Муҳарририят томонидан маъқулланган
            мақолалар журналда эълон қилинади. <br />
            Юборилган ҳар бир мақоланинг ҳажми камида 4 бет, кўпи билан 9–10 бет
            бўлиши лозим. Барча материалларни til_adabiyot@umail.uz электрон
            почтаси ёки @TAT_jurnal телеграм каналида кўрсатилган муҳаррирларга
            юборишингизни cўраймиз.
          </p>

          <h1 className=" text-3xl w-[765px] h-[38px] size-[24px]  text-[#1D4573] text-center">
            Муаллифлар тақдим этиши зарур бўлган маълумотлар:
          </h1>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Фамилияси, исми, отасининг исми (тўлиқ).
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Илмий даражаси (мавжуд бўлганда).
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Илмий унвони (мавжуд бўлганда).
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Иш жойи ва лавозими (таълим муассасаси, ОТМнинг тўлиқ номи, шаҳар ва
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">вилоят кўрсатилган ҳолда).</p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">Электрон почтаси (e-mail).</p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">Телефон рақами (моб., уй). </p>

          <h1 className=" mt-[70px] text-3xl w-[765px] h-[38px] size-[24px]  text-[#1D4573] text-center">
            Мақолани расмийлаштиришга қўйилган талаблар:
          </h1>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Матн муҳаррири – Microsoft Word.
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">Формат – А4.</p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Матннинг икки ёни, тепа ва пастидан қолдириладиган ўлчам – 2 см.
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">Шрифт – Times New Roman.</p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Ўзбек тилидаги мақола лотин алифбосида ёзилади.
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Мақола матни учун шрифтнинг катталиги – 14 пт.
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Мақола матни учун қаторлар оралиғи – 1,5 интервал.
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">Хат боши (абзац) – 1 см. </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[620px] mt-[10px] ml-[25px]">
            Жойлашуви – китобий (книжная), сўзларни кейинги сатрга
            кўчиришсиз,бетлар тагига қўйилган ҳаволаларсиз.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Ҳар хил график ва жадваллар оқ-қора рангда бўлиши талаб қилинади.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[618px] mt-[10px] ml-[25px]">
            Муаллифнинг исми, фамилияси, отасининг исми, иш жойи, (ўқиш жойи)
            ҳақидаги маълумот мақола юқори қисмининг ўнг тарафига кичик
            ҳарфларда курсив билан ёзилади.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Мақоланинг номи – босма ҳарфларда марказдан қўйилади.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[620px] mt-[10px] ml-[25px]">
            Аннотация ўзбек, рус, инглиз тилларида (12 шрифт, 1 интервал
            оралиқда) ёзилиши лозим. Аннотацияда мавзунинг таснифи, ишнинг
            мақсади ва эришилган натижалар, ишнинг илмий янгилиги билан боғлиқ
            қисқача маълумотлар берилади. Сўзлар сони кўпи билан 40–50 сўз
            оралиғида бўлиши мақсадга мувофиқ.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[620px] mt-[10px] ml-[25px]">
            Калит сўз ва иборалар – (5–7 тадан кам бўлмаган) уч тилда– ўзбек,
            рус, инглиз тилларида берилади.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Мақола матни – кенглиги бўйича текисланган бўлиши керак.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Мақоланинг тузилиши: кириш, асосий қисм ва хулосадан иборат бўлиши
            шарт.{" "}
          </p>

          <div className=" w-[620px] mt-[10px] ml-[25px]">
            Кириш қисмида танланган мавзунинг долзарблиги, янгилиги, тадқиқот
            мақсади ва вазифалари келтирилади.
          </div>

          <div className=" w-[620px] mt-[10px] ml-[25px]">
            Асосий қисмда илмий муаммонинг тадқиқот методлари, эришилган
            натижалар баён қилинади.
          </div>

          <div className=" w-[620px] mt-[10px] ml-[25px]">
            Хулоса қисмида эса натижалар умумлаштирилади, якуний хулосалар,
            тавсия ва таклифлар, кейинги тадқиқ этиладиган йўналишлар
            келтирилади.
          </div>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[620px] mt-[10px] ml-[25px]">
            Муаллифнинг исми-фамилияси, отасининг исми мақолада ажратилмаган
            ҳолда ёзилади: А.Н.Фозилов, адабиётлар рўйхатида эса қуйидагича
            ёзилади: Фозилов А.Н.{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" mt-[10px] ml-[25px]">
            Матндаги ҳаволалар қуйидаги тартибда шакллантирилади: [1: 195], [3:
            20; 7: 68], [4].{" "}
          </p>

          <img className=" mt-[15px] float-left" src={green} alt="img" />
          <p className=" w-[620px] mt-[10px] ml-[25px]">
            Фойдаланилган адабиётлар рўйхати 12 ўлчамли шрифтда тартиб билан
            кўрсатилиши лозим. Фақатгина мақолада фойдаланилган адабиётлар
            рўйхати келтирилиши керак.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
