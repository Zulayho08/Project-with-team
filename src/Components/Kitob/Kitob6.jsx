import React, { useState } from "react";

// img
import Adabiyot from "../../Assets/Images/adabiyot.png";
import Delete1 from "../../Assets/Images/delete.svg";

//page
import Profil6 from "../Profil6/Profil6";
import { useNavigate } from "react-router-dom";

const Kitob6 = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    { id: 1, quantity: 1, isDeleted: false },
    { id: 2, quantity: 1, isDeleted: false },
  ]);

  const increment = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isDeleted: true } : item
      )
    );
  };

  return (
    <div className="w-[1280px] flex justify-start m-auto pt-[25px] items-start">
      <Profil6 />
      <div
        className="p-[20px] ml-4 w-[908px] rounded-[20px] bg-neutral-100"
        style={{ boxShadow: "0px 4px 30px 0 rgba(187,35,57,0.15)" }}
      >
        <h1 className="p-[20px] text-2xl font-bold">My Card</h1>
        {items.map(
          (item) =>
            !item.isDeleted && (
              <div
                key={item.id}
                className="w-[620px] h-[292px] mb-4 rounded-[20px] relative bg-white"
              >
                <img src={Adabiyot} alt="" />
                <img
                  src={Delete1}
                  alt=""
                  onClick={() => deleteItem(item.id)}
                  className="absolute right-4 top-4 cursor-pointer"
                />
                <p className="absolute left-[294px] top-[30px] opacity-90 text-lg font-semibold text-left text-[#242424]">
                  3-son. 2022-yil (o‘zbek tilida)
                </p>
                <p className="absolute left-[294px] top-24 opacity-90 text-lg text-left text-[#0078cf]">
                  99 000 UZS
                </p>
                <div className="w-[263px] h-[39px]">
                  <p className="absolute left-[294px] top-[166px] text-[15px] text-left text-[#333]">
                    {item.quantity}
                  </p>
                  <i className="absolute left-[294px] top-[145px] opacity-40 text-[13px] text-left text-[#333]">
                    Son
                  </i>
                  <span className="absolute left-[344px] top-[166px] text-[15px] text-left text-[#333]">
                    2022
                  </span>
                  <p className="absolute left-[344px] top-[145px] opacity-40 text-[13px] text-left text-[#333]">
                    Yili
                  </p>
                  <div className="w-16 h-[39px]">
                    <p className="absolute left-[404px] top-[166px] text-[15px] text-left text-[#0094ff]">
                      2010-5584
                    </p>
                    <p className="absolute left-[404px] top-[145px] opacity-40 text-[13px] text-left text-[#333]">
                      ISSN
                    </p>
                  </div>
                  <div className="w-[59px] h-[39px]">
                    <p className="absolute left-[498px] top-[166px] text-[15px] text-left text-[#0094ff]">
                      o‘zbekcha
                    </p>
                    <p className="absolute left-[498px] top-[145px] opacity-40 text-[13px] text-left text-[#333]">
                      Tili
                    </p>
                  </div>
                </div>
                <div className="w-[118px] h-[38px]">
                  <button
                    onClick={() => decrement(item.id)}
                    className="flex justify-center items-center w-[38px] h-[38px] absolute left-[294px] top-[209px] gap-2.5 px-5 py-3 rounded border border-[#53b164]"
                  >
                    -
                  </button>
                  <p className="absolute left-[347.5px] top-[213.92px] text-2xl text-left text-black">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => increment(item.id)}
                    className="flex justify-center items-center w-[38px] h-[38px] absolute left-[374px] top-[209px] gap-2.5 px-5 py-3 rounded border border-[#53b164]"
                  >
                    +
                  </button>
                </div>
                <p className="absolute left-[294px] top-[63px] text-[15px] text-left text-[#333]">
                  Yetkazib berish xizmati bepul :
                </p>
              </div>
            )
        )}
        <div className="w-[908px] h-[237px] mt-4 rounded-[14px] bg-white border border-[#242424]/10 p-4">
          <div className="flex justify-between">
            <p className="opacity-50 text-[11px] text-left text-[#242424]">
              Delivery taxi
            </p>
            <p className="opacity-50 text-[11px] text-left text-[#242424]">
              Free
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="opacity-50 text-[11px] text-left text-[#242424]">
              Discount
            </p>
            <p className="opacity-50 text-[11px] text-left text-[#242424]">
              -6.00 UZS
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm font-semibold text-left text-[#242424]">
              Subtotal
            </p>
            <p className="text-sm font-semibold text-right text-[#53b164]">
              36.00 UZS
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-sm font-semibold text-left text-[#242424]">
              TOTAL
            </p>
            <p className="text-sm font-semibold text-right text-[#53b164]">
              30.00 UZS
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate("/profile/modal")}
              className="px-8 py-2 rounded-[10px] bg-[#53b164] text-white font-bold"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitob6;
