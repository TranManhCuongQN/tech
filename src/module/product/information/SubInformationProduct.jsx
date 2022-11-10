import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../../redux/cart/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
const SubInformationProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddCart = () => {
    const action = addToCart({
      id: data.id,
      data,
      quantity: 1,
    });
    dispatch(action);
  };
  const handleBuy = () => {
    const action = addToCart({
      id: data.id,
      data,
      quantity: 1,
    });
    dispatch(action);
    navigate("/cart");
  };
  return (
    <div className="product-info flex flex-col p-6">
      <span className="text-2xl font-medium mb-2">
        {/* Laptop APPLE MacBook Air 2020 MGNE3SA/A (13.3" Apple M1/8GB/512GB
        SSD/Onboard/macOS/1.3kg) */}
        {data.title}
      </span>
      <div className="flex items-center justify-start gap-x-5 mb-4">
        <span className="text-lg text-slate-400">
          Thương hiệu: {data.brand}
        </span>
        <span>|</span>
        <span className="text-lg text-slate-400">SKU: {data.id}</span>
      </div>
      {data.inventory < 5 && (
        <span className="text-orange-500 font-medium mb-4">
          Chỉ còn {data.inventory} sản phẩm
        </span>
      )}
      <span className="text-2xl font-semibold text-blue-700 mb-2">
        {formatPrice(data.promotion)}
      </span>
      <div className="flex items-center mb-6">
        <span className="text-base line-through text-slate-400 ">
          {formatPrice(data.price)}
        </span>
        <span className="text-blue"> - {data.percent}%</span>
      </div>
      <span className="w-full border-dotted border-2 mb-6"></span>
      <div className="flex items-center justify-between px-10">
        <button
          className="px-24 py-4 bg-blue-800 text-white text-xl font-medium rounded-md"
          type="button"
          onClick={handleBuy}
        >
          MUA NGAY
        </button>
        <button
          className="px-8 py-4  text-blue-700 text-xl font-medium rounded-md border-2 border-blue-700"
          type="button"
          onClick={handleAddCart}
        >
          THÊM VÀO GIỎ HÀNG
        </button>
      </div>
      <span className="w-full border-dotted border-2 my-6"></span>
    </div>
  );
};

export default SubInformationProduct;