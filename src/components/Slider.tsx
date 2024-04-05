import sliderData from "@/lib/Items";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

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
              <img className="w-full h-full object-cover" src={item.url} alt="" />
              <div className="absolute top-0 left-0">ID: {item.id}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider
