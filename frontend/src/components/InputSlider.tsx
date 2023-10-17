interface iProps {
  label: string;
  state: [number, (value: number) => void];
  range: [number, number];
}

export default function InputSlider({ state, label, range }: iProps) {
  const [value, setValue] = state;
  const [minium, maximum] = range;

  return (
    <label className="input-field">
      {label}: {value}/{maximum}
      <br />
      <input
        type="range"
        min={minium}
        max={maximum}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </label>
  );
}
