const Input = ({ value, onChange, disable, className, placeholder, type, types }) => {
  return !types || types === "input" ? (
    <input
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disable}
      className={`${className} no-arrows w-full min-h-9 rounded-2xl border-[#004b99] border placeholder:text-[#6c757d] bg-white text-lg text-[#343a40] p-3 outline-none`}
      type={type}
      placeholder={placeholder}
    />
  ) : types === "textarea" ? (
    <textarea
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disable}
      className={`${className} w-full min-h-9 rounded-2xl border-[#004b99] border placeholder:text-[#6c757d] bg-white text-lg text-[#343a40] p-3 outline-none`}
      placeholder={placeholder}
    />
  ) : null;
};

export default Input;
