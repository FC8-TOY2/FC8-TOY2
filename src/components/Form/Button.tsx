interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  backgroundColor?: string;
  borderColor?: string;
  buttonInnerText: string;
  textColor?: string;
  width?: string;
  onClick?: (event: React.MouseEvent) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button({
  type,
  backgroundColor,
  borderColor,
  buttonInnerText,
  textColor,
  width,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${backgroundColor} ${borderColor} ${textColor} ${width} border rounded-xl py-2`}
      {...props}
    >
      {buttonInnerText}
    </button>
  );
}
