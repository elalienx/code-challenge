interface iProps {
  label: string;
  state: [boolean, (value: boolean) => void];
}

export default function InputCheckbox({ label, state }: iProps) {
  const [value, setValue] = state;

  return (
    <label className="input-field">
      <input
        type="checkbox"
        checked={value}
        onChange={() => setValue(!value)}
      />
      {label}
    </label>
  );
}
