const Button = ({
  label,
  icon,
  borderColor,
  backgroundColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "  border-coral-red bg-coral-red text-white"
      } ${fullWidth ? "w-full" : ""}3
     `}
    >
      {label}
      {icon && <img src={icon} alt="" className="ml-2 h-5 w-5 rounded-full" />}
    </button>
  );
};
export default Button;
