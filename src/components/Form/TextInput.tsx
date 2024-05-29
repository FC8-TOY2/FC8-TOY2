interface TextInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string | null;
}

function TextInput({
  label,
  type,
  name,
  placeholder,
  value,
  error,
}: TextInputProps) {
  return (
    <label htmlFor={name} className="w-full flex flex-col gap-2 text-sm">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-violet-400 text-base p-2 rounded-xl"
        value={value}
      />
      {error && <span className="text-sm px-1 text-red-300">{error}</span>}
    </label>
  );
}

TextInput.defaultProps = {
  placeholder: '',
  error: null,
};

export default TextInput;
