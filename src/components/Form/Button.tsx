interface ButtonProps {
  backgroundColor?: string;
  borderColor?: string;
  buttonInnerText: string;
  textColor?: string;
  onClick?: () => void;
}

function Button({
  backgroundColor,
  borderColor,
  buttonInnerText,
  textColor,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${backgroundColor} ${borderColor} ${textColor} border rounded-xl py-2`}
    >
      {buttonInnerText}
    </button>
  );
}

Button.defaultProps = {
  backgroundColor: 'bg-white',
  borderColor: 'border-violet-400',
  textColor: 'text-black',
  onClick: null,
};

export default Button;
