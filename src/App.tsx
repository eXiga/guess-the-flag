import Answers from "./components/Answers";
import Flag from "./components/Flag";
import { codes } from "./data/codes";

function random(min: number, max: number): number {
  const left = Math.ceil(min);
  const right = Math.floor(max);

  return Math.floor(Math.random() * (right - left + 1)) + left;
}

export default function App() {
  const countries = [
    codes[random(0, 242)],
    codes[random(0, 242)],
    codes[random(0, 242)],
    codes[random(0, 242)],
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      <Flag country={countries[0]} />
      <Answers countries={countries} />
    </div>
  );
}
