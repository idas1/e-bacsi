const PlanSlide = ({ plan }) => {
  return (
    <div className="cursor-pointer rounded-lg w-72 h-40 bg-white flex justify-center items-center">
      <img
        src={`./images/${plan.url}`}
        alt="#error"
        className="w-40 h-40 object-contain rounded-t-lg rounded-l-lg"
      />
    </div>
  );
};

export default PlanSlide;
