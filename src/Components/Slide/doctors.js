const DoctorsSlide = ({ doctor }) => {
  return (
    <div className="w-[390px] h-[460px] flex justify-center items-center flex-col">
      <img
        className="w-[390px] h-[360px] object-contain mb-5"
        src={`/images/${doctor.url}`}
        alt="#image"
      />
      <p className="text-primary text-lg mb-4">{doctor.name}</p>
      <p className="text-[#444]">Chuyên Khoa: {doctor.major}</p>
    </div>
  );
};

export default DoctorsSlide;
