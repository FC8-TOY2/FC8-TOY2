interface TextInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  label,
  type,
  name,
  placeholder,
  value,
  error,
  ...props
}: TextInputProps) {
  return (
    <label htmlFor={name} className="w-full flex flex-col gap-1 text-sm">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-violet-400 text-base p-2 rounded-xl w-full placeholder:font-light placeholder:text-sm"
        value={value}
        {...props}
      />
      {error && <span className="text-xs px-1 text-red-300">{error}</span>}
    </label>
  );
}

export default TextInput;
