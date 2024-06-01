// Images
import img from "../../Assets/Images/click.svg";
import img2 from "../../Assets/Images/scanner.svg";
import img3 from "../../Assets/Images/message.svg";
import img4 from "../../Assets/Images/qr.png";

export default function Wrapp() {
  return (
    <div className="bg-commonBg">
      <div className="m-auto w-[1920px] bg-commonBg pb-20 bg-qrBg bg-no-repeat bg-qrBgPos">
        <div className="w-[1280px] m-auto translate-y-20 bg-qrBg bg-no-repeat bg-qrBgPos2 pb-[165px]">
          <div className="bg-qrBg bg-no-repeat w-[700px] pb-5 bg-right-bottom">
            <img src={img} alt="img" />
          </div>
          <div className="w-[1280px] flex justify-between mt-11">
            <div className="w-[423px]">
              <div className="flex bg-white rounded-lg w-[423px] h-[100px] items-center mb-5">
                <img
                  src={img2}
                  width={48}
                  height={48}
                  alt="img"
                  className="ml-8"
                />
                <h4 className="font-roboto font-medium text-2xl text-[#242424] ml-8">
                  QR kodni skanerlang
                </h4>
              </div>
              <div className="flex bg-white rounded-lg w-[423px] h-[100px] items-center">
                <img
                  src={img3}
                  width={48}
                  height={48}
                  alt="img"
                  className="ml-8"
                />
                <div className="ml-8">
                  <h4 className="font-roboto font-medium text-2xl text-[#242424] ">
                    USSD so’rovinomani tering
                  </h4>
                  <p className="font-roboto font-normal text-[18px] text-[#242424]">
                    *880 * 016832 * SUMMA #
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[615px] pb-10 flex justify-between bg-qrBg bg-no-repeat bg-qrBgPos3">
              <img src={img4} alt="img" />
              <h5 className="w-[279px] font-roboto font-medium text-[54px] text-white leading-[68px]">
                To’lovlar uchun 2 qulay usul
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
