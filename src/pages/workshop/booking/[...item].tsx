import { useRouter } from "next/router";
import useShoppingItemStore from "@/stores/ShoppingItemStore";
import ApplyForm from "@/components/ApplyForm";

const Item = () => {
  const router = useRouter();
  const { item } = router.query;
  const itemList = Array.isArray(item) ? item : [item];
  const { selected } = useShoppingItemStore();
  // id: null,
  // name: null,
  // description: null,
  // price: null,
  // place_left: null,
  return (
    <>
      <div className="flex flex-col w-full h-full min-[80vh] py-28 bg-cream">
        <div className="flex flex-col w-4/5 p-12 h-full self-center rounded-xl bg-meadow-300">
          <div className="bg-meadow-400 p-6 rounded-xl">
            <p className="underline mb-3 font-bold text-2xl lg:text-3xl text-cream">
              Workshop Details
            </p>
            <p className="absolute -translate-y-[68px] lg:-translate-y-[72px] -translate-x-4 text-lg text-cream">
              ID: {selected.id}
            </p>
            <p className="text-sm lg:text-2xl text-cream font-semibold">
              Name: {selected.name}
            </p>
            <p className="text-sm lg:text-lg text-cream">
              Description: {selected.description}
            </p>
            <p className="text-sm lg:text-lg text-cream">
              Price: {selected.price}
            </p>
            <p className="text-sm lg:text-lg text-cream">
              Place Lefts: {selected.place_left}
            </p>
          </div>
          <div className="relative flex flex-col bg-meadow-400 h-full w-full p-6 rounded-xl mt-10">
            <p className="underline mb-3 font-bold text-2xl lg:text-3xl text-cream">
              Information
            </p>
            <ApplyForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
