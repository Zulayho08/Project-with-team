// Import
import { useRef } from "react";

// Images
import img from "../../Assets/Images/sidebar.png";

export default function Items() {
  const ref = useRef();

  return (
    <>
      <ul ref={ref} className="list-none flex w-[1280px] justify-between">
        <li className="p-5 bg-white rounded-md border-[#3333331A] border">
          <img src={img} width={258} alt="img" />
          <h4 className="font-roboto font-semibold text-lg text-[#242424] mt-3 leading-6 mb-2">
            3-son. 2022-yil (o‘zbek tilida)
          </h4>
          <p className="font-roboto text-[#0078CF] font-normal text-lg">
            99 000 UZS
          </p>
          <div className="w-[258px] flex justify-between items-center">
            <span className="font-normal text-sm text-[#18181899]">
              1-aprel 12:30
            </span>
            <a
              href=""
              className="font-roboto font-medium text-lg text-[#0078CF]"
            >
              Sotib olish
            </a>
          </div>
        </li>
        <li className="p-5 bg-white rounded-md border-[#3333331A] border">
          <img src={img} width={258} alt="img" />
          <h4 className="font-roboto font-semibold  text-lg text-[#242424] mt-3 leading-6 mb-2">
            3-son. 2022-yil (o‘zbek tilida)
          </h4>
          <p className="font-roboto text-[#0078CF] font-normal text-lg">
            99 000 UZS
          </p>
          <div className="w-[258px] flex justify-between items-center">
            <span className="font-normal text-sm text-[#18181899]">
              1-aprel 12:30
            </span>
            <a
              href=""
              className="font-roboto font-medium text-lg text-[#0078CF]"
            >
              Sotib olish
            </a>
          </div>
        </li>
        <li className="p-5 bg-white rounded-md border-[#3333331A] border">
          <img src={img} width={258} alt="img" />
          <h4 className="font-roboto font-semibold  text-lg text-[#242424] mt-3 leading-6 mb-2">
            3-son. 2022-yil (o‘zbek tilida)
          </h4>
          <p className="font-roboto text-[#0078CF] font-normal text-lg">
            99 000 UZS
          </p>
          <div className="w-[258px] flex justify-between items-center">
            <span className="font-normal text-sm text-[#18181899]">
              1-aprel 12:30
            </span>
            <a
              href=""
              className="font-roboto font-medium text-lg text-[#0078CF]"
            >
              Sotib olish
            </a>
          </div>
        </li>
        <li className="p-5 bg-white rounded-md border-[#3333331A] border">
          <img src={img} width={258} alt="img" />
          <h4 className="font-roboto font-semibold  text-lg text-[#242424] mt-3 leading-6 mb-2">
            3-son. 2022-yil (o‘zbek tilida)
          </h4>
          <p className="font-roboto text-[#0078CF] font-normal text-lg">
            99 000 UZS
          </p>
          <div className="w-[258px] flex justify-between items-center">
            <span className="font-normal text-sm text-[#18181899]">
              1-aprel 12:30
            </span>
            <a
              href=""
              className="font-roboto font-medium text-lg text-[#0078CF]"
            >
              Sotib olish
            </a>
          </div>
        </li>
      </ul>
    </>
  );
}
