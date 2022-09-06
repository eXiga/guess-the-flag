import { CountryCode } from "../data/countries";
import { useGameStore } from "../store";

interface CountryProps {
  country: CountryCode;
  index: number; // i need it to simplify guess logic
}

function buttonBackgroundColor(
  guess: number,
  isPickedCorrectly: boolean,
  index: number,
  correctAnswer: number
): string {
  if (guess === -1) {
    return "bg-[#65C3C8]";
  } else {
    if (isPickedCorrectly) {
      return guess === index ? "bg-green-500" : "bg-[#65C3C8]";
    } else {
      if (guess === index) {
        return "bg-red-500";
      } else if (correctAnswer === index) {
        return "bg-green-500";
      }
    }
  }

  return "bg-[#65C3C8]";
}

export default function Country({ country, index }: CountryProps) {
  const setGuess = useGameStore((state) => state.setGuess);
  const guess = useGameStore((state) => state.guess);
  const isPickedCorrectly = useGameStore((state) => state.isPickedCorrectly);
  const correctAnswer = useGameStore((state) => state.correctAnswer);
  const createPuzzle = useGameStore((state) => state.createPuzzle);
  const countryName = country.name.split(",", 1)[0];

  return (
    <div className="grow">
      <button
        onClick={() => {
          setTimeout(() => {
            createPuzzle();
          }, 2000);
          return setGuess(index);
        }}
        className={`w-full h-12 text-xl truncate rounded-md font-mono ${buttonBackgroundColor(
          guess,
          isPickedCorrectly,
          index,
          correctAnswer
        )}`}
      >
        {countryName}
      </button>
    </div>
  );
}
