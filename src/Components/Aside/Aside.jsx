// Images
import img from "../../Assets/Images/aside.png";
import img2 from "../../Assets/Images/aside2.png";
import img3 from "../../Assets/Images/aside3.png";
import img4 from "../../Assets/Images/aside4.png";
import img5 from "../../Assets/Images/aside5.png";
import img6 from "../../Assets/Images/aside6.png";

export default function Aside() {
  return (
    <div className="flex justify-between m-auto w-[1280px] pb-20">
      <div className=" w-[516px]  ">
        <h3 className="font-roboto font-semibold text-[40px] leading-[38px] text-[#242424] bg-colorGrey w-[1280px] text-center mb-14">
          Elektron journal
        </h3>
        <ul className="flex flex-wrap w-[1280px] list-none justify-between">
          <li className="rounded-md mb-8 bg-white">
            <img src={img} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Til shunoslik
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
          {/* 2 */}
          <li className="rounded-md mb-8 bg-white">
            <img src={img2} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Ilg’or pedugogi texnologiyalar
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
          {/* 3 */}
          <li className="rounded-md mb-8 w-[407px] bg-white">
            <img src={img3} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Xorijiy tillar
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
          {/* 4 */}
          <li className="rounded-md w-[407px] bg-white">
            <img src={img4} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Adabiyot shunoslik
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
          {/* 5 */}
          <li className="rounded-md w-[407px] bg-white">
            <img src={img5} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Tadqiqotlar
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
          {/* 6 */}
          <li className="rounded-md w-[407px] bg-white">
            <img src={img6} alt="img" />
            <span className="ml-5 font-roboto font-medium text-lg italic">
              Dars-muqaddas
            </span>
            <h3 className="w-[362px] pb-5 rounded-md font-roboto font-semibold text-2xl ml-5">
              Ways to strengthen financial in the rational USE of state...
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
