interface MarqueeProps {
  children: React.ReactNode;
  className?: string
}

const Marquee = (props: MarqueeProps) => {
  return (
    <div className={`relative flex w-full overflow-x-hidden ${props.className}`}>
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
