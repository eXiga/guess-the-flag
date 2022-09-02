import { CountryCode } from "../data/codes";

interface CountryProps {
  country: CountryCode;
}

export default function Country({ country }: CountryProps) {
  const countryName = country.name.split(',', 1);

  return (
    <div className="grow">
      <button className="w-full h-12 text-bold text-2xl border-2 border-solid rounded-md shadow-lg">{countryName}</button>
    </div>
  );
}
