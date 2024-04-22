import { WorkshopDict } from "@/props/sliderprops";

const teens_items: WorkshopDict = {
    // Wood whitting
    "whitting": {
      metadata: {
        id: 1,
        price: 1000,
        title: "Wooden Animal Carving",
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
  
    // Wood Jewelry
    "jewelry": {
      metadata: {
        id: 1,
        price: 1200,
        title: "Pottery Making for Kids",
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
          url: ["/images/jewelry/slide1.jpg"],
        },
        {
          id: 2,
          url: ["/images/jewelry/slide2.jpg"],
        },
        {
          id: 3,
          url: ["/images/jewelry/slide3.jpg"],
        },
      ],
    },

    // Wood Carving
    "carving": {
        metadata: {
          id: 1,
          price: 1200,
          title: "Wood Carving",
          date: "06/04/2024",
          text: [
            "Learn the basics of carving",
            "Create your own ceramic masterpieces",
            "Explore different pottery techniques",
          ],
        },
        slides: [
          {
            id: 1,
            url: ["/images/carving/slide1.jpg"],
          },
          {
            id: 2,
            url: ["/images/carving/slide1.jpg"],
          },
          {
            id: 3,
            url: ["/images/carving/slide1.jpg"],
          },
        ],
      },
  };
  

export default teens_items;
