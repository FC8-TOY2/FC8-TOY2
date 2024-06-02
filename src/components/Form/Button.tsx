interface ButtonProps {
  type?: string;
  backgroundColor?: string;
  borderColor?: string;
  buttonInnerText: string;
  textColor?: string;
  onClick?: (event: React.MouseEvent) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button({
  type,
  backgroundColor,
  borderColor,
  buttonInnerText,
  textColor,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${backgroundColor} ${borderColor} ${textColor} border rounded-xl py-2`}
      {...props}
    >
      {buttonInnerText}
    </button>
  );
}
