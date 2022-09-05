import { useGameStore } from "../store";
import { codes, CountryCode } from "../data/codes";
import random from "../utils/random";

function fetchRandomCountries(): CountryCode[] {
  const countries: CountryCode[] = [];

  while (countries.length !== 4) {
    if (countries.length === 0) {
      countries.push(codes[random(0, codes.length - 1)]);
    } else {
      let country = codes[random(0, codes.length - 1)];
      while (countries.includes(country)) {
        country = codes[random(0, codes.length - 1)];
      }
      countries.push(country);
    }
  }

  return countries;
}

function createGuess(from: CountryCode[]): CountryCode {
  return from[random(0, from.length - 1)];
}

export default function Welcome() {
  const { setAnswers, setCorrectAnswer } = useGameStore();

  return (
    <div className="bg-[#FAF7F5] w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-96">
          <button
            onClick={() => {
              const countries = fetchRandomCountries();
              const answer = createGuess(countries);
              setAnswers(countries);
              setCorrectAnswer(answer);
            }}
            className="w-full h-12 text-xl truncate rounded-md font-mono bg-[#65C3C8]"
          >
            Start game
          </button>
        </div>
      </div>
    </div>
  );
}
