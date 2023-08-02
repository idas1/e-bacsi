const TopCollection = ({ label, className, labelClassName, noLine, left }) => {
  return (
    <div
      className={`flex flex-col m-auto  justify-center gap-4 py-5 ${
        left ? "items-start" : "items-center"
      } ${className} `}
    >
      <p className={`${labelClassName} text-primary text-[32px] font-bold`}>
        {label}
      </p>

      {!noLine && <img className="w-16 h-1" src="/images/line.jpg" />}
    </div>
  );
};

export default TopCollection;
