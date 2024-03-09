import { useRouter } from "next/router";

const Item = () => {
  const router = useRouter();
  const { item } = router.query;
  const itemList = Array.isArray(item) ? item : [item];

  return (
    <>
      <div className="flex w-full h-[30vh] bg-white"></div>
      <div className="flex w-full h-[70vh] bg-white justify-center">
        <div className="text-4xl">
          <p>ID: {itemList[0]}</p>
          <p>Name: {itemList[1]}</p>
        </div>
      </div>
    </>
  );
};
export default Item;
