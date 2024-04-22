interface MarqueeProps {
  children: React.ReactNode;
  len?: number;
  className?: string;
}

const Marquee = ({children, len=1, className}: MarqueeProps) => {
  return (
    <div
      className={`relative flex w-full overflow-x-hidden ${className}`}
    >
      <div className="py-4 inline-flex animate-marquee whitespace-nowrap">
        {[...Array(len)].map((elementInArray, index) => (
          <div key={index}>{children}</div>
        ))}
      </div>

      <div className="absolute inline-flex top-0 py-4 animate-marquee2 whitespace-nowrap">
        {[...Array(len)].map((elementInArray, index) => (
          <div key={index}>{children}</div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
