interface MarqueeProps {
  children: React.ReactNode;
}

const Marquee = (props: MarqueeProps) => {
  return (
    <div className="relative flex w-full overflow-x-hidden bg-white">
      <div className="py-4 animate-marquee whitespace-nowrap">
        {props.children}
      </div>

      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        {props.children}
      </div>
    </div>
  );
};

export default Marquee
