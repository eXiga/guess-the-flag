import { CountryCode } from "../data/countries";

interface CountryProps {
  country: CountryCode;
  onClick: () => void;
  currentIndex: number; // i need it to simplify guess logic
  guessIndex: number;
  isPickedCorrectly: boolean;
  correctAnswerIndex: number;
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

export default function Country({
  country,
  onClick,
  currentIndex,
  guessIndex,
  isPickedCorrectly,
  correctAnswerIndex,
}: CountryProps) {
  const countryName = country.name.split(",", 1)[0];

  return (
    <div className="grow">
      <button
        onClick={onClick}
        className={`w-full h-12 text-xl truncate rounded-md font-mono ${buttonBackgroundColor(
          guessIndex,
          isPickedCorrectly,
          currentIndex,
          correctAnswerIndex
        )}`}
      >
        {countryName}
      </button>
    </div>
  );
}
