const now = new Date();

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  desc?: string;
}

const events: Event[] = [
  /* {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  }, */
  {
    id: 1,
    title: "Wood Carving Workshop: Basics of Whittling",
    start: new Date(2024, 3, 5, 10, 0, 0),
    end: new Date(2024, 3, 5, 12, 0, 0),
    desc: "Learn the fundamentals of whittling and carving small wooden objects.",
  },
  {
    id: 2,
    title: "Wood Sculpture Exhibition Opening",
    start: new Date(2024, 3, 10, 18, 0, 0),
    end: new Date(2024, 3, 10, 20, 0, 0),
    desc: "Discover intricate wood sculptures by local artists at the exhibition opening.",
  },
  {
    id: 3,
    title: "Intermediate Wood Carving Class",
    start: new Date(2024, 3, 15, 13, 0, 0),
    end: new Date(2024, 3, 15, 15, 0, 0),
    desc: "Build on your wood carving skills with this intermediate-level class.",
  },
  {
    id: 4,
    title: "Wood Carving Demonstration at the Park",
    start: new Date(2024, 3, 20, 11, 0, 0),
    end: new Date(2024, 3, 20, 13, 0, 0),
    desc: "Watch skilled wood carvers demonstrate their techniques in the park.",
  },
  {
    id: 5,
    title: "Wood Carving Club Meeting",
    start: new Date(2024, 3, 25, 19, 0, 0),
    end: new Date(2024, 3, 25, 21, 0, 0),
    desc: "Join fellow wood carving enthusiasts for a club meeting and carving session.",
  },
  {
    id: 6,
    title: "Wood Sculpture Symposium",
    start: new Date(2024, 4, 1, 9, 0, 0),
    end: new Date(2024, 4, 1, 17, 0, 0),
    desc: "Attend lectures, workshops, and discussions on wood sculpture at the symposium.",
  },
  {
    id: 7,
    title: "Wood Carving Competition",
    start: new Date(2024, 4, 5, 10, 0, 0),
    end: new Date(2024, 4, 5, 16, 0, 0),
    desc: "Compete or watch talented wood carvers showcase their skills in this annual competition.",
  },
  {
    id: 8,
    title: "Wood Carving Market",
    start: new Date(2024, 4, 10, 10, 0, 0),
    end: new Date(2024, 4, 10, 15, 0, 0),
    desc: "Browse and purchase handcrafted wood carvings from local artisans at the market.",
  },
  {
    id: 9,
    title: "Wood Carving Retreat",
    start: new Date(2024, 4, 15, 9, 0, 0),
    end: new Date(2024, 4, 17, 17, 0, 0),
    desc: "Escape to the woods for a weekend of relaxation, inspiration, and wood carving.",
  },
  {
    id: 10,
    title: "Woodworking Fair",
    start: new Date(2024, 4, 20, 12, 0, 0),
    end: new Date(2024, 4, 20, 18, 0, 0),
    desc: "Explore a wide range of woodworking tools, materials, and techniques at the fair.",
  },
];

export default events;
