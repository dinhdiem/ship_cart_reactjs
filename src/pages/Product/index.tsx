import React from "react";
import img1 from "../../assets/7.jpg";
import img2 from "../../assets/5.jpg";
import img3 from "../../assets/6.jpg";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../types/product";

type Props = {
    products: ProductType[],
    onRemove: (id: number) => void
};

const index = (props: Props) => {
  return (
    <div className="grid grid-cols-4 px-28 mx-auto">
      <div className="col-span-1">
        <ul className="text-left space-y-2 mx-2">
          <li className="text-2xl border-b uppercase">Danh mục</li>
          <li><NavLink to={''}>Nam</NavLink></li>
          <li><NavLink to={''}>Nữ</NavLink></li>
          <li><NavLink to={''}>Trẻ em</NavLink></li>
          <li><NavLink to={''}>Phụ kiện</NavLink></li>
        </ul>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
            <div className="">
                <img src={img1} alt="" />
                <a href=""><h1>Ao thun</h1></a>
                <span>199.000 VND</span>
            </div>
            <div className="">
                <img src={img2} alt="" />
                <a href=""><h1>Ao thun</h1></a>
                <span>199.000 VND</span>
            </div>
            <div className="">
                <img src={img3} alt="" />
                <a href=""><h1>Ao thun</h1></a>
                <span>199.000 VND</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
