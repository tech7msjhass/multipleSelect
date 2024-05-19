import { useState } from "react";
import Select, { SelectOption } from "./components/select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
  { label: "Sixth", value: 6 },
  { label: "Seventh", value: 7 },
  { label: "Eighth", value: 8 },
  { label: "Ninth", value: 9 },
  { label: "Tenth", value: 10 },
];

function App() {
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
      }}
    >
      <Select options={options} value={value1} onChange={(o) => setValue1(o)} />
      <br />
      <Select
        multiple
        options={options}
        value={value2}
        onChange={(o) => setValue2(o)}
      />
    </div>
  );
}

export default App;
