import React, { FC, useCallback, useState } from "react";
import useShoppingItemStore from "@/stores/ShoppingCartStore";
import { FaPaintBrush } from "react-icons/fa";

interface ShoppingCartProps {
  item: {
    id: any;
    name: string;
    description: string;
    price: number;
    place_left: number;
  };
}
const ShoppingCartItem: FC<ShoppingCartProps> = ({ item }) => {
  const { id, name, description, price, place_left } = item;
  const { selected, setSelected } = useShoppingItemStore();

  const handleClick = useCallback(() => {
    setSelected(item);
  }, [item]);

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`relative flex flex-col justify-center gap-y-5 items-center md:flex-row md:justify-around w-4/5 px-2 py-5 bg-white rounded-xl border-4 transition-all duration-400 ${
        selected?.id == id
          ? "border-amber-600"
          : "border-white hover:border-gray-200 hover:animate-pulse"
      }`}
    >
      {/* name */}
      <h1 className="flex md:w-4/12 text-lg lg:text-3xl font-semibold">
        {name}
      </h1>

      {/* description */}
      <p className="flex md:w-8/12 text-sm lg:text-lg font-light">{description}</p>
      <p className="flex md:w-1/12 text-sm lg:text-lg font-light">{price} Bath</p>
      <p className="flex md:w-1/12 text-sm lg:text-lg font-light">
        {place_left} Place{place_left > 1 ? "s" : ""} Left.
      </p>
    </button>
  );
};

export default ShoppingCartItem;
