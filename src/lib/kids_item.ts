import { SliderProps, Workshop } from "@/props/sliderprops";

const kids_items: Workshop[] = [
  // Workshop 1d
  {
    metadata: {
      id: 1,
      title: "Wooden Animal Carving",
      price: 1000,
      date: "05/04/2024",
      text: [
        "Learn how to carve wooden animals",
        "Create your own wooden toys",
        "Discover the art of wood burning",
      ],
    },
    slides: [
      {
        id: 1,
        url: ["/images/whittling.jpg"],
      },
      {
        id: 2,
        url: ["/images/kids/slide2.jpg"],
      },
      {
        id: 3,
        url: ["/images/kids/slide3.jpg"],
      },
      {
        id: 4,
        url: ["/images/whittling.jpg"],
      },
    ],
  },
  // Workshop 2
  {
    metadata: {
      id: 2,
      title: "Pottery Making for Kids",
      price: 1200,
      date: "06/04/2024",
      text: [
        "Learn the basics of pottery",
        "Create your own ceramic masterpieces",
        "Explore different pottery techniques",
      ],
    },
    slides: [
      {
        id: 1,
        url: ["/images/whittling.jpg"],
      },
      {
        id: 2,
        url: ["/images/kids/slide2.jpg"],
      },
      {
        id: 3,
        url: ["/images/kids/slide3.jpg"],
      },
      {
        id: 4,
        url: ["/images/whittling.jpg"],
      },
    ],
  },
  // Workshop 3
  {
    metadata: {
      id: 3,
      title: "Junior Chef Cooking Class",
      price: 800,
      date: "07/04/2024",
      text: [
        "Learn cooking basics and kitchen safety",
        "Prepare delicious and healthy recipes",
        "Explore various cooking techniques",
      ],
    },
    slides: [
      {
        id: 1,
        url: ["/images/whittling.jpg"],
      },
      {
        id: 2,
        url: ["/images/kids/slide2.jpg"],
      },
      {
        id: 3,
        url: ["/images/kids/slide3.jpg"],
      },
      {
        id: 4,
        url: ["/images/whittling.jpg"],
      },
    ],
  },
  // Workshop 4
  {
    metadata: {
      id: 4,
      title: "Junior Astronomer Camp",
      price: 1500,
      date: "08/04/2024",
      text: [
        "Explore the wonders of the universe",
        "Observe stars, planets, and galaxies",
        "Learn about space missions and astronauts",
      ],
    },
    slides: [
      {
        id: 1,
        url: ["/images/whittling.jpg"],
      },
      {
        id: 2,
        url: ["/images/kids/slide2.jpg"],
      },
      {
        id: 3,
        url: ["/images/kids/slide3.jpg"],
      },
      {
        id: 4,
        url: ["/images/whittling.jpg"],
      },
    ],
  },
  // Workshop 5
  {
    metadata: {
      id: 5,
      title: "Creative Storytelling Workshop",
      price: 900,
      date: "09/04/2024",
      text: [
        "Learn the art of storytelling",
        "Create your own imaginative stories",
        "Develop writing and communication skills",
      ],
    },
    slides: [
      {
        id: 1,
        url: ["/images/whittling.jpg"],
      },
      {
        id: 2,
        url: ["/images/kids/slide2.jpg"],
      },
      {
        id: 3,
        url: ["/images/kids/slide3.jpg"],
      },
      {
        id: 4,
        url: ["/images/whittling.jpg"],
      },
    ],
  },
];

export default kids_items;
