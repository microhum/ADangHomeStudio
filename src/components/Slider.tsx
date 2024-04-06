import sliderData from "@/lib/Items";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden flex h-full w-full items-center justify-center bg-meadow-400"
      ref={emblaRef}
    >
      <div className="flex">
        {sliderData?.map((item: any) => {
          return (
            <div className="embla__slide relative h-full w-full" key={item.id}>
              <Image
                className="w-full h-full object-cover"
                width={512}
                height={512}
                src={item.url}
                alt=""
              />
              <div className="absolute top-0 left-0">ID: {item.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface SliderProps {
  data: {
    id: number;
    description?: string[];
    url?: string[];
  }[];
}
const CustomSlider = (props: SliderProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden h-full w-full bg-meadow-400" ref={emblaRef}>
      <div className="flex">
        {/* Map Item */}
        {props.data?.map((item: any) => (
          <div
            className="embla__slide flex justify-center items-center h-[50vh] w-full"
            key={item.id}
          >
            {/* Description */}
            {item.description ? (
              <div className="p-6">
                <h1 className="text-4xl text-white mb-5 font-bold">
                  WOODWORKING CLASS
                </h1>
                <ul className="list-disc">
                  {item.description.map((text: string, idx: number) => (
                    <li
                      key={idx}
                      className="text-lg lg:text-2xl text-white font-medium"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            {item.url?.map((url: string, idx: number) => (
              <Image
                key={idx}
                className="w-full h-full object-cover"
                width={512}
                height={512}
                src={url}
                alt=""
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Slider, CustomSlider };
