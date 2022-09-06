import { useGameStore } from "../store";
import { fetchRandomCountries, pickOneCountry } from "../data/countries";

export default function Welcome() {
  const { setAnswers, setCorrectAnswer } = useGameStore();

  return (
    <div className="bg-[#FAF7F5] w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-96">
          <button
            onClick={() => {
              const countries = fetchRandomCountries();
              const answer = pickOneCountry(countries);
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
