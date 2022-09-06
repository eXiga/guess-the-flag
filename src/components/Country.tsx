import { CountryCode } from "../data/countries";
import { useGameStore } from "../store";

interface CountryProps {
  country: CountryCode;
}

export default function Country({ country }: CountryProps) {
  const setGuess = useGameStore((state) => state.setGuess);
  const countryName = country.name.split(",", 1)[0];

  return (
    <div className="grow">
      <button
        onClick={() => setGuess(countryName)}
        className="w-full h-12 text-xl truncate rounded-md font-mono bg-[#65C3C8]"
      >
        {countryName}
      </button>
    </div>
  );
}
