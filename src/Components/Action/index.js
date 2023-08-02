const Action = ({ url, title, className }) => {
  return (
    <div className={`w-[390px] h-[320px] ${className}`}>
      <img className="w-52 h-52 object-contain m-auto" src={url} alt="#error" />
      <p className="text-[17px] font-bold text-primary hover:text-orange">
        {title}
      </p>
    </div>
  );
};

export default Action;
