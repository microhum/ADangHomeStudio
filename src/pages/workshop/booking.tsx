import NavBar from "@/components/NavBar";
import { useCallback, useState } from "react";
import ShoppingCartItem from "@/components/CartItem";
import useShoppingItemStore from "@/stores/ShoppingItemStore";
import { useRouter } from "next/router";

const Booking = () => {
  const router = useRouter();
  const { selected } = useShoppingItemStore();
  const redirectToItem = useCallback(
    () => router.push(`/workshop/booking/${selected.id}/${selected.name}`),
    [router, selected]
  );
  const items = [
    {
      id: 1,
      name: "TimberCraft Carving Workshop",
      description:
        "Unlock the artistry of wood with our TimberCraft Carving Workshop! Dive into the world of wood carving and whittling under the guidance of seasoned artisans. From basic techniques to intricate designs, discover the joy of shaping wood into beautiful creations.",
      price: 1500,
      place_left: 5,
    },
    {
      id: 2,
      name: "WhittleWonders: Mastering Wood Whittling",
      description:
        "Join WhittleWonders for an immersive journey into the ancient craft of wood whittling! Delve into the fundamentals of knife work and learn to coax out the hidden beauty within every block of wood. Whether you're a beginner or seasoned carver, our workshop offers insights and inspiration to hone your skills.",
      price: 1800,
      place_left: 3,
    },
    {
      id: 3,
      name: "Rustic Roots Carving Retreat",
      description:
        "Embark on a rustic retreat into the heart of wood carving at Rustic Roots! Immerse yourself in nature's studio and learn the timeless art of shaping wood with precision and creativity. From traditional to contemporary styles, discover your unique voice in woodwork amidst serene surroundings.",
      price: 2000,
      place_left: 2,
    },
    {
      id: 4,
      name: "WildWood Whittling Workshop",
      description:
        "Experience the enchantment of wood whittling at WildWood! Our workshop invites you to explore the magic of transforming raw wood into intricate designs. With expert guidance and a tranquil atmosphere, unleash your creativity and carve your way to mastery.",
      price: 1700,
      place_left: 4,
    },
    {
      id: 5,
      name: "ForestForge Wood Carving Intensive",
      description:
        "Forge your skills in wood carving amidst the beauty of the forest at ForestForge! Our intensive workshop blends traditional techniques with contemporary approaches, offering a comprehensive journey into the world of woodwork. Join us and sculpt your imagination into reality.",
      price: 2200,
      place_left: 1,
    },
    {
      id: 6,
      name: "WhisperingWoods Carving Masterclass",
      description:
        "Listen to the whispers of the woods and master the art of carving at WhisperingWoods! Our masterclass delves deep into the nuances of woodwork, from selecting the perfect wood to refining your carving techniques. Let the forest be your guide as you craft your own masterpiece.",
      price: 1900,
      place_left: 3,
    },
    {
      id: 7,
      name: "WoodCrafters Retreat",
      description:
        "Escape to WoodCrafters Retreat and immerse yourself in the serenity of wood carving! Our retreat offers a sanctuary for aspiring woodcrafters, providing expert instruction and ample opportunity to practice your skills. Discover the beauty of wood and unleash your creativity in our peaceful haven.",
      price: 1600,
      place_left: 2,
    },
    {
      id: 8,
      name: "WhittleWorks Weekend Workshop",
      description:
        "Carve out some time for creativity at WhittleWorks Weekend Workshop! Join us for a weekend of hands-on wood whittling, where you'll learn essential techniques and create your own unique pieces. No experience necessary – just bring your enthusiasm and let the carving begin!",
      price: 1300,
      place_left: 6,
    },
    {
      id: 9,
      name: "SylvanSculpt Wood Carving Course",
      description:
        "Unleash your inner sculptor amidst the sylvan beauty of SylvanSculpt! Our wood carving course is designed to inspire and educate, guiding you through the process of transforming wood into art. From novice to expert, all skill levels are welcome to join this creative journey.",
      price: 2100,
      place_left: 0,
    },
    {
      id: 10,
      name: "WhisperingPines Woodworking Workshop",
      description:
        "Discover the secrets of woodwork at WhisperingPines! Our workshop combines the tranquility of nature with the thrill of craftsmanship, offering a holistic approach to woodworking. From carving to finishing, learn the essentials of woodworking and create lasting treasures.",
      price: 1750,
      place_left: 4,
    },
  ];

  return (
    <>
      <div className="bg-cream w-full h-[20vh]" />
      <div className="flex flex-col gap-8 items-center bg-cream w-full h-full">
        <p className="text-3xl text-meadow-400 font-serif font-bold">
          Booking Avaliable : {items.length}
        </p>
        {items.map((item) => (
          <div
            className="flex items-center justify-center w-full"
            key={item.id + "_" + item.name}
          >
            <ShoppingCartItem item={item} />
          </div>
        ))}
      </div>
      {selected.id != null ? (
        <button
          onClick={redirectToItem}
          className="fixed bottom-0 left-0 right-0 drop-shadow-xl mx-auto text-xl text-white bg-meadow-300 py-5 rounded-t-xl border-4 hover:text-black hover:bg-white  transition-all duration-400"
        >
          Submit
        </button>
      ) : (
        ""
      )}
      <div className="bg-cream w-full h-[20vh]" />
    </>
  );
};

export default Booking;
