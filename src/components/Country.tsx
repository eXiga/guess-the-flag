import { CountryCode } from "../data/codes";

interface CountryProps {
  country: CountryCode;
}

export default function Country({ country }: CountryProps) {
  const countryName = country.name.split(",", 1);

  return (
    <div className="grow">
      <button className="w-full h-12 text-xl truncate rounded-md font-mono bg-[#65C3C8]">
        {countryName}
      </button>
    </div>
  );
}
