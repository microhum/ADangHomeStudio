const Footer = () => {
  return (
    <div className="flex flex-col gap-y-4 sm:flex-row h-full lg:h-[50vh] bg-green-300 items-center justify-center sm:justify-around">
      <div className="flex mt-10 sm:mt-0">
        {/* Google Map Frame */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.3113399295335!2d98.98564941052886!3d18.82881955961258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b2a1955fd99%3A0xf8ef95af9f71ecaf!2sA.%20Dang%20Home%20Studio!5e0!3m2!1sth!2sth!4v1712290915901!5m2!1sth!2sth"
          width="300"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
      <div>
        <div className="flex text-sm sm:text-lg lg:text-4xl font-bold font-serif">
          Our studio is open by appointment only
        </div>
        <div className="flex text-sm sm:text-lg lg:text-4xl font-bold font-serif">Wednesday-Sunday</div>
        <div className="flex mt-10 text-sm lg:text-lg font-bold">2 Mahachok 17 Alley</div>
        <div className="flex text-sm lg:text-lg font-bold">Pa Tan Chiang Mai, Thailand 50300</div>
      </div>
    </div>
  );
};

export default Footer;
