import NavBar from "@/components/NavBar";
import { useState } from "react";
import ShoppingCartItem from "@/components/cartItem";

const Booking = () => {
  const [SelectedID, setSelectedID] = useState<string | null>(null);
  const items = [
    {
      id: 1,
      description: "Good Course You should go !",
      name: "Item 1",
      price: 2000,
      place_left: 0,
    },
    {
      id: 2,
      description: "Good Course You should go !",
      name: "Item 2",
      price: 2000,
      place_left: 2,
    },
    {
      id: 3,
      description: "Good Course You should go !",
      name: "Item 3",
      price: 2000,
      place_left: 1,
    },
    {
      id: 4,
      description: "Good Course You should go !",
      name: "Item 4",
      price: 2000,
      place_left: 1,
    },
    {
      id: 5,
      description: "Good Course You should go !",
      name: "Item 5",
      price: 2000,
      place_left: 1,
    },
  ];
  return (
    <>
      <div className="flex flex-col  items-center bg-cream w-full h-[20vh]" />
      <div className="flex flex-col gap-8 items-center bg-cream w-full h-screen">
        <p className="text-3xl text-meadow-400 font-serif font-bold">
          Booking Avaliable : {items.length}
        </p>
        {items.map((item) => (
          <div className="flex items-center justify-center w-full" key={item.id+"_"+item.name}>
            <ShoppingCartItem
              id={item.id}
              description={item.description}
              name={item.name}
              price={item.price}
              place_left={item.place_left}
            />
          </div>
        ))}
        <button className="text-2xl text-white bg-meadow-300 p-6 rounded-xl border-4 hover:text-black hover:border-black">
          Submit
        </button>
      </div>
    </>
  );
};

export default Booking;
