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
    codes[random(0, codes.length-1)],
    codes[random(0, codes.length-1)],
    codes[random(0, codes.length-1)],
    codes[random(0, codes.length-1)],
  ];

  return (
    <div className="bg-[#FAF7F5] w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-6 pt-20">
        <div className="w-80 h-64">
          <Flag country={countries[random(0, countries.length-1)]} />
        </div>
        <div className="w-96">
          <Answers countries={countries} />
        </div>
      </div>
    </div>
  );
}
