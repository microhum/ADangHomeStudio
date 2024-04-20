export interface SliderProps {
  description: {
    id: number;
    title: string;
    text: string[];
  }
  data: {
    image: {
      id: number;
      url?: string[];
    }[]
  }[]

  // scroll function
  scrollTo: () => void;
}
