interface iProps {
  label: string;
  state: [number, (value: number) => void];
  range: [number, number];
}

export default function InputRange({ state, label, range }: iProps) {
  const [value, setValue] = state;
  const [minimum, maximum] = range;

  return (
    <label className="input range">
      {label} {value}/{maximum}
      <br />
      <input
        type="range"
        min={minimum}
        max={maximum}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </label>
  );
}
