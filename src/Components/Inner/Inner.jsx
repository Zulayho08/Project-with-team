// Images
import img from "../../Assets/Images/article.png";
import img2 from "../../Assets/Images/article2.png";
import img3 from "../../Assets/Images/article3.png";

export default function Inner() {
  return (
    <>
      <div className="m-auto w-[1280px] pb-20 mt-10">
        <div className="w-[1280px] flex justify-between">
          <div className="w-[702px] h-[512px]">
            <iframe
              width="702"
              height="430"
              className="rounded-md"
              src="https://www.youtube.com/embed/vPhg6sc1Mk4"
              title="The Most Relaxing Waves Ever - Ocean Sounds to Sleep, Study and Chill"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="w-[671px] font-roboto font-medium text-[22px] leading-8 text-[#4E4E4E] mt-6">
              Barqaror rivojlanish sohasidagi milliy maqsadlarga erishish
              bo'yicha amalga oshiriladigan...
            </p>
          </div>
          <div className="w-[529px]">
            <div className="w-[529px] flex justify-between">
              <img src={img} alt="img" />
              <img src={img2} alt="img" />
            </div>
            <img src={img3} alt="img" className="mt-4" />
          </div>
        </div>
        <ul className="list-none w-[1280px] flex justify-between flex-wrap mt-5">
          <li className="w-[529px] h-[421px] mt-[50px]">
            <div className="w-[529px] h-[421px]">
              <iframe
                width="529"
                height="337"
                className="rounded-md"
                src="https://www.youtube.com/embed/fw-754I34F8"
                title="101 Facts About Community"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="w-[529px] font-roboto font-medium text-[22px] leading-8 text-[#4E4E4E] mt-6">
                Barqaror rivojlanish sohasidagi milliy maqsadlarga erishish
                bo'yicha amalga oshiriladigan...
              </p>
            </div>
          </li>
          <li className="w-[529px] h-[421px] mt-[50px]">
            <div className="w-[529px] h-[421px]">
              <iframe
                width="529"
                height="337"
                className="rounded-md"
                src="https://www.youtube.com/embed/fw-754I34F8"
                title="101 Facts About Community"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="w-[529px] font-roboto font-medium text-[22px] leading-8 text-[#4E4E4E] mt-6">
                Barqaror rivojlanish sohasidagi milliy maqsadlarga erishish
                bo'yicha amalga oshiriladigan...
              </p>
            </div>
          </li>
          <li className="w-[529px] h-[421px] mt-[50px]">
            <div className="w-[529px] h-[421px]">
              <iframe
                width="529"
                height="337"
                className="rounded-md"
                src="https://www.youtube.com/embed/fw-754I34F8"
                title="101 Facts About Community"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="w-[529px] font-roboto font-medium text-[22px] leading-8 text-[#4E4E4E] mt-6">
                Barqaror rivojlanish sohasidagi milliy maqsadlarga erishish
                bo'yicha amalga oshiriladigan...
              </p>
            </div>
          </li>
          <li className="w-[529px] h-[421px] mt-[50px]">
            <div className="w-[529px] h-[421px]">
              <iframe
                width="529"
                height="337"
                className="rounded-md"
                src="https://www.youtube.com/embed/fw-754I34F8"
                title="101 Facts About Community"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="w-[529px] font-roboto font-medium text-[22px] leading-8 text-[#4E4E4E] mt-6">
                Barqaror rivojlanish sohasidagi milliy maqsadlarga erishish
                bo'yicha amalga oshiriladigan...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
