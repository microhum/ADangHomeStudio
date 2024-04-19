export interface SliderProps {
  description: {
    id: number;
    text?: string[];
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
