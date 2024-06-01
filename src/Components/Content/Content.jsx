// Images
import img from "../../Assets/Images/contebt--img.png";
import img2 from "../../Assets/Images/content--img.png";
import img3 from "../../Assets/Images/content__img.png";
import img4 from "../../Assets/Images/content__img2.png";
import img5 from "../../Assets/Images/content__img3.png";

export default function Content() {
  return (
    <>
      <div className="m-auto w-[1280px] pb-20 mt-10 pt-10">
        <h3 className="font-roboto font-semibold w-[1280px] text-center text-[40px] text-[#4E4E4E] leading-[46.88px] mb-20">
          Bizning hamkorlar
        </h3>
        <div className="w-[1280px] flex justify-between">
          <div className="w-[240px] h-[214px] bg-white border border-[#C8DACB] rounded-lg">
            <img src={img} alt="img" className="m-auto mt-[70px]" />
            <h4 className="w-[181px] text-center font-roboto font-medium text-[#4E4E4E] m-auto mt-2">
              O’zbekiston Respublikasi Xalq Ta’limi Vazirligi
            </h4>
          </div>
          {/* 2 */}
          <div className="w-[240px] h-[214px] bg-white border border-[#C8DACB] rounded-lg">
            <img src={img2} alt="img" className="m-auto mt-[18px]" />
            <h4 className="w-[181px] text-center font-roboto font-medium text-[#4E4E4E] m-auto mt-2">
              O’zbekiston Respublikasi Xalq Ta’limi Vazirligi
            </h4>
          </div>
          {/* 3 */}
          <div className="w-[240px] h-[214px] bg-white border border-[#C8DACB] rounded-lg">
            <img src={img3} alt="img" className="m-auto mt-[70px]" />
            <h4 className="w-[181px] text-center font-roboto font-medium text-[#4E4E4E] m-auto mt-2">
              O’zbekiston Respublikasi Xalq Ta’limi Vazirligi
            </h4>
          </div>
          {/* 4 */}
          <div className="w-[240px] h-[214px] bg-white border border-[#C8DACB] rounded-lg">
            <img src={img4} alt="img" className="m-auto mt-[18px]" />
            <h4 className="w-[181px] text-center font-roboto font-medium text-[#4E4E4E] m-auto mt-2">
              O’zbekiston Respublikasi Xalq Ta’limi Vazirligi
            </h4>
          </div>
          {/* 5 */}
          <div className="w-[240px] h-[214px] bg-white border border-[#C8DACB] rounded-lg">
            <img src={img5} alt="img" className="m-auto mt-[40px]" />
            <h4 className="w-[181px] text-center font-roboto font-medium text-[#4E4E4E] m-auto mt-2">
              O’zbekiston Respublikasi Xalq Ta’limi Vazirligi
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
