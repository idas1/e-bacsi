const Feature = ({ url, title, desc }) => {
  return (
    <div className="flex flex-col w-72 h-64 bg-white rounded-2xl p-2.5">
      <div className="flex gap-4 items-center mb-5">
        <img className="w-14 h-14 object-contain" src={url} alt="#Error" />
        <p className="text-lg text-primary font-bold text-left">{title}</p>
      </div>
      <p className="font-[15px] leading-7 text-[#777777] text-left">{desc}</p>
    </div>
  );
};

export default Feature;
