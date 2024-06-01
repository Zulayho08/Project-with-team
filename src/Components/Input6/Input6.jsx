import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Profil6 from "../Profil6/Profil6";

const Input6 = () => {
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullname = e.target.fullname.value;
    const postalIndex = e.target.postalIndex.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const city = e.target.city.value;

    if (email === "" || password === "") {
      alert("Iltimos bo'sh joy qoldirmang");
      return;
    }

    window.localStorage.setItem("email", email);
    window.localStorage.setItem("password", password);
    window.localStorage.setItem("fullname", fullname);
    window.localStorage.setItem("postalIndex", postalIndex);
    window.localStorage.setItem("address", address);
    window.localStorage.setItem("phone", phone);
    window.localStorage.setItem("city", city);

    if (
      window.localStorage.getItem("login") === email &&
      window.localStorage.getItem("password") === password
    ) {
      window.location.href = "http://localhost:3002/#";
    } else {
      alert("ma'lumot yoq");
    }
  };

  return (
    <div className="w-[1280px] m-auto flex pt-[25px] items-center justify-between">
      <Profil6 />
      <div
        className="w-[876px] h-[746px] rounded-[20px] bg-white shadow-lg m-auto mt-[-1px] p-8  ml-[60px]"
        style={{ boxShadow: "0px 4px 30px 0 rgba(187,35,57,0.15)" }}
      >
        <h1 className="text-[40px] font-medium text-left text-[#333]">
          My profile
        </h1>
        <p className="text-2xl font-medium text-left text-[#333]">
          Hello Sokhib
        </p>
        <form
          onSubmit={Submit}
          className="grid grid-cols-2 gap-6 p-4 w-[650px]"
        >
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Ism familiya
            </label>
            <input
              name="fullname"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              placeholder="Azizbek Karimov"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Parol
            </label>
            <input
              name="password"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              type="password"
              placeholder="xxxxxxxx"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Pochta index
            </label>
            <input
              name="postalIndex"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              placeholder="86158535"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              @gmail
            </label>
            <input
              name="email"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              type="email"
              placeholder="info@gmail.com"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Uy mazilingizni kiriting
            </label>
            <input
              name="address"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              placeholder="Toshkent shahar, Chilonzor rayon 164 uy"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Telefon raqam
            </label>
            <input
              name="phone"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              type="number"
              placeholder="+998"
            />
          </div>
          <div className="inner-y-2 col-span-1">
            <label className="text-sm text-black opacity-40 block mb-[13px]">
              Shahar
            </label>
            <input
              name="city"
              className="w-full h-[54px] p-2 border border-[#333] rounded-[10px] text-base text-black"
              placeholder="Toshkent"
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              onClick={() => navigate("/profile/card")}
              type="submit"
              className="w-[119px] h-[54px] mt-4 py-2 rounded-[10px] border border-[#53b164] text-base font-bold text-[#242424] ml-[490px]"
            >
              Tasdiqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input6;
