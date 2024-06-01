//images

export default function Hero2() {
  return (
    <>
      <div className="w-[1280px] justify-between m-auto flex p-[18px] items-center bg-red-500">
        <div className="hero2">
          <div className="">
            <p className=" font-normal ">Bosh sahifa</p>
            <hr />
            <p className=" ">Bosma Jurnal</p>
          </div>
          <div className="">
            <button className=" w- [125px] h -[48px] bg-lime-500 text-white text-center rounded ">
              may
              <select
                className=" w-[20px] h-[20px]  bg-lime-500 "
                name="month"
                id="1"
              >
                <opttion value="Yanvar">Yanvar</opttion>
                <opttion value="Fevral">Fevral</opttion>
                <opttion value="Mart">Mart</opttion>
                <opttion>Aprel </opttion>
                <opttion>May</opttion>
                <opttion>Iyun </opttion>
                <opttion>Iyul</opttion>
                <opttion>Avgust</opttion>
                <opttion>Sentyabr</opttion>
                <opttion>Oktyabr</opttion>
                <opttion>Noyabr</opttion>
                <opttion>Dekabr</opttion>
              </select>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
