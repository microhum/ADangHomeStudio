interface metadata {
    id: number;
    title: string;
    price?: number;
    date?: string;
    text: string[];
  }

interface slide {
      id: number;
      url?: string[];
  }

export interface Workshop {
  metadata: metadata
  slides: slide[]
}

export interface WorkshopDict {
  [key: string]: Workshop;
};

export interface SliderProps extends Workshop{
  // scroll function
  scrollTo?: () => void;
  height?: number
}
