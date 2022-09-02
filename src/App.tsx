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
    <div className="bg-indigo-50 w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-6 pt-20">
        <div className="w-80 h-64">
          <Flag country={countries[0]} />
        </div>
        <div className="w-96">
          <Answers countries={countries} />
        </div>
      </div>
    </div>
  );
}
