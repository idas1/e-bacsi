const SessionStyle = {
  backgroundImage: 'url("/images/banner3.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Session = ({ title }) => {
  return (
    <div
      style={SessionStyle}
      className="w-[1920px] h-60 flex flex-col justify-center items-center mt-5"
    >
      <p className="text-6xl text-white font-bold mb-5">{title}</p>
      <img className="scale-150" src="/images/line2.png" alt="#error" />
    </div>
  );
};

export default Session;
