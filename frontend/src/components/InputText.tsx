interface iProps {
  label: string;
  state: [string, (value: string) => void];
  placeholder: string;
}

export default function InputText({ label, state, placeholder }: iProps) {
  const [value, setValue] = state;

  return (
    <label className="input-field">
      {label}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
}
